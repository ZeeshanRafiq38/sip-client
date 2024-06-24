import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "api/axios";
import { toast } from "react-toastify";

const withdrawBankUrl = "/api/withdraw-bank";
const withdrawUrl = "/api/withdraw";
export const createWithdrawBank = createAsyncThunk(
    "withdrawBank/createwithdrawbank",
    async ({ addBankDetails, navigate }, { getState }) => {
        const { token } = getState().user?.user;
        try {
            let response = await axios.post(
                `${withdrawBankUrl}`,
                addBankDetails,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log(response);
            const {
                data: {
                    data: { message },
                },
            } = response;
            navigate("/withdraw");
            toast.success(message);
            return response;
        } catch (error) {
            const {
                response: {
                    data: { message },
                },
            } = error;
            toast.error(message);
        }
    }
);
export const UpdateWithdrawBank = createAsyncThunk(
    "withdrawBank/updatewithdrawbank",
    async ({ updateBank, navigate }, { getState }) => {
        const { token } = getState().user?.user;
        try {
            let response = await axios.post(`${withdrawBankUrl}`, updateBank, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response);
            const {
                data: {
                    data: { message },
                },
            } = response;
            navigate("/withdraw-details");
            toast.success(message);
            return response;
        } catch (error) {
            const {
                response: {
                    data: { message },
                },
            } = error;
            toast.error(message);
        }
    }
);
export const createWithdraw = createAsyncThunk(
    "withdrawBank/createwithdraw",
    async ({ withdrawAmount, navigate }, { getState }) => {
        console.log(withdrawAmount);
        const { token } = getState().user?.user;
        try {
            let response = await axios.post(`${withdrawUrl}`, withdrawAmount, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response);
            const {
                data: {
                    data: { message },
                },
            } = response;
            toast.success(message);
            return response;
        } catch (error) {
            const {
                response: {
                    data: { message },
                },
            } = error;
            toast.error(message);
        }
    }
);
const withdrawBankSlice = createSlice({
    name: "withdrawBank",
    initialState: {
        doc: "",
        settingDoc: "",
    },
    reducers: {
        setDoc(state, action) {
            state.doc = action.payload;
        },
        setSettingDoc(state, action) {
            state.settingDoc = action.payload;
        },
    },
});
export const { setDoc, setSettingDoc } = withdrawBankSlice.actions;
export default withdrawBankSlice.reducer;
