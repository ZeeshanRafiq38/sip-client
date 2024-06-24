import React from "react";
import { useSelector } from "react-redux";

const TotalDeposits = () => {
    const { user } = useSelector((state) => state.user);

    return (
        <div className="rounded-md text-[#22C55E] bg-pure flex flex-col p-4 text-xl">
            <p className="font-semibold">Total Deposit</p>
            <div className="flex justify-between items-end h-full font-bold">
                <span>Rs. {user?.wallet?.totalDepositAmount}</span>
                <p>$</p>
            </div>
        </div>
    );
};

export default TotalDeposits;
