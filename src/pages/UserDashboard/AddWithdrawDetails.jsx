import WithdrawDetailsSvg from "assets/svgs/Dashboard/WithdrawDetailsSvg";
import DashboardHeader from "components/global/DashboardHeader";
import Input from "components/global/Input";
import Layout from "components/global/Layout";
import NormalSelectbox from "components/global/NormalSelectbox";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createWithdrawBank } from "store/withdrawBankSlice";

const AddWithdrawDetails = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [addBankDetails, setAddBankDetails] = useState({
        bankName: "allied bank limited",
        accountNo: "",
        accountHolder: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createWithdrawBank({ addBankDetails, navigate }));
    };

    return (
        <Layout>
            <div className="h-screen">
                <div>
                    <DashboardHeader text="Add Withdraw Details" />
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
                                data={addBankDetails}
                                setData={setAddBankDetails}
                            />
                        </div>
                        <div>
                            <Input
                                label="Account Holder Name"
                                type="text"
                                placeholder="Enter account name"
                                name="accountHolder"
                                data={addBankDetails}
                                setData={setAddBankDetails}
                            />
                        </div>
                    </div>
                    <div>
                        <Input
                            label="Account No"
                            type="number"
                            placeholder="Enter account number"
                            name="accountNo"
                            data={addBankDetails}
                            setData={setAddBankDetails}
                        />
                    </div>
                    <div>
                        <button className="btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default AddWithdrawDetails;
