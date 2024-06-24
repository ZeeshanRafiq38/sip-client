import Username from "assets/svgs/Username";
import React, { memo } from "react";

const UsernameInput = ({ data, setData, setIsValid, isValid }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
        setIsValid((prev) => ({
            ...prev,
            isUsernameValid: validateInput(value),
        }));
    };

    const validateInput = (value) => {
        const username = value || data.username;
        const usernameRegex = /^[A-Za-z0-9_-]{3,30}$/;
        return usernameRegex.test(username);
    };
    return (
        <div>
            <div
                className={`${
                    data?.username?.length > 0
                        ? isValid.isUsernameValid
                            ? "border-green-500 border"
                            : !isValid.isUsernameValid
                            ? "border-red-500 border"
                            : ""
                        : ""
                } flex items-center gap-2 bg-slate-200 p-2 rounded-md`}
            >
                <Username />
                <input
                    type="text"
                    className=" bg-slate-200 outline-none w-full"
                    placeholder="Username"
                    required
                    value={data.username}
                    name={"username"}
                    onChange={handleChange}
                />
            </div>
            {data?.username.length > 0 && !isValid.isUsernameValid && (
                <span className="text-xs text-red-500">
                    <span>{"Please enter valid Username"}</span>
                </span>
            )}
            {data?.username.length > 0 && isValid.isUsernameValid && (
                <span className="text-xs text-green-500">
                    <span>{"Username is valid."}</span>
                </span>
            )}
        </div>
    );
};

export default memo(UsernameInput);
