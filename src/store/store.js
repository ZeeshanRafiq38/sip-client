import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import depositSlice from "./depositSlice";
import packageSlice from "./packageSlice";
import InvestSlice from "./InvestSlice";
import portfolio from "./portfolio";
import withdrawBankSlice from "./withdrawBankSlice";
import withdrawSlice from "./withdrawSlice";
import walletSlice from "./walletSlice";
import sipProgramSlice from "./sipProgramSlice";
import notificationSlice from "./notificationSlice";
import teamSlice from "./teamSlice";

const store = configureStore({
    reducer: {
        user: authSlice,
        deposit: depositSlice,
        package: packageSlice,
        invest: InvestSlice,
        portfolio: portfolio,
        withdrawBank: withdrawBankSlice,
        withdraw: withdrawSlice,
        wallet: walletSlice,
        sipProgram: sipProgramSlice,
        notification: notificationSlice,
        team: teamSlice,
    },
});

export default store;
