import React from "react";
import sipProgram from "assets/images/sip-program.jpg";
import { baseUrl } from "api/axios";

const Card = ({ item }) => {
    return (
        // <div className="grid grid-cols-3">
        <div className="bg-pure p-4 flex flex-col gap-4 rounded-lg shadow-lg">
            <img
                src={baseUrl + item?.image}
                alt="sip-program"
                className="w-full h-[300px] object-cover"
            />
            <p className="text-primary font-bold text-xl text-center">
                {item?.title}
            </p>
            <button className="btn-secondary">Details</button>
        </div>
        // </div>
    );
};

export default Card;
