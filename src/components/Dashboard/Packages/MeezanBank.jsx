import OpenSvg from "assets/svgs/Dashboard/OpenSvg";
import React from "react";
import meezan from "assets/images/meezan.jpg";
const MeezanBank = () => {
    return (
        <div className="border-slate-200 border flex flex-col gap-6 rounded-xl shadow-lg">
            <div className="flex justify-between">
                <div className="flex items-center gap-2 bg-pure pl-8">
                    <img
                        src={meezan}
                        alt="bank-icon"
                        className="border-slate-200 border rounded-b-full py-2 w-16"
                    />
                    <div>
                        <h6 className="font-bold text-xl text-secondary ">
                            Meezan Bank
                        </h6>
                        <p className="text-gray">7 Days Package</p>
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
                        EARN UPTO : 20,250
                    </p>
                </div>
                <p className="text-primary font-semibold text-center mt-2">
                    5% Daily Profit
                </p>
            </div>
            <div className="flex items-center justify-between p-3">
                <div className="flex flex-col">
                    <h6 className="font-bold">5000-15000</h6>
                    <span className="text-[#16A34A]">10 Sold</span>
                </div>
                <button className="text-secondary px-8 py-2 border-secondary border rounded-3xl text-lg hover:bg-secondary hover:text-pure transition-all ">
                    Invest Now
                </button>
            </div>
        </div>
    );
};

export default MeezanBank;
