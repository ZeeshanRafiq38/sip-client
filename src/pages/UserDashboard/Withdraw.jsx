import BankSvg from "assets/svgs/Dashboard/BankSvg";
import DashboardHeader from "components/global/DashboardHeader";
import Layout from "components/global/Layout";
import Fetcher from "components/utils/Fetcher";
import WithdrawBankDetails from "components/withdrawdetails/WithdrawBankDetails";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createWithdraw, setDoc, setSettingDoc } from "store/withdrawBankSlice";

const withdrawBankUrl = "/api/withdraw-bank/my";
const getSettingUrl = "/api/setting";
const Withdraw = () => {
    const { settingDoc } = useSelector((state) => state.withdrawBank);
    const [amount, setAmount] = useState("");
    const [calServiceCharges, setCalServiceCharges] = useState("");
    const [withdrawAmount, setWithdrawAmount] = useState({
        withdrawAmount: "",
    });
    const handleChange = (e) => {
        const value = e.target.value;
        setAmount(value);
    };
    useEffect(() => {
        if (amount) {
            const calServiceCharges =
                (amount / 100) * settingDoc?.serviceCharges;
            setCalServiceCharges(calServiceCharges);
            const recieveAmount = amount - calServiceCharges;
            setWithdrawAmount({
                withdrawAmount: recieveAmount,
            });
        }
    }, [amount]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.user);
    // const { doc } = useSelector((state) => state.withdrawBank);
    const { data: data } = useQuery({
        queryKey: ["getwithdrawbank"],
        queryFn: () => Fetcher(withdrawBankUrl, user),
    });
    useEffect(() => {
        if (data) {
            const {
                data: {
                    data: { doc },
                },
            } = data;
            dispatch(setDoc(doc));
        }
    }, [data]);
    const { data: settings } = useQuery({
        queryKey: ["getsettings"],
        queryFn: () => Fetcher(getSettingUrl),
    });
    useEffect(() => {
        if (settings) {
            const {
                data: {
                    data: { doc },
                },
            } = settings;
            dispatch(setSettingDoc(doc));
        }
    }, [settings]);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(withdrawAmount);
        dispatch(createWithdraw({ withdrawAmount, navigate }));
    };
    return (
        <Layout>
            <div>
                <div>
                    <DashboardHeader text="Withdraw" />
                </div>
                <form
                    className="bg-pure rounded-lg p-4 shadow-lg"
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col items-center text-xl">
                        <p>Available Balance</p>
                        <span className="text-primary font-bold my-1">
                            PKR : {user?.wallet?.totalBalance}
                        </span>
                    </div>
                    <div>
                        <div className="my-2">
                            <input
                                className="border w-full p-3 border-slate-400 rounded-md outline-none"
                                label="Enter Withdraw Amount"
                                placeholder="Enter Amount"
                                type="number"
                                value={amount}
                                onChange={handleChange}
                            />
                        </div>
                        <p className="text-red-500 pt-2">
                            <span className=" font-bold">NOTE : </span>
                            Please note that withdrawal requests can only be
                            made between {settingDoc?.withdrawStartTime} to
                            &nbsp;
                            {settingDoc?.withdrawEndTime} Pakistan Standard
                            Time. Kindly ensure that you initiate your
                            withdrawal within this time frame.
                        </p>
                    </div>
                    <div className="my-6">
                        <div className="font-medium pb-1 text-gray">
                            Withdraw Money To
                        </div>
                        <div className="border-slate-200 border rounded-lg p-4 shadow-md">
                           <WithdrawBankDetails />
                        </div>
                    </div>
                    {amount && (
                        <div className="flex flex-col gap-2 py-6 leading-tight">
                            <div className="flex items-center gap-12">
                                <p className="font-medium">Service Charges:</p>
                                <span>
                                    {settingDoc?.serviceCharges}% =
                                    {calServiceCharges} PKR
                                </span>
                            </div>
                            <div className="flex items-center gap-12">
                                <p className="font-medium">You Will Recieve:</p>
                                <span>{withdrawAmount.withdrawAmount} PKR</span>
                            </div>
                        </div>
                    )}

                    <div>
                        <button className="btn-primary" type="submit">
                            Withdraw
                        </button>
                    </div>
                    <p className="text-red-500 py-4">
                        <span className=" font-bold">NOTE : </span>
                        According to the policy , 3% service charges will be
                        applicable on every withdrawal
                    </p>
                </form>
            </div>
        </Layout>
    );
};

export default Withdraw;
