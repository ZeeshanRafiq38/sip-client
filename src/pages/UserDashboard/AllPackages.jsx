import PackagesMain from "components/Dashboard/Packages/PackagesMain";
import DashboardHeader from "components/global/DashboardHeader";
import Layout from "components/global/Layout";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { fetchPackages, setDocs } from "store/packageSlice";
import ReactLoading from "react-loading";

const AllPackages = () => {
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
        <Layout>
            <div>
                <DashboardHeader text="All Packages" />
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
                <div className="border-primary border bg-pure p-4 rounded-md">
                    <PackagesMain />
                </div>
            )}
        </Layout>
    );
};

export default AllPackages;
