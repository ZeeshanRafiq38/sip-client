import DashboardHeader from "components/global/DashboardHeader";
import Layout from "components/global/Layout";
import RequestStatus from "components/global/RequestStatus";
import React from "react";
import receipt from "assets/images/receipt.jpg";
const Details = () => {
    return (
        <Layout>
            <div>
                <div>
                    <DashboardHeader text="Deposit Details" />
                </div>
                <div className="bg-slate-100 rounded-lg shadow-lg border border-slate-200 p-4 flex flex-col gap-2">
                    <div className="flex items-center justify-between border-slate-200 border-b-[1px] pb-4">
                        <p className=" font-semibold">Deposit Amount</p>
                        <span className="text-primary">5,000</span>
                    </div>
                    <div className="flex items-center justify-between border-slate-200 border-b-[1px] pb-4">
                        <p className=" font-semibold">Added Amount</p>
                        <span className="text-primary">4,000</span>
                    </div>
                    <div className="flex items-center justify-between border-slate-200 border-b-[1px] pb-4">
                        <p className=" font-semibold">Date</p>
                        <span className="text-primary">
                            22 Nov 2023 04:19 pm
                        </span>
                    </div>
                    <div className="flex items-center justify-between border-slate-200 border-b-[1px] pb-4">
                        <p className=" font-semibold">From Bank Name</p>
                        <span className="text-primary">Easy Paisa</span>
                    </div>
                    <div className="flex items-center justify-between border-slate-200 border-b-[1px] pb-4">
                        <p className=" font-semibold">From Account Holder</p>
                        <span className="text-primary">John Doe</span>
                    </div>
                    <div className="flex items-center justify-between border-slate-200 border-b-[1px] pb-4">
                        <p className=" font-semibold">From Account Number</p>
                        <span className="text-primary">0322849483</span>
                    </div>
                    <div className="flex items-center justify-between border-slate-200 border-b-[1px] pb-4">
                        <p className=" font-semibold">To Bank Name</p>
                        <span className="text-primary">Faysla Bank</span>
                    </div>
                    <div className="flex items-center justify-between border-slate-200 border-b-[1px] pb-4">
                        <p className=" font-semibold">To Account Holder</p>
                        <span className="text-primary">Admin</span>
                    </div>
                    <div className="flex items-center justify-between border-slate-200 border-b-[1px] pb-4">
                        <p className=" font-semibold">To Account Number</p>
                        <span className="text-primary">0322849483</span>
                    </div>
                    <div className="flex items-center justify-between border-slate-200 border-b-[1px] pb-4">
                        <p className=" font-semibold">Status</p>
                        <span>
                            <RequestStatus status="running" />
                        </span>
                    </div>
                    <div className="flex flex-col border-slate-200 border-b-[1px] pb-4">
                        <p className=" font-semibold">Description</p>
                        <span className="text-gray">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s.
                        </span>
                    </div>
                    <div>
                        <p className="text-gray font-semibold text-xl">
                            Receipt
                        </p>
                        <div className="flex items-center justify-center">
                            <img src={receipt} alt="receipt" />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Details;
