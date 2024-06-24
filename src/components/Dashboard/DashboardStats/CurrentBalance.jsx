import React from "react";
import { useSelector } from "react-redux";

const CurrentBalance = () => {
    const { user } = useSelector((state) => state.user);
    return (
        <div className="bg-pure w-full py-10 px-6 relative rounded-md text-xl">
            <p className="font-semibold pb-2">Current Balance</p>
            <p className="font-bold">Rs. {user?.wallet?.totalBalance}</p>
            <div className="absolute left-0 top-0 w-3 h-full bg-primary rounded-xl"></div>
        </div>
    );
};

export default CurrentBalance;
