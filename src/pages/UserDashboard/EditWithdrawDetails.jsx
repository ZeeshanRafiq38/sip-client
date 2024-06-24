import WithdrawDetailsSvg from "assets/svgs/Dashboard/WithdrawDetailsSvg";
import DashboardHeader from "components/global/DashboardHeader";
import Input from "components/global/Input";
import Layout from "components/global/Layout";
import NormalSelectbox from "components/global/NormalSelectbox";
import Fetcher from "components/utils/Fetcher";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UpdateWithdrawBank } from "store/withdrawBankSlice";

const withdrawUrl = "/api/withdraw-bank/my";
const EditWithdrawDetails = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [updateWithdrawBank, setUpdateWithdrawBank] = useState({
        bankName: "",
        accountHolder: "",
        accountNo: "",
    });
    const { user } = useSelector((state) => state.user);
    const { data: data, isLoading } = useQuery({
        queryKey: ["getmywithdrawbank"],
        queryFn: () => Fetcher(withdrawUrl, user),
    });
    useEffect(() => {
        if (data) {
            const {
                data: {
                    data: { doc },
                },
            } = data;
            setUpdateWithdrawBank(doc);
        }
    }, [data]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const updateBank = {
            bankName: updateWithdrawBank?.bankName,
            accountHolder: updateWithdrawBank?.accountHolder,
            accountNo: updateWithdrawBank?.accountNo,
        };
        dispatch(
            UpdateWithdrawBank({
                updateBank,
                navigate,
            })
        );
        // navigate("/withdraw-details")
    };
    return (
        <Layout>
            <div>
                <DashboardHeader text="Edit Withdraw Details" />
            </div>
            <form
                className="bg-pure rounded-lg shadow-lg p-4 flex flex-col gap-6"
                onSubmit={handleSubmit}
            >
                <div className="flex justify-center">
                    <WithdrawDetailsSvg />
                </div>
                <div className="grid grid-cols-2 items-center gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold">Bank Name</label>
                        <NormalSelectbox
                            options={[
                                {
                                    label: "Allied Bank Limited",
                                    value: "allied bank limited",
                                },
                                {
                                    label: "Bank of Punjab",
                                    value: "bank of punjab",
                                },
                            ]}
                            name="bankName"
                            data={updateWithdrawBank}
                            setData={setUpdateWithdrawBank}
                        />
                    </div>
                    <div>
                        <Input
                            label="Account Holder Name"
                            type="text"
                            placeholder="Enter Account Name"
                            name="accountHolder"
                            data={updateWithdrawBank}
                            setData={setUpdateWithdrawBank}
                        />
                    </div>
                </div>
                <div>
                    <Input
                        label="Account Holder Name"
                        type="number"
                        placeholder="Enter Account Number"
                        name="accountNo"
                        data={updateWithdrawBank}
                        setData={setUpdateWithdrawBank}
                    />
                </div>
                <div>
                    <button className="btn-primary">Submit</button>
                </div>
            </form>
        </Layout>
    );
};

export default EditWithdrawDetails;
