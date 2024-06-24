import React from "react";

const Heading = ({ text }) => {
    return (
        <div className="pb-6 pt-2">
            <h1 className="text-primary text-2xl font-semibold">{text}</h1>
        </div>
    );
};

export default Heading;
