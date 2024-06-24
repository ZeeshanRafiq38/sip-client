import React from "react";
import Heading from "./Heading";
import BackBtn from "./BackBtn";

const DashboardHeader = ({text}) => {
    return (
        <div className="flex items-center justify-between">
            <Heading text={text} />
            <div className="hover:text-primary text-xl">
                <BackBtn text="Back" />
            </div>
        </div>
    );
};

export default DashboardHeader;
