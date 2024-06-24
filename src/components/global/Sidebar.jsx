import Logo from "assets/svgs/Logo";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LogoutUser } from "store/authSlice";

const Sidebar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const isActive = (path, home) => {
        if (home) return location.pathname === "/";
        return location.pathname.split("/").includes(path);
    };
    const handleLogout = () => {
        dispatch(LogoutUser(navigate))
    };
    return (
        <div className="fixed w-[270px] overflow-auto h-full">
            <div className="flex justify-center py-6 border-slate-200 border-b-[1px]">
                <Logo />
            </div>
            <div>
                <ul className="py-6">
                    <Link to="/dashboard">
                        <li
                            className={`${
                                isActive("dashboard") ? "active" : ""
                            } sidemenu-item`}
                        >
                            <div
                                className={`${
                                    isActive("dashboard") ? "line" : ""
                                } py-3 pl-3 flex items-center gap-3`}
                            >
                                <i className="uil uil-home"></i>
                                <span>Home</span>
                            </div>
                        </li>
                    </Link>

                    <Link to="/all-packages">
                        <li
                            className={`${
                                isActive("all-packages") ? "active" : ""
                            } sidemenu-item`}
                        >
                            <div
                                className={`${
                                    isActive("all-packages") ? "line" : ""
                                } py-3 pl-3 flex items-center gap-3`}
                            >
                                <i className="uil uil-sitemap"></i>
                                <span>All Packages</span>
                            </div>
                        </li>
                    </Link>
                    <Link to="/invests">
                        <li
                            className={`${
                                isActive("invests") ? "active" : ""
                            } sidemenu-item`}
                        >
                            <div
                                className={`${
                                    isActive("invests") ? "line" : ""
                                } py-3 pl-3 flex items-center gap-3`}
                            >
                                <i className="uil uil-usd-circle"></i>
                                <span>Invests</span>
                            </div>
                        </li>
                    </Link>
                    <Link to="/portfolio">
                        <li
                            className={`${
                                isActive("portfolio") ? "active" : ""
                            } sidemenu-item`}
                        >
                            <div
                                className={`${
                                    isActive("portfolio") ? "line" : ""
                                } py-3 pl-3 flex items-center gap-3`}
                            >
                                <i className="uil uil-clock"></i>
                                <span>Portfolio</span>
                            </div>
                        </li>
                    </Link>
                    <Link to="/deposits">
                        <li
                            className={`${
                                isActive("deposits") ? "active" : ""
                            } sidemenu-item`}
                        >
                            <div
                                className={`${
                                    isActive("deposits") ? "line" : ""
                                } py-3 pl-3 flex items-center gap-3`}
                            >
                                <i className="uil uil-clipboard-notes"></i>
                                <span>Deposits</span>
                            </div>
                        </li>
                    </Link>
                    <Link to="/team">
                        <li
                            className={`${
                                isActive("team") ? "active" : ""
                            } sidemenu-item`}
                        >
                            <div
                                className={`${
                                    isActive("team") ? "line" : ""
                                } py-3 pl-3 flex items-center gap-3`}
                            >
                                <i className="uil uil-users-alt"></i>
                                <span>Team</span>
                            </div>
                        </li>
                    </Link>
                    <Link to="/wallet-history">
                        <li
                            className={`${
                                isActive("wallet-history") ? "active" : ""
                            } sidemenu-item`}
                        >
                            <div
                                className={`${
                                    isActive("wallet-history") ? "line" : ""
                                } py-3 pl-3 flex items-center gap-3`}
                            >
                                <i className="uil uil-history"></i>
                                <span>Wallet History</span>
                            </div>
                        </li>
                    </Link>
                    <Link to="/withdraw-history">
                        <li
                            className={`${
                                isActive("withdraw-history") ? "active" : ""
                            } sidemenu-item`}
                        >
                            <div
                                className={`${
                                    isActive("withdraw-history") ? "line" : ""
                                } py-3 pl-3 flex items-center gap-3`}
                            >
                                <i className="uil uil-money-withdraw"></i>
                                <span>Withdraw History</span>
                            </div>
                        </li>
                    </Link>
                    <Link to="/withdraw-details">
                        <li
                            className={`${
                                isActive("withdraw-details") ? "active" : ""
                            } sidemenu-item`}
                        >
                            <div
                                className={`${
                                    isActive("withdraw-details") ? "line" : ""
                                } py-3 pl-3 flex items-center gap-3`}
                            >
                                <i className="uil uil-bill"></i>
                                <span>Withdraw Details</span>
                            </div>
                        </li>
                    </Link>
                    <Link to="/notifications">
                        <li
                            className={`${
                                isActive("notifications") ? "active" : ""
                            } sidemenu-item`}
                        >
                            <div
                                className={`${
                                    isActive("notifications") ? "line" : ""
                                } py-3 pl-3 flex items-center gap-3`}
                            >
                                <i className="uil uil-bell"></i>
                                <span>Notifications</span>
                            </div>
                        </li>
                    </Link>
                    <Link to="/invite-friend">
                        <li
                            className={`${
                                isActive("invite-friend") ? "active" : ""
                            } sidemenu-item`}
                        >
                            <div
                                className={`${
                                    isActive("invite-friend") ? "line" : ""
                                } py-3 pl-3 flex items-center gap-3`}
                            >
                                <i className="uil uil-award"></i>
                                <span>Invite Friend</span>
                            </div>
                        </li>
                    </Link>
                    <Link to="/how-to-deposit">
                        <li
                            className={`${
                                isActive("how-to-deposit") ? "active" : ""
                            } sidemenu-item`}
                        >
                            <div
                                className={`${
                                    isActive("how-to-deposit") ? "line" : ""
                                } py-3 pl-3 flex items-center gap-3`}
                            >
                                <i className="uil uil-plus"></i>
                                <span>How To Deposit</span>
                            </div>
                        </li>
                    </Link>
                    <Link to="/how-to-withdraw">
                        <li
                            className={`${
                                isActive("how-to-withdraw") ? "active" : ""
                            } sidemenu-item`}
                        >
                            <div
                                className={`${
                                    isActive("how-to-withdraw") ? "line" : ""
                                } py-3 pl-3 flex items-center gap-3`}
                            >
                                <i className="uil uil-wallet"></i>
                                <span>How To Withdraw</span>
                            </div>
                        </li>
                    </Link>
                    <Link to="/contact-us">
                        <li
                            className={`${
                                isActive("contact-us") ? "active" : ""
                            } sidemenu-item`}
                        >
                            <div
                                className={`${
                                    isActive("contact-us") ? "line" : ""
                                } py-3 pl-3 flex items-center gap-3`}
                            >
                                <i className="uil uil-envelope-question"></i>
                                <span>Contact Us</span>
                            </div>
                        </li>
                    </Link>

                    <Link to="/sip-program">
                        <li
                            className={`${
                                isActive("sip-program") ? "active" : ""
                            } sidemenu-item`}
                        >
                            <div
                                className={`${
                                    isActive("sip-program") ? "line" : ""
                                } py-3 pl-3 flex items-center gap-3`}
                            >
                                <i className="uil uil-book-reader"></i>
                                <span>SIP Program</span>
                            </div>
                        </li>
                    </Link>
                    <Link to="/profile-setup">
                        <li
                            className={`${
                                isActive("profile-setup") ? "active" : ""
                            } sidemenu-item`}
                        >
                            <div
                                className={`${
                                    isActive("profile-setup") ? "line" : ""
                                } py-3 pl-3 flex items-center gap-3`}
                            >
                                <i className="uil uil-setting"></i>
                                <span>Profile Setup</span>
                            </div>
                        </li>
                    </Link>
                    <button onClick={handleLogout}>
                        <div className="pl-3">
                            <li className="sidemenu-item flex items-center gap-3 pl-3 ">
                                <i className="uil uil-signout"></i>
                                <span>Sign Out</span>
                            </li>
                        </div>
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
