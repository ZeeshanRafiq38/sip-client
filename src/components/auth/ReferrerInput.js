import Username from "assets/svgs/Username";
import React from "react";

const ReferrerInput = ({ data, setData, setIsValid, isValid }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
        // setIsValid((prev) => ({
        //     ...prev,
        //     isUsernameValid: validateInput(value),
        // }));
    };
    return (
        <div className="flex items-center gap-2 bg-slate-200 p-2 rounded-md">
            <Username />
            <input
                type="text"
                className="bg-slate-200 outline-none w-full"
                placeholder="Referrer (optional)"
                autoComplete="off"
                value={data.referrer}
                name="referrer"
                onChange={handleChange}
            />
        </div>
    );
};

export default ReferrerInput;
