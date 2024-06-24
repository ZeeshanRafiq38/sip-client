import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "api/axios";
import { toast } from "react-toastify";

const myInvestsUrl = "/api/invest/my";
const claimProfitUrl = "/api/invest/claim";
export const getInvest = async (token, status, page, pages) => {
    try {
        let response = await axios.get(
            `${myInvestsUrl}?status=${status}&page=${page}&pages=${pages}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
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
export const getClaimProfit = async (id, token, navigate) => {
    try {
        let response = await axios.get(`${claimProfitUrl}/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(response);
        navigate("/dashboard");
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
const portfolioSlice = createSlice({
    name: "portfolio",
    initialState: {
        docs: [],
        page: 0,
        pages: 0,
    },
    reducers: {
        setPage(state, action) {
            state.page = action.payload;
        },
        setPages(state, action) {
            state.pages = action.payload;
        },
        setDocs(state, action) {
            state.docs = action.payload;
        },
    },
});
export const { setDocs, setPage, setPages } = portfolioSlice.actions;
export default portfolioSlice.reducer;
