import DashboardStats from "components/Dashboard/DashboardStats/DashboardStats";
import Packages from "components/Dashboard/Packages/Packages";
import Deposit from "components/Dashboard/wallets/Deposit";
import Withdraw from "components/Dashboard/wallets/Withdraw";
import Layout from "components/global/Layout";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { Link, json } from "react-router-dom";
import { setUser } from "store/authSlice";
import { getUser } from "store/dashboard";
import NoBankFound from "./NoBankFound";
import Fetcher from "components/utils/Fetcher";

const withdrawBankUrl = "/api/withdraw-bank/my";
const Dashboard = () => {
    // const user = JSON.parse(localStorage.getItem("userLogin"));
    const { user } = useSelector((state) => state.user);
    const token = user?.token;
    const dispatch = useDispatch();
    const { data: data, isLoading } = useQuery({
        queryKey: ["getUser"],
        queryFn: () => getUser(token),
    });
    useEffect(() => {
        if (data) {
            const {
                data: {
                    data: { doc },
                },
            } = data;
            // const updateToken = { token: token };
            dispatch(setUser({ ...doc, token }));
            localStorage.setItem(
                "userLogin",
                JSON.stringify({ ...doc, token })
            );
        }
    }, [data]);
    const { data: doc } = useQuery({
        queryKey: ["getmybank"],
        queryFn: () => Fetcher(withdrawBankUrl, user),
    });
    return (
        <Layout>
            <div className="h-full">
                <div>
                    <DashboardStats />
                </div>
                <div className="py-12 flex items-center justify-center gap-6">
                    <Link to="/deposits/select-range">
                        <Deposit />
                    </Link>
                    {doc?.data?.data?.doc === null ? (
                        <Link to="/bank-not-found">
                            <Withdraw />
                        </Link>
                    ) : (
                        <Link to="/withdraw">
                            <Withdraw />
                        </Link>
                    )}
                </div>
                <div>
                    <Packages />
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;
