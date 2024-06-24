import WithdrawSvg from "assets/svgs/Dashboard/WithdrawSvg";
import React from "react";

const Withdraw = () => {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center bg-pure shadow-md w-20 h-20 rounded-full">
                <WithdrawSvg />
            </div>
            <p className="text-xl text-primary font-semibold">Withdraw</p>
        </div>
    );
};

export default Withdraw;
