import React, { useEffect, useState } from "react";
import OpenSvg from "assets/svgs/Dashboard/OpenSvg";
import ubl from "assets/images/ubl.jpg";
import Accordion from "react-accordion-comp";
import ProgressBar from "@ramonak/react-progress-bar";
import { baseUrl } from "api/axios";
import LockedSvg from "assets/svgs/Dashboard/LockedSvg";
import { Link } from "react-router-dom";

const UblBank = ({ item }) => {
    const [show, setShow] = useState(false);
    const toggleMenu = () => {
        setShow(!show);
    };
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [progress, setProgress] = useState(100);

    // console.log(progress)
    function calculateTimeLeft() {
        const difference = new Date(item?.offer?.endTime) - new Date();
        if (difference < 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        return {
            days: days.toString().padStart(2, "0"),
            hours: hours.toString().padStart(2, "0"),

            minutes: minutes.toString().padStart(2, "0"),
            seconds: seconds.toString().padStart(2, "0"),
        };
    }

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
            let now = new Date().getTime();
            let totalTime =
                new Date(item?.offer?.endTime).getTime() -
                new Date(item?.offer?.startTime).getTime();
            let progress = now - new Date(item?.offer?.startTime).getTime();
            let percentage = (progress / totalTime) * 100;
            setProgress(percentage);
        }, 1000);

        return () => {
            clearInterval(countdownInterval);
        };
    }, [item?.offer?.endTime, item?.offer?.startTime]);
    const currentDateEqualsStartDate =
        new Date().getTime() >= new Date(item?.offer?.startTime).getTime();
    // console.log("hello")

    return (
        <div className="border-slate-200 border flex flex-col gap-6 rounded-xl shadow-lg">
            <div className="flex justify-between">
                <div className="flex items-center gap-2 bg-pure pl-8">
                    <img
                        src={baseUrl + item?.image}
                        alt="bank-icon"
                        className="border-slate-200 border rounded-b-full w-16 py-2"
                    />
                    <div>
                        <h6 className="font-bold text-xl text-secondary ">
                            {item?.name}
                        </h6>
                        <p className="text-gray">
                            {item?.timePeriod} Day Package
                        </p>
                    </div>
                </div>
                <div
                    className={`${
                        item?.isActive === true ? "bg-[#22C55E]" : "bg-red-600"
                    } p-2 flex flex-col justify-center items-center rounded-bl-3xl`}
                >
                    {item?.isActive === true ? <OpenSvg /> : <LockedSvg />}

                    <div className="text-pure">
                        {item?.isActive === true ? "Open" : "Close"}
                    </div>
                </div>
            </div>
            <div>
                <div className="bg-primary w-full p-4 flex items-center justify-center">
                    <p className="text-pure font-bold text-xl">
                        EARN UPTO : {item?.maxReturnAmount}
                    </p>
                </div>
                <p className="text-primary font-semibold text-center mt-2">
                    {item?.dailyProfit}% Daily Profit
                </p>
            </div>
            <div className="flex items-center justify-between p-3">
                <div className="flex flex-col">
                    <h6 className="font-bold">
                        {item?.minInvest}-{item?.maxInvest}
                    </h6>
                    <span className="text-[#16A34A]">
                        {item?.totalSold} Sold
                    </span>
                </div>
                {/* <Link
                    to={`/invest-now/${item?._id}`}
                    className="text-secondary px-8 py-2 border-secondary border rounded-3xl text-lg hover:bg-secondary hover:text-pure transition-all disabled:cursor-not-allowed"
                    disabled={!item?.isActive}
                >
                    Invest Now
                </Link> */}
                {item?.isActive ? (
                    <Link
                        to={`/invest-now/${item?._id}`}
                        className="text-secondary px-8 py-2 border-secondary border rounded-3xl text-lg hover:bg-secondary hover:text-pure transition-all"
                    >
                        Invest Now
                    </Link>
                ) : (
                    <span className="text-secondary px-8 py-2 border-secondary border rounded-3xl text-lg cursor-not-allowed opacity-50">
                        Invest Now
                    </span>
                )}
            </div>
            {Object.values(item?.offer).every((value) => value) &&
                item?.isActive &&
                Object.values(timeLeft).every((value) => value !== 0) &&
                currentDateEqualsStartDate && (
                    <div>
                        <div className="text-secondary border-slate-200 border-t-[1px] flex items-center justify-between p-4 border-b-[1px]">
                            <p className=" font-medium">
                                {item?.offer?.cashback}% Cachback Offer
                            </p>
                            <i
                                onClick={toggleMenu}
                                className="uil uil-angle-down text-2xl"
                            ></i>
                        </div>

                        <Accordion isOpen={show}>
                            <div className="py-2 sm:px-4 px-2 pb-4">
                                <div className="flex items-center gap-2">
                                    <i className="uil uil-clock-five text-xl"></i>
                                    <div className="counter flex items-center gap-1">
                                        <div className="flex">
                                            {timeLeft?.days > 0 && (
                                                <p>{timeLeft.days}:</p>
                                            )}
                                            <p>
                                                {timeLeft?.hours}:
                                                {timeLeft?.minutes}:
                                                {timeLeft?.seconds}
                                            </p>
                                        </div>
                                        <span> Left </span>
                                    </div>
                                </div>
                                <div className="bg-[#D9D9D9] rounded-full w-full h-3 mt-2">
                                    <div
                                        className={`bg-primary h-full rounded-full`}
                                        style={{
                                            width: `${Math.abs(
                                                100 - progress
                                            )}%`,
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </Accordion>
                    </div>
                )}
        </div>
    );
};

export default UblBank;
