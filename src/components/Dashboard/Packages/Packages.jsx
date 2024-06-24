import React, { useEffect } from "react";
import PackagesHeader from "./PackagesHeader";
import PackagesMain from "./PackagesMain";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { fetchPackages, setDocs } from "store/packageSlice";
import ReactLoading from "react-loading";

const Packages = () => {
    const dispatch = useDispatch();
    const { data: data, isLoading } = useQuery({
        queryKey: ["getAllPackages"],
        queryFn: fetchPackages,
    });
    useEffect(() => {
        if (data) {
            const {
                data: {
                    data: { docs },
                },
            } = data;
            dispatch(setDocs(docs));
        }
    }, [data]);
    return (
        <div className="border-primary border rounded-md bg-pure p-4">
            <div>
                <PackagesHeader />
            </div>
            {isLoading ? (
                <div className="flex items-center justify-center">
                    <ReactLoading
                        type={"balls"}
                        color="orange"
                        height={"10%"}
                        width={"10%"}
                    />
                </div>
            ) : (
                <PackagesMain />
            )}
            <div></div>
        </div>
    );
};

export default Packages;
