import axios from "api/axios";
import CopyReferralCode from "components/global/CopyReferralCode";
import DashboardHeader from "components/global/DashboardHeader";
import FileInput from "components/global/FileInput";
import Input from "components/global/Input";
import Layout from "components/global/Layout";
import SelectBox from "components/global/SelectBox";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import NormalSelectbox from "components/global/NormalSelectbox";
import { sendDepositDetails } from "store/depositSlice";
import { toast } from "react-toastify";
import ReactLoading from "react-loading";

const getBankUrl = "/api/deposit-bank";
const NewDeposit = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const [depositDetails, setDepositDetails] = useState({
        depositBankId: params.id,
        bankName: "",
        accountHolder: "",
        accountNo: "",
        amount: "",
        proof: "",
    });
    const { user } = useSelector((state) => state.user);
    const token = user?.token;

    const getSingleBank = async () => {
        try {
            const response = await axios.get(`${getBankUrl}/${params.id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const {
                data: {
                    data: { doc },
                },
            } = response;
            return doc;
        } catch (error) {
            const {
                response: {
                    data: { message },
                },
            } = error;
            toast.error(message);
        }
    };
    const { data: doc, isLoading } = useQuery({
        queryKey: ["getSingleBank"],
        queryFn: getSingleBank,
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(sendDepositDetails(depositDetails));
    };
    return (
        <Layout>
            {isLoading ? (
                <div className=" loading-center">
                    <ReactLoading
                        type={"balls"}
                        color="orange"
                        height={"10%"}
                        width={"10%"}
                    />
                </div>
            ) : (
                <div>
                    <div>
                        <DashboardHeader text="Bank Details" />
                    </div>
                    <div className="bg-pure p-4 flex flex-col gap-4 shadow-md rounded-lg">
                        <div className=" grid grid-cols-2 items-center gap-4  ">
                            <div>
                                <CopyReferralCode
                                    referralHeading="Bank Name"
                                    value={doc?.bankName}
                                />
                            </div>
                            <div>
                                <CopyReferralCode
                                    referralHeading="Account Holder"
                                    value={doc?.accountHolder}
                                />
                            </div>
                        </div>
                        <div>
                            <CopyReferralCode
                                referralHeading="Account Number"
                                value={doc?.accountNo}
                            />
                        </div>
                        <p className="text-red-500 text-sm">
                            <span className="font-bold">NOTE</span> : Send
                            amount (You want to deposit) to the above mentioned
                            account. And upload the payment proof below. The
                            amount will be added to your wallet once admin
                            verify the transaction.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-primary text-2xl font-semibold py-8 ">
                            Enter Transaction Details
                        </h2>
                    </div>
                    <form
                        className="bg-pure p-4 rounded-lg shadow-lg flex flex-col gap-4"
                        onSubmit={handleSubmit}
                    >
                        <div className="grid grid-cols-2 items-center gap-4 ">
                            <NormalSelectbox
                                label="Sender Bank Name"
                                name="bankName"
                                options={[
                                    { value: "select--", label: "select--" },
                                    {
                                        value: "Bank of Punjab",
                                        label: "Bank of Punjab",
                                    },
                                    {
                                        value: "National Bank of Pakistan",
                                        label: "National Bank of Pakistan",
                                    },
                                    {
                                        value: "Allied Bank Limited",
                                        label: "Allied Bank Limited",
                                    },
                                ]}
                                data={depositDetails}
                                setData={setDepositDetails}
                            />
                            <div>
                                <Input
                                    label=" Account Holder"
                                    placeholder="Enter Account Holder Name"
                                    name="accountHolder"
                                    value={depositDetails}
                                    setValue={setDepositDetails}
                                />
                            </div>
                            <div>
                                <Input
                                    label="Sender Account Number "
                                    placeholder="Sender Account Number"
                                    type="number"
                                    name="accountNo"
                                    value={depositDetails}
                                    setValue={setDepositDetails}
                                />
                            </div>
                            <div>
                                <Input
                                    label="Amount "
                                    placeholder="Enter Deposit Account"
                                    type="number"
                                    name="amount"
                                    value={depositDetails}
                                    setValue={setDepositDetails}
                                />
                            </div>
                        </div>
                        <div>
                            <FileInput
                                label="Receipt Image"
                                value={depositDetails.proof}
                                setValue={(value) =>
                                    setDepositDetails({
                                        ...depositDetails,
                                        proof: value,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <button className="btn-primary" type="submit">
                                Deposit
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </Layout>
    );
};

export default NewDeposit;
