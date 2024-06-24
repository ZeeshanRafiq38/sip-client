import axios from "api/axios";
import DashboardHeader from "components/global/DashboardHeader";
import Layout from "components/global/Layout";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import ReactLoading from "react-loading";

const getBanksUrl = "/api/deposit-bank";
const SelectRange = () => {
    const [selectedItem, setSelectedItem] = useState("");

    const getBanksRange = async () => {
        try {
            const response = await axios.get(getBanksUrl);
            const {
                data: {
                    data: { docs },
                },
            } = response;
            return docs;
        } catch (error) {
            const {
                response: {
                    data: { message },
                },
            } = error;
            toast.error(message);
        }
    };
    const { data: docs, isLoading } = useQuery({
        queryKey: ["getBanksRange"],
        queryFn: getBanksRange,
    });
    return (
        <Layout>
            {isLoading ? (
                <div className=" loading-center">
                    <ReactLoading
                        type={"balls"}
                        color="orange"
                        height={"10%"}
                        width={"10%"}
                    />
                </div>
            ) : (
                <div>
                    <div>
                        <DashboardHeader text="Select Deposit Range" />
                    </div>
                    <div className="flex flex-col gap-4">
                        {docs?.map((item) => (
                            <div
                                className={`flex items-center justify-center bg-pure rounded-lg p-4 border-slate-200 border cursor-pointer ${
                                    selectedItem === item?._id
                                        ? "bg-orange-200"
                                        : ""
                                }`}
                                onClick={() => setSelectedItem(item?._id)}
                                key={item?._id}
                            >
                                <p>
                                    <span>{item?.minDeposit}</span>-
                                    {item?.maxDeposit}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="text-end py-8">
                        <Link to={`/deposits/new-deposit/${selectedItem}`}>
                            <button
                                className="btn-primary"
                                disabled={!selectedItem}
                            >
                                Next
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </Layout>
    );
};

export default SelectRange;
