import Home from "pages/Home";
import "./App.css";
import "./utilities.css";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "pages/Authentication/Login";
import Register from "pages/Authentication/Register";
import ForgotPassword from "pages/Authentication/ForgotPassword";
import VerfiyOtp from "pages/Authentication/VerfiyOtp";
import ResetPassword from "pages/Authentication/ResetPassword";
import Dashboard from "pages/UserDashboard/Dashboard";
import AllPackages from "pages/UserDashboard/AllPackages";
import Invests from "pages/UserDashboard/Invests";
import Portfolio from "pages/UserDashboard/Portfolio";
import Deposits from "pages/UserDashboard/Deposits";
import Team from "pages/UserDashboard/Team";
import WalletHistory from "pages/UserDashboard/WalletHistory";
import WithdrawDetails from "pages/UserDashboard/WithdrawDetails";
import WithdrawHistory from "pages/UserDashboard/WithdrawHistory";
import Notifications from "pages/UserDashboard/Notifications";
import InviteFriend from "pages/UserDashboard/InviteFriend";
import HowToDeposit from "pages/UserDashboard/HowToDeposit";
import HowToWithdraw from "pages/UserDashboard/HowToWithdraw";
import ContactUs from "pages/UserDashboard/ContactUs";
import SipProgram from "pages/UserDashboard/SipProgram";
import ProfileSetup from "pages/UserDashboard/ProfileSetup";
import SelectRange from "pages/UserDashboard/SelectRange";
import NewDeposit from "pages/UserDashboard/NewDeposit";
import AddWithdrawDetails from "pages/UserDashboard/AddWithdrawDetails";
import EditWithdrawDetails from "pages/UserDashboard/EditWithdrawDetails";
import Withdraw from "pages/UserDashboard/Withdraw";
import Details from "pages/UserDashboard/Details";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import BlockedPopup from "components/global/popup/BlockedPopup";
import InvestNow from "pages/UserDashboard/InvestNow";
import NoBankFound from "pages/UserDashboard/NoBankFound";

function App() {
    const { showBlockedPopup } = useSelector((state) => state?.user);
    return (
        <div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                        path="/forgot-password"
                        element={<ForgotPassword />}
                    />
                    <Route path="/verify-otp" element={<VerfiyOtp />} />
                    <Route path="/reset-password" element={<ResetPassword />} />

                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/all-packages" element={<AllPackages />} />
                    <Route path="/invest-now/:id" element={<InvestNow />} />
                    <Route path="/invests" element={<Invests />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/deposits" element={<Deposits />} />
                    <Route
                        path="/deposits/select-range"
                        element={<SelectRange />}
                    />
                    <Route
                        path="/deposits/new-deposit/:id"
                        element={<NewDeposit />}
                    />
                    <Route
                        path="/add-withdraw-details"
                        element={<AddWithdrawDetails />}
                    />
                    <Route path="/bank-not-found" element={<NoBankFound />} />
                    <Route
                        path="/edit-withdraw-details"
                        element={<EditWithdrawDetails />}
                    />
                    <Route path="/withdraw" element={<Withdraw />} />
                    <Route path="/deposits/details" element={<Details />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/wallet-history" element={<WalletHistory />} />
                    <Route
                        path="/withdraw-history"
                        element={<WithdrawHistory />}
                    />
                    <Route
                        path="/withdraw-details"
                        element={<WithdrawDetails />}
                    />

                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/invite-friend" element={<InviteFriend />} />
                    <Route path="/how-to-deposit" element={<HowToDeposit />} />
                    <Route
                        path="/how-to-withdraw"
                        element={<HowToWithdraw />}
                    />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/sip-program" element={<SipProgram />} />
                    <Route path="/profile-setup" element={<ProfileSetup />} />
                </Routes>
            </Router>
            {showBlockedPopup && <BlockedPopup />}
        </div>
    );
}

export default App;
