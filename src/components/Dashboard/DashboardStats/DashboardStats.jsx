import React from "react";
import CurrentBalance from "./CurrentBalance";
import TotalDeposits from "./TotalDeposits";
import TotalWithdraw from "./TotalWithdraw";

const DashboardStats = () => {
    return (
        <div className="grid grid-cols-3 gap-8 w-full">
            <CurrentBalance />
            <TotalDeposits />
            <TotalWithdraw />
        </div>
    );
};

export default DashboardStats;
