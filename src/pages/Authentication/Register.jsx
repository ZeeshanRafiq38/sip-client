import React, { useState } from "react";
import Password from "components/auth/PasswordInput";
import BackBtn from "components/global/BackBtn";
import { useDispatch } from "react-redux";
import { registerUser } from "store/authSlice";
import UsernameInput from "components/auth/UsernameInput";
import PhoneInput from "components/auth/PhoneInput";
import ReferrerInput from "components/auth/ReferrerInput";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import EmailInput from "components/auth/EmailInput";

const intialState = {
    username: "",
    email: "",
    phone: "",
    referrer: "",
    password: "",
    confirmPassword: "",
};
const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState(intialState);
    const [formValidation, setFormValidation] = useState({
        isPhoneValid: false,
        isUsernameValid: false,
        isEmailValid: false,
        isPasswordValid: false,
        isConfirmPasswordValid: false,
    });

    // console.log(formData)
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.confirmPassword !== formData.password) {
            toast.error(" Password does not match");
            return;
        }
        dispatch(registerUser({ formData, navigate }));
        setFormData(intialState);
    };
    return (
        <div className="flex">
            <div className="flex-[2] bg-pure">
                <div>
                    <BackBtn />
                </div>
                <div className="flex justify-center mt-28">
                    <div className="flex flex-col items-center gap-4">
                        <h2 className="text-primary text-2xl font-semibold">
                            Create Your Account
                        </h2>
                        <p className="text-center text-gray leading-tight">
                            Welcome to SIP, Sign in to access your account and
                            stay <br /> connected with your financial journey.
                            Your success begins <br /> here.
                        </p>
                        <img
                            src="https://fir-course-989a4.web.app/static/media/register.20f9e3e59a97ef9ae46e.png"
                            alt="login"
                            className="w-[700px]"
                        />
                    </div>
                </div>
            </div>
            <div className="flex-1 bg-slate-200 h-full flex items-center  justify-center py-12 ">
                <div className=" bg-pure h-full shadow-lg rounded-lg flex flex-col items-center">
                    <div className="bg-primary py-12 pb-16 rounded-lg flex justify-center w-[450px]">
                        <img
                            className="w-[200px]"
                            src="https://fir-course-989a4.web.app/static/media/whiteLogo.2edf299f21754afc9b096ebf9f6f8322.svg"
                            alt="login-image"
                        />
                    </div>
                    <div className="bg-pure p-6 w-[370px]  shadow-md  rounded-md -translate-y-[30px]">
                        <h3 className="text-center py-2 pb-4 font-semibold text-lg">
                            Register To SIP
                        </h3>
                        <form
                            className="flex flex-col gap-3"
                            onSubmit={handleSubmit}
                        >
                            <UsernameInput
                                data={formData}
                                setData={setFormData}
                                setIsValid={setFormValidation}
                                isValid={formValidation}
                            />
                            <EmailInput
                                data={formData}
                                setData={setFormData}
                                setIsValid={setFormValidation}
                                isValid={formValidation}
                            />
                            <PhoneInput
                                data={formData}
                                setData={setFormData}
                                setIsValid={setFormValidation}
                                isValid={formValidation}
                            />
                            <ReferrerInput
                                data={formData}
                                setData={setFormData}
                                // setIsValid={setFormValidation}
                                // isValid={formValidation}
                            />

                            <div>
                                <Password
                                    placeholder=" Password"
                                    required
                                    autoComplete="off"
                                    name="password"
                                    data={formData}
                                    setData={setFormData}
                                    setIsValid={setFormValidation}
                                    isValid={formValidation}
                                    validationFieldName={"isPasswordValid"}
                                />
                            </div>
                            <div>
                                <Password
                                    placeholder="Confirm Password"
                                    required
                                    autoComplete="off"
                                    name="confirmPassword"
                                    data={formData}
                                    setData={setFormData}
                                    setIsValid={setFormValidation}
                                    isValid={formValidation}
                                    id="confirmPassword"
                                    validationFieldName={
                                        "isConfirmPasswordValid"
                                    }
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <button
                                    type="submit"
                                    className="btn-primary"
                                    disabled={!formValidation.isUsernameValid}
                                >
                                    Register
                                </button>
                                <Link to="/login">
                                    <button className="btn-secondary w-full">
                                        Login
                                    </button>
                                </Link>
                            </div>
                        </form>
                    </div>

                    <div className="flex items-center gap-2 pb-6">
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
    );
};

export default Register;
