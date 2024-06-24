import axios from "api/axios";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const depositUrl = "/api/deposit";
const allDeposits = "/api/deposit/my";

export const sendDepositDetails = createAsyncThunk(
    "deposit/depositDetails",
    async (depositData, { getState }) => {
        const { token } = getState().user.user;
        const body = { ...depositData };
        try {
            const response = await axios.post(depositUrl, body, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const {
                data: {
                    data: { message },
                },
            } = response;

            toast.success(message);
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

export const fetchDeposits = async (token, query) => {
    try {
        let response = await axios.get(allDeposits + query, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(response);
        return response;
    } catch (error) {
        const {
            response: {
                data: { message },
            },
        } = error;
        toast.error(message);
    }
};
const depositSlice = createSlice({
    name: "deposit",
    initialState: {
        docs: [],
        docsCount: 0,
        page: 0,
        pages: 0,
        status: "",
    },
    reducers: {
        setDocs(state, action) {
            state.docs = action.payload;
        },
        setPage(state, action) {
            state.page = action.payload;
        },
        setPages(state, action) {
            state.pages = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
    },
});
export const { setDocs, setPage, setPages, setStatus } = depositSlice.actions;
export default depositSlice.reducer;
