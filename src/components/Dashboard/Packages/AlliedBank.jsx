import React from "react";
import OpenSvg from "assets/svgs/Dashboard/OpenSvg";
import allied from "assets/images/allied.jpg";
const AlliedBank = () => {
    return (
        <div className="border-slate-200 border flex flex-col gap-6 rounded-xl shadow-lg h-[300px]">
            <div className="flex justify-between">
                <div className="flex items-center gap-2 bg-pure pl-8">
                    <img
                        src={allied}
                        alt="bank-icon"
                        className="border-slate-200 border rounded-b-full w-16 py-2"
                    />
                    <div>
                        <h6 className="font-bold text-xl text-secondary ">
                            Allied Bank
                        </h6>
                        <p className="text-gray">20 Days Package</p>
                    </div>
                </div>
                <div className="bg-[#22C55E] p-2 flex flex-col justify-center items-center rounded-bl-3xl">
                    <OpenSvg />
                    <div className="text-pure">Open</div>
                </div>
            </div>
            <div>
                <div className="bg-primary w-full p-4 flex items-center justify-center">
                    <p className="text-pure font-bold text-xl">
                        EARN UPTO : 264,000
                    </p>
                </div>
                <p className="text-primary font-semibold text-center mt-2">
                    6% Daily Profit
                </p>
            </div>
            <div className="flex items-center justify-between p-3">
                <div className="flex flex-col">
                    <h6 className="font-bold">60000-120000</h6>
                    <span className="text-[#16A34A]">0 Sold</span>
                </div>
                <button className="text-secondary px-8 py-2 border-secondary border rounded-3xl text-lg hover:bg-secondary hover:text-pure transition-all ">
                    Invest Now
                </button>
            </div>
        </div>
    );
};

export default AlliedBank;
