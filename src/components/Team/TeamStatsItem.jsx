import React from "react";

const TeamStatsItem = ({ percentage = "", title = "", value = "" }) => {
    return (
        <div className="p-4 rounded-lg shadow-md flex flex-col items-center gap-2 text-xl border-slate-200 border my-4">
            <span className="text-primary font-bold text-2xl">{value}</span>
            <p className="text-gray">{percentage}</p>
            <p className="text-black font-semibold">{title}</p>
        </div>
    );
};

export default TeamStatsItem;
