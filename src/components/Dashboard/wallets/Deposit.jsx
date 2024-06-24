import DepositSvg from "assets/svgs/Dashboard/DepositSvg";
import React from "react";

const Deposit = () => {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center bg-pure shadow-md w-20 h-20 rounded-full">
                <DepositSvg />
            </div>
            <p className="text-primary text-xl font-semibold">Deposit</p>
        </div>
    );
};

export default Deposit;
