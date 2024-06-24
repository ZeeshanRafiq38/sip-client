import ClaimedSvg from "assets/svgs/Dashboard/ClaimedSvg";
import CompletedSvg from "assets/svgs/Dashboard/CompletedSvg";
import RunningSvg from "assets/svgs/Dashboard/RunningSvg";
import Layout from "components/global/Layout";
import Pagination from "components/global/pagination/index";
import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useQuery } from "react-query";
import {
    getClaimProfit,
    getInvest,
    setDocs,
    setPage,
    setPages,
} from "store/portfolio";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";

const Portfolio = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.user.user);
    const { docs, page, pages } = useSelector((state) => state.portfolio);
    const [activeTab, setActiveTab] = useState("running");
    // console.log(activeTab);
    const { data: data, isLoading } = useQuery({
        queryKey: ["getInvest", activeTab, page],
        queryFn: () => getInvest(token, activeTab, page, pages),
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
    const handleTab1 = () => {
        // update the state to tab1
        setActiveTab("running");
    };
    const handleTab2 = () => {
        // update the state to tab2
        setActiveTab("completed");
    };
    const handleTab3 = () => {
        // update the state to tab2
        setActiveTab("claimed");
    };
    const handleClaimed = (id) => {
        getClaimProfit(id, token, navigate);
    };
    return (
        <Layout>
            <div className="h-screen">
                <Tabs className="Tabs">
                    <TabList>
                        <Tab onClick={handleTab1}>
                            <div className="flex flex-col items-center gap-1  font-medium">
                                <p>Running</p>
                                <RunningSvg activeTab={activeTab} />
                            </div>
                        </Tab>
                        <Tab onClick={handleTab2}>
                            <div className="flex flex-col items-center gap-1  font-medium">
                                <p>Completed</p>
                                <CompletedSvg activeTab={activeTab} />
                            </div>
                        </Tab>
                        <Tab onClick={handleTab3}>
                            <div className="flex flex-col items-center gap-1  font-medium">
                                <p>Claimed</p>
                                <ClaimedSvg activeTab={activeTab} />
                            </div>
                        </Tab>
                    </TabList>

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
                        docs?.length > 0 &&
                        docs
                            ?.filter((item) => item.status === activeTab)
                            .map((item) => (
                                <TabPanel>
                                    <div className="w-[500px] rounded-lg border-slate-200 border shadow-sm">
                                        <h3 className="bg-primary font-medium text-white p-4 text-center text-xl rounded-t-lg">
                                            {item?.packageName}
                                        </h3>
                                        <div className="p-4 flex flex-col gap-3 bg-pure rounded-b-lg">
                                            <div className="flex items-center justify-between">
                                                <div className="flex flex-col gap-1">
                                                    <p className="text-primary font-medium">
                                                        Total Return
                                                    </p>
                                                    <span className="text-gray text-sm">
                                                        {
                                                            item?.totalReturnAmount
                                                        }
                                                    </span>
                                                </div>
                                                <div
                                                    style={{
                                                        width: 70,
                                                        height: 70,
                                                    }}
                                                >
                                                    <CircularProgressbar
                                                        value={`${Math.round(
                                                            item?.progress
                                                        )}`}
                                                        text={`${Math.round(
                                                            item?.progress
                                                        )}%`}
                                                        strokeWidth={15}
                                                        styles={buildStyles({
                                                            // Colors
                                                            pathColor:
                                                                "#f2722b",
                                                            textColor:
                                                                "#f2722b",
                                                            trailColor:
                                                                "#d6d6d6",
                                                            backgroundColor:
                                                                "#3e98c7",
                                                        })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <p className="text-primary font-medium">
                                                    Daily Income
                                                </p>
                                                <span className="text-gray text-sm">
                                                    {item?.dailyProfitAmount}
                                                </span>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <p className="text-primary font-medium">
                                                    Duration
                                                </p>
                                                <span className="text-gray text-sm">
                                                    {item?.package?.timePeriod}{" "}
                                                    Day
                                                </span>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <p className="text-primary font-medium">
                                                    Invest Amount
                                                </p>
                                                <span className="text-gray text-sm">
                                                    {item?.investAmount}
                                                </span>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <p className="text-primary font-medium">
                                                    Start Date
                                                </p>
                                                <span className="text-gray text-sm">
                                                    {moment(
                                                        item?.startDate
                                                    ).format("DD MMM YYYY")}
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex flex-col gap-1">
                                                    <p className="text-primary font-medium">
                                                        End Date
                                                    </p>
                                                    <span className="text-gray text-sm">
                                                        {moment(
                                                            item?.endDate
                                                        ).format("DD MMM YYYY")}
                                                    </span>
                                                </div>
                                                <div>
                                                    <button className="btn-secondary">
                                                        Running
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <Pagination
                                            currentPage={page}
                                            pageCount={pages}
                                            setPage={setPage}
                                        />
                                    </div>
                                </TabPanel>
                            ))
                    )}
                    {docs?.length > 0 &&
                        docs
                            ?.filter((item) => item.status === activeTab)
                            .map((item) => (
                                <TabPanel>
                                    <div className="w-[500px] rounded-lg border-slate-200 border shadow-sm">
                                        <h3 className="bg-primary font-medium text-white p-4 text-center text-xl rounded-t-lg">
                                            {item?.packageName}
                                        </h3>
                                        <div className="p-4 flex flex-col gap-3 bg-pure rounded-b-lg">
                                            <div className="flex items-center justify-between">
                                                <div className="flex flex-col gap-1">
                                                    <p className="text-primary font-medium">
                                                        Total Return
                                                    </p>
                                                    <span className="text-gray text-sm">
                                                        {
                                                            item?.totalReturnAmount
                                                        }
                                                    </span>
                                                </div>
                                                <div
                                                    style={{
                                                        width: 70,
                                                        height: 70,
                                                    }}
                                                >
                                                    <CircularProgressbar
                                                        value={`${Math.round(
                                                            item?.progress
                                                        )}`}
                                                        text={`${Math.round(
                                                            item?.progress
                                                        )}%`}
                                                        strokeWidth={15}
                                                        styles={buildStyles({
                                                            // Colors
                                                            pathColor:
                                                                "#f2722b",
                                                            textColor:
                                                                "#f2722b",
                                                            trailColor:
                                                                "#d6d6d6",
                                                            backgroundColor:
                                                                "#3e98c7",
                                                        })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <p className="text-primary font-medium">
                                                    Daily Income
                                                </p>
                                                <span className="text-gray text-sm">
                                                    {item?.dailyProfitAmount}
                                                </span>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <p className="text-primary font-medium">
                                                    Duration
                                                </p>
                                                <span className="text-gray text-sm">
                                                    {item?.package?.timePeriod}
                                                </span>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <p className="text-primary font-medium">
                                                    Invest Amount
                                                </p>
                                                <span className="text-gray text-sm">
                                                    {item?.investAmount}
                                                </span>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <p className="text-primary font-medium">
                                                    Start Date
                                                </p>
                                                <span className="text-gray text-sm">
                                                    {moment(
                                                        item?.startDate
                                                    ).format("DD MMM YYYY")}
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex flex-col gap-1">
                                                    <p className="text-primary font-medium">
                                                        End Date
                                                    </p>
                                                    <span className="text-gray text-sm">
                                                        {moment(
                                                            item?.endDate
                                                        ).format("DD MMM YYYY")}
                                                    </span>
                                                </div>
                                                <div>
                                                    <button
                                                        onClick={() =>
                                                            handleClaimed(
                                                                item?._id
                                                            )
                                                        }
                                                        className={`${
                                                            item?.status ===
                                                                "completed" &&
                                                            " px-6 py-2 rounded-full text-green-600 border border-green-600 hover:bg-green-500 hover:text-pure cursor-pointer transition-all"
                                                        }`}
                                                    >
                                                        Claim Profit
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <Pagination
                                            currentPage={page}
                                            pageCount={pages}
                                            setPage={setPage}
                                        />
                                    </div>
                                </TabPanel>
                            ))}
                    {docs?.length > 0 &&
                        docs
                            ?.filter((item) => item.status === activeTab)
                            .map((item) => (
                                <TabPanel>
                                    <div className="w-[500px] rounded-lg border-slate-200 border shadow-sm">
                                        <h3 className="bg-primary font-medium text-white p-4 text-center text-xl rounded-t-lg">
                                            {item?.packageName}
                                        </h3>
                                        <div className="p-4 flex flex-col gap-3 bg-pure rounded-b-lg">
                                            <div className="flex items-center justify-between">
                                                <div className="flex flex-col gap-1">
                                                    <p className="text-primary font-medium">
                                                        Total Return
                                                    </p>
                                                    <span className="text-gray text-sm">
                                                        {
                                                            item?.totalReturnAmount
                                                        }
                                                    </span>
                                                </div>
                                                <div
                                                    style={{
                                                        width: 70,
                                                        height: 70,
                                                    }}
                                                >
                                                    <CircularProgressbar
                                                        value={`${item?.progress}`}
                                                        text={`${item?.progress}%`}
                                                        strokeWidth={15}
                                                        styles={buildStyles({
                                                            // Colors
                                                            pathColor:
                                                                "#f2722b",
                                                            textColor:
                                                                "#f2722b",
                                                            trailColor:
                                                                "#d6d6d6",
                                                            backgroundColor:
                                                                "#3e98c7",
                                                        })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <p className="text-primary font-medium">
                                                    Daily Income
                                                </p>
                                                <span className="text-gray text-sm">
                                                    {item?.dailyProfitAmount}
                                                </span>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <p className="text-primary font-medium">
                                                    Duration
                                                </p>
                                                <span className="text-gray text-sm">
                                                    {item?.package?.timePeriod}{" "}
                                                    Day
                                                </span>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <p className="text-primary font-medium">
                                                    Invest Amount
                                                </p>
                                                <span className="text-gray text-sm">
                                                    {item?.investAmount}
                                                </span>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <p className="text-primary font-medium">
                                                    Start Date
                                                </p>
                                                <span className="text-gray text-sm">
                                                    {moment(
                                                        item?.startDate
                                                    ).format("DD MMM YYYY")}
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex flex-col gap-1">
                                                    <p className="text-primary font-medium">
                                                        End Date
                                                    </p>
                                                    <span className="text-gray text-sm">
                                                        {moment(
                                                            item?.endDate
                                                        ).format("DD MMM YYYY")}
                                                    </span>
                                                </div>
                                                <div>
                                                    <button className="btn-secondary">
                                                        Claimed
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <Pagination
                                            currentPage={page}
                                            pageCount={pages}
                                            setPage={setPage}
                                        />
                                    </div>
                                </TabPanel>
                            ))}
                </Tabs>
            </div>
        </Layout>
    );
};

export default Portfolio;
