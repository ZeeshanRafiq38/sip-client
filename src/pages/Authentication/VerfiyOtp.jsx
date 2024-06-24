import BackBtn from "components/global/BackBtn";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import OtpInput from "react-otp-input";

const VerfiyOtp = () => {
    const [otp, setOtp] = useState("");
    return (
        <div className="flex">
            <div className="flex-[2] bg-pure">
                <div>
                    <BackBtn />
                </div>
                <div className="flex justify-center mt-28">
                    <div className="flex flex-col items-center gap-4">
                        <h2 className="text-primary text-2xl font-semibold">
                            Verify Your Otp
                        </h2>
                        <p className="text-center text-gray leading-tight">
                            To enhance your account security, we've sent you a
                            one-time verification code. Please <br /> enter the
                            code you received to complete the verification
                            process. Your account's safety <br /> is our
                            priority.
                        </p>
                        <img
                            src="https://fir-course-989a4.web.app/static/media/login.b096353cb9f855174488.png"
                            alt="login"
                            className="w-[700px]"
                        />
                    </div>
                </div>
            </div>
            <div className="flex-1 bg-slate-200 h-screen flex items-center  justify-center py-12 ">
                <div className=" bg-pure h-fit shadow-lg rounded-lg flex flex-col items-center">
                    <div className="bg-primary py-12 pb-16 rounded-lg flex justify-center w-[450px]">
                        <img
                            className="w-[200px]"
                            src="https://fir-course-989a4.web.app/static/media/whiteLogo.2edf299f21754afc9b096ebf9f6f8322.svg"
                            alt="login-image"
                        />
                    </div>
                    <div className="bg-pure p-6 w-[370px]  shadow-md  rounded-md -translate-y-[30px]">
                        <h3 className="text-center py-2 pb-4 font-semibold text-lg">
                            Verify OTP
                        </h3>
                        <form className="flex flex-col gap-4">
                            <div className=" p-2 rounded-md">
                                <OtpInput
                                    value={otp}
                                    onChange={setOtp}
                                    numInputs={5}
                                    renderSeparator={<span></span>}
                                    renderInput={(props) => (
                                        <input {...props} />
                                    )}
                                    inputStyle="otp"
                                    containerStyle="container-otp"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <Link to="/reset-password">
                                    <button className="btn-primary w-full">
                                        Verify
                                    </button>
                                </Link>

                                <Link to="/login">
                                    <button className="btn-secondary w-full">
                                        Back To Login
                                    </button>
                                </Link>
                            </div>
                        </form>
                    </div>
                    <div className="flex items-center gap-2 pb-6">
                        <div className="flex items-center gap-2">
                            <div className="flex flex-col gap-2 items-center">
                                <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center">
                                    <i className="uil uil-whatsapp text-pure text-2xl"></i>
                                </div>
                                <p className="text-primary text-center">
                                    Join Group
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 items-center justify-center">
                                <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center">
                                    <i className="uil uil-phone text-2xl text-pure"></i>
                                </div>
                                <p className="text-primary">Contact Us</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerfiyOtp;
