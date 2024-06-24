import InvestmentHistoryTable from "components/Invests/InvestmentHistoryTable";
import DashboardHeader from "components/global/DashboardHeader";
import Date from "components/global/Date";
import FromDate from "components/global/FromDate";
import Layout from "components/global/Layout";
import Search from "components/global/Search";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from "react-loading";
import {
    getMyInvests,
    setDocs,
    setPage,
    setPages,
    setTo,
    setFrom,
} from "store/InvestSlice";

const Invests = () => {
    const dispatch = useDispatch();
    const { page, pages, to, from } = useSelector((state) => state.invest);
    const { token } = useSelector((state) => state.user.user);
    const {
        data: data,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["getMyinvests", page, pages, from === "" && to === ""],
        queryFn: () => getMyInvests(token, page, pages, from, to),
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
    const handleSearch = (e) => {
        e.preventDefault();
        refetch();
    };
    const clearFilter = () => {
        dispatch(setFrom(""));
        dispatch(setTo(""));
        // setTimeout(() => {
        //     refetch();
        // }, 500);
    };
    return (
        <Layout>
            <div className="h-screen">
                <div>
                    <DashboardHeader text="Investment Histroy" />
                </div>
                <form
                    className=" bg-pure p-4 flex flex-col gap-4 shadow-lg rounded-md"
                    onSubmit={handleSearch}
                >
                    <div className="rounded-lg grid grid-cols-3 gap-8">
                        <Date
                            label={"From"}
                            type={"date"}
                            useStore={true}
                            data={from}
                            setData={setFrom}
                        />
                        <Date
                            label={"To"}
                            type={"date"}
                            useStore={true}
                            data={to}
                            setData={setTo}
                        />
                    </div>
                    <div className="flex items-center justify-end gap-4">
                        <button
                            className="btn-secondary"
                            type="button"
                            onClick={clearFilter}
                        >
                            Clear Filters
                        </button>
                        <button className="btn-primary">Search</button>
                    </div>
                </form>
                {/* investment History Table */}
                {isLoading ? (
                    <div className="loading-center">
                        <ReactLoading
                            type={"balls"}
                            color="orange"
                            height={"10%"}
                            width={"10%"}
                        />
                    </div>
                ) : (
                    <InvestmentHistoryTable />
                )}
            </div>
        </Layout>
    );
};

export default Invests;
