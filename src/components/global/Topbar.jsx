import React, { useEffect, useState } from "react";
import BellSvg from "assets/svgs/Dashboard/BellSvg";
import SettingSvg from "assets/svgs/Dashboard/SettingSvg";
import LogoutSvg from "assets/svgs/Dashboard/LogoutSvg";
import { Link, useNavigate } from "react-router-dom";
import axios, { baseUrl } from "api/axios";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment/moment";
import { LogoutUser, setUser } from "store/authSlice";

const userProfileUrl = "/api/user/profile";
const Topbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(LogoutUser(navigate));
    };
    const { user } = useSelector((state) => state.user);
    return (
        <div className="flex border-slate-200 border-b-[1px]">
            <div className="w-full h-20 flex items-center gap-2 pl-6">
                <img
                    src={baseUrl + user?.image}
                    alt="profile"
                    className="w-10 h-10 rounded-full"
                />
                <div className="leading-tight">
                    <h6 className="text-primary">{user?.username}</h6>
                    <p className="text-gray">
                        Joined
                        {moment(user?.createdAt).format(" DD MMM YYYY")}
                    </p>
                </div>
            </div>
            <div className="w-full bg-primary h-20 topbar-second flex items-center justify-end gap-6 pr-6">
                <Link to="/notifications">
                    <BellSvg />
                </Link>
                <Link to="/profile-setup">
                    <SettingSvg />
                </Link>
                <button onClick={handleLogout}>
                    <LogoutSvg />
                </button>
            </div>
        </div>
    );
};

export default Topbar;
