import React from "react";
import Username from "assets/svgs/Username";
import { memo } from "react";

const EmailInput = ({ data, setData, setIsValid, isValid }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
        setIsValid((prev) => ({
            ...prev,
            isEmailValid: validateInput(value),
        }));
    };

    const validateInput = (value) => {
        const email = value || data.email;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    return (
        <div>
            <div
                className={`${
                    data?.email?.length > 0
                        ? isValid.isEmailValid
                            ? "border-green-500 border"
                            : !isValid.isEmailValid
                            ? "border-red-500 border"
                            : ""
                        : ""
                } flex items-center gap-2 bg-slate-200 p-2 rounded-md`}
            >
                <Username />
                <input
                    type="text"
                    className=" bg-slate-200 outline-none w-full"
                    placeholder="email"
                    required
                    value={data.email}
                    name={"email"}
                    onChange={handleChange}
                />
            </div>
            {data?.email.length > 0 && !isValid.isEmailValid && (
                <span className="text-xs text-red-500">
                    <span>{"Please enter valid email"}</span>
                </span>
            )}
            {data?.email.length > 0 && isValid.isEmailValid && (
                <span className="text-xs text-green-500">
                    <span>{"Email is valid."}</span>
                </span>
            )}
        </div>
    );
};

export default memo(EmailInput);
