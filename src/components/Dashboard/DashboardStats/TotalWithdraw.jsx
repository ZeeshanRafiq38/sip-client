import TotalWithdrawSvg from "assets/svgs/Dashboard/TotalWithdrawSvg";
import React from "react";
import { useSelector } from "react-redux";

const TotalWithdraw = () => {
    const { user } = useSelector((state) => state.user);

    return (
        <div className="rounded-md text-[#EF4444] bg-pure flex flex-col p-4 text-xl">
            <p className="font-semibold">Total Withdraw</p>
            <div className="flex justify-between items-end h-full font-bold">
                <span>Rs. {user?.wallet?.totalWithdraw}</span>
                <TotalWithdrawSvg />
            </div>
        </div>
    );
};

export default TotalWithdraw;
