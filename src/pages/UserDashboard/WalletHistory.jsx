import WalletHistoryTable from "components/WalletHistory/WalletHistoryTable";
import DashboardHeader from "components/global/DashboardHeader";
import Date from "components/global/Date";
import Layout from "components/global/Layout";
import Fetcher from "components/utils/Fetcher";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { setDocs, setPage, setPages } from "store/walletSlice";
import ReactLoading from "react-loading";


const walletHistoryUrl = `/api/wallet-history`;
const WalletHistory = () => {
    const [sorting, setSorting] = useState({
        from: "",
        to: "",
    });
    const { page } = useSelector((state) => state.wallet);
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);
    const queryKey = ["walletHistory", page];
    const {
        data: data,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: queryKey,

        queryFn: () =>
            Fetcher(
                `${walletHistoryUrl}?from=${sorting.from}&to=${sorting.to}&page=${page}`,
                user
            ),
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
        setSorting({
            from: "",
            to: "",
        });
        setTimeout(() => {
            refetch();
        }, 500);
    };
    return (
        <Layout>
            <div>
                <div>
                    <DashboardHeader text="Wallet History" />
                </div>
                <form
                    className=" bg-pure p-4 flex flex-col gap-4 shadow-lg rounded-md"
                    onSubmit={handleSubmit}
                >
                    <div className="rounded-lg grid grid-cols-2 gap-8">
                        <Date
                            text={"From"}
                            type={"date"}
                            name={"from"}
                            data={sorting}
                            setData={setSorting}
                        />
                        <Date
                            text={"To"}
                            type={"date"}
                            name={"to"}
                            data={sorting}
                            setData={setSorting}
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
                <div>
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
                        <WalletHistoryTable />
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default WalletHistory;
