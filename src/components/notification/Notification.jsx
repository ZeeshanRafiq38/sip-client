import moment from "moment/moment";
import React from "react";

const Notification = ({ item }) => {
    return (
        <div key={item?._id}>
            <div className="bg-pure shadow-md rounded-lg flex flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-primary text-xl font-bold">
                        {item?.title}
                    </h2>
                    <p className="text-gray ">
                        {moment(item?.createdAt).format("DD MMM YYYY")}
                    </p>
                </div>
                <span className="text-gray">{item?.description}</span>
            </div>
        </div>
    );
};

export default Notification;
