import Wallet from "assets/svgs/Dashboard/Wallet";
import DashboardHeader from "components/global/DashboardHeader";
import Layout from "components/global/Layout";
import WithdrawBankDetails from "components/withdrawdetails/WithdrawBankDetails";
import React from "react";

const WithdrawDetails = () => {
    return (
        <Layout>
            <div>
                <div>
                    <DashboardHeader text="Withdraw Details" />
                </div>
                <div className="bg-pure p-4 pb-12 shadow-lg">
                    <div className=" rounded-md flex items-center justify-center">
                        <Wallet />
                    </div>
                    <div>
                        <h2 className="text-primary text-lg font-semibold">
                            Attached Bank
                        </h2>
                    </div>
                    <div className="border-slate-200 border rounded-lg p-4 shadow-md">
                        <WithdrawBankDetails />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default WithdrawDetails;
