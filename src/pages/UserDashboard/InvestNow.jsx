import Layout from "components/global/Layout";
import React, { useEffect, useRef, useState } from "react";
import invest from "assets/images/invest.jpg";
import Heading from "components/global/Heading";
import { useQuery } from "react-query";
import { fetchSinglePackage, updateInvestAmount } from "store/InvestSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "store/authSlice";

const InvestNow = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [singlePackage, setSinglePackage] = useState();
    const ref = useRef();
    const [investAmount, setInvestAmount] = useState("");
    const [sendAmount, setSendAmount] = useState({
        dailyProfit: "",
        totalProfit: "",
        totalReturn: "",
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setInvestAmount(value);
    };

    useEffect(() => {
        if (!isNaN(parseFloat(investAmount))) {
            const value = parseFloat(investAmount);
            const dailyProfit = (value / 100) * singlePackage?.dailyProfit;
            const totalProfit = dailyProfit * singlePackage?.timePeriod;
            console.log(totalProfit);
            const totalReturn = value + totalProfit;

            setSendAmount({
                dailyProfit: dailyProfit,
                totalProfit: totalProfit,
                totalReturn: totalReturn,
            });
        }
    }, [investAmount, singlePackage]);

    const { user } = useSelector((state) => state?.user);
    const token = user?.token;
    const params = useParams();
    const id = params?.id;
    const { data: data, isLoading } = useQuery({
        queryKey: ["singlePackage"],
        queryFn: () => fetchSinglePackage(params.id),
    });
    useEffect(() => {
        if (data) {
            const {
                data: {
                    data: { doc },
                },
            } = data;
            setSinglePackage(doc);
        }
    }, [data]);
    // useEffect(() => {
    //     const handleWheel = (e) => e.preventDefault();
    //     ref.current.addEventListener("wheel", handleWheel);

    //     return () => {
    //         ref.current.removeEventListener("wheel", handleWheel);
    //     };
    // }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        const amount = { investAmount: investAmount, packageId: id };
        dispatch(updateInvestAmount({amount, navigate}));
    };
    return (
        <Layout>
            <div>
                <Heading text={"Invest Now"} />
                <div className="bg-pure rounded-lg shadow-md  p-4">
                    <div className=" flex items-center justify-center ">
                        <div className="flex flex-col items-center gap-3">
                            <img src={invest} alt="" />
                            <p className="text-primary font-semibold text-xl">
                                {singlePackage?.name}
                            </p>
                            <span className="text-gray text-sm">
                                {singlePackage?.timePeriod} Days
                            </span>
                            <p className="font-medium">
                                Current Balance : {user?.wallet?.totalBalance}
                            </p>
                        </div>
                    </div>
                    <div className="my-6 flex flex-col gap-4">
                        <div className="flex h-[60px] bg-pure rounded-md  shadow-md">
                            <div className=" invest-primary bg-primary w-full flex items-center px-2 rounded-md">
                                <h2 className="text-pure font-semibold">
                                    Earn Upto
                                </h2>
                            </div>
                            <div className="bg-pure w-full invest-pure flex justify-end items-center px-2 rounded-md">
                                <span>{singlePackage?.maxReturnAmount}</span>
                            </div>
                        </div>
                        <div className="flex h-[60px] bg-pure rounded-md shadow-md">
                            <div className=" invest-primary bg-primary w-full flex items-center px-2 rounded-md">
                                <h2 className="text-pure font-semibold">
                                    Daily Profit
                                </h2>
                            </div>
                            <div className="bg-pure w-full invest-pure flex items-center justify-end px-2 rounded-md ">
                                <span>{singlePackage?.dailyProfit}%</span>
                            </div>
                        </div>
                        <div className="flex h-[60px] bg-pure rounded-md shadow-md">
                            <div className=" invest-primary bg-primary w-full flex items-center px-2 rounded-md">
                                <h2 className="text-pure font-semibold">
                                    Invest Range
                                </h2>
                            </div>
                            <div className="bg-pure w-full flex justify-end px-2 rounded-md">
                                <span>
                                    {singlePackage?.minInvest}-
                                    {singlePackage?.maxInvest}
                                </span>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-3">
                            <label className="font-semibold ">
                                Enter Invest Amount
                            </label>
                            <input
                                type="number"
                                placeholder="Enter Invest Amount"
                                className="p-3 border border-slate-300 rounded-md outline-none"
                                value={investAmount}
                                onChange={handleChange}
                                ref={ref}
                                autoFocus
                            />
                        </div>
                        {sendAmount?.investAmount !== "" && (
                            <div className="flex flex-col gap-3 pt-3 ">
                                <div className="flex items-center gap-4">
                                    <h2 className="font-semibold">
                                        Daily Profit:
                                    </h2>
                                    <span className="text-slate-600">
                                        {singlePackage?.dailyProfit}% =
                                        {sendAmount?.dailyProfit} PKR
                                    </span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <h2 className="font-semibold">
                                        Total Profit:
                                    </h2>
                                    <span className="text-slate-600">
                                        {singlePackage?.dailyProfit}% =
                                        {sendAmount?.totalProfit} PKR
                                    </span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <h2 className="font-semibold">
                                        Total Return:
                                    </h2>
                                    <span className="text-slate-600">
                                        {singlePackage?.dailyProfit}% ={" "}
                                        {sendAmount?.totalReturn} PKR
                                    </span>
                                </div>
                            </div>
                        )}

                        <button className="btn-primary my-6 w-[150px]">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default InvestNow;
