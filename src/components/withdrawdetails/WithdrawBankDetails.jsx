import BankSvg from "assets/svgs/Dashboard/BankSvg";
import Fetcher from "components/utils/Fetcher";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const withdrawBankUrl = "/api/withdraw-bank/my";
const WithdrawBankDetails = () => {
    const [doc, setDoc] = useState();
    const { user } = useSelector((state) => state.user);
    const { data: data, isLoading } = useQuery({
        queryKey: ["getmywithdrawbank"],
        queryFn: () => Fetcher(withdrawBankUrl, user),
    });
    useEffect(() => {
        if (data) {
            const {
                data: {
                    data: { doc },
                },
            } = data;
            setDoc(doc);
        }
    }, [data]);
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <BankSvg />
                <div className="flex flex-col gap-1 leading-tight">
                    <p className="text-lg font-semibold">{doc?.bankName}</p>
                    <p className="text-sm text-gray">{doc?.accountNo}</p>
                    <span className="text-lg font-semibold">
                        {doc?.accountHolder}
                    </span>
                </div>
            </div>
            <Link to="/edit-withdraw-details">
                <div className="bg-slate-200 rounded-full w-20 h-20 flex items-center justify-center">
                    <i className="uil uil-pen text-2xl"></i>
                </div>
            </Link>
        </div>
    );
};

export default WithdrawBankDetails;
