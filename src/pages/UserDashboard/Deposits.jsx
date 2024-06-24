import DepositsTable from "components/Deposits/DepositsTable";
import DashboardHeader from "components/global/DashboardHeader";
import  ReactLoading  from "react-loading";
import FromDate from "components/global/FromDate";
import Layout from "components/global/Layout";
import NormalSelectbox from "components/global/NormalSelectbox";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchDeposits,
    setDocs,
    setPage,
    setPages,
    setStatus,
} from "store/depositSlice";

const Deposits = () => {
    const [filterDate, setFilterDate] = useState({
        status: "",
        from: "",
        to: "",
    });
    const { user } = useSelector((state) => state.user);
    const token = user?.token;
    const dispatch = useDispatch();
    const query = `?status=${filterDate.status}&from=${filterDate.from}&to=${filterDate.to}`;

    const {
        data: data,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["mydeposits", filterDate.status],
        queryFn: () => fetchDeposits(token, query),
    });
    useEffect(() => {
        if (data) {
            const {
                data: {
                    data: { docs, page, pages },
                },
            } = data;
            dispatch(setDocs(docs));
            dispatch(setPage(page));
            dispatch(setPages(pages));
        }
    }, [data]);
    const handleSubmit = (e) => {
        e.preventDefault();
        refetch();
    };
    const clearFilters = () => {
        setFilterDate({
            status: "",
            from: "",
            to: "",
        });
    };
    return (
        <Layout>
            <div>
                <div>
                    <DashboardHeader text={"Deposits"} />
                </div>
                <form
                    className=" bg-pure p-4 flex flex-col gap-4 shadow-lg rounded-md"
                    onSubmit={handleSubmit}
                >
                    <div className="rounded-lg grid grid-cols-3 gap-8">
                        <div className="flex flex-col gap-2">
                            {/* <Search /> */}
                            <NormalSelectbox
                                name="status"
                                label="Status"
                                data={filterDate}
                                setData={setFilterDate}
                                options={[
                                    {
                                        value: "",
                                        label: "All",
                                    },
                                    {
                                        value: "pending",
                                        label: "Pending",
                                    },
                                    {
                                        value: "approved",
                                        label: "Approved",
                                    },
                                    {
                                        value: "declined",
                                        label: "Declined",
                                    },
                                ]}
                            />
                        </div>
                        <FromDate
                            label="From"
                            type={"date"}
                            name="from"
                            data={filterDate}
                            setData={setFilterDate}
                        />
                        <FromDate
                            label={"To"}
                            type={"date"}
                            name="to"
                            data={filterDate}
                            setData={setFilterDate}
                        />
                    </div>
                    <div className="flex items-center justify-end gap-4">
                        <button
                            className="btn-secondary"
                            type="button"
                            onClick={clearFilters}
                        >
                            Clear Filters
                        </button>
                        <button className="btn-primary">Search</button>
                    </div>
                </form>
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
                    <DepositsTable />
                )}
            </div>
        </Layout>
    );
};

export default Deposits;
