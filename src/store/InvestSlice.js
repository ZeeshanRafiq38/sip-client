import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "api/axios";
import { toast } from "react-toastify";

const singlePackageUrl = "/api/package";
const investAmountUrl = "/api/invest";
const myInvestsUrl = "/api/invest/my";
export const fetchSinglePackage = async (id) => {
    try {
        let response = await axios.get(`${singlePackageUrl}/${id}`);
        // console.log(response);
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
export const updateInvestAmount = createAsyncThunk(
    "invest/investAmount",
    async ({ amount, navigate }, { getState }) => {
        const { token } = getState().user?.user;
        try {
            let response = await axios.post(`${investAmountUrl}`, amount, {
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
    }
);
export const getMyInvests = async (token, page, pages, from , to) => {
    try {
        let response = await axios.get(
            `${myInvestsUrl}?page=${page}&pages=${pages}&from=${from}&to=${to}`,
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

const investSlice = createSlice({
    name: "invest",
    initialState: {
        docs: [],
        page: 0,
        pages: 0,
        from: "",
        to: "",
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
        setFrom(state, action) {
            state.from = action.payload;
        },
        setTo(state, action) {
            state.to = action.payload;
        },
    },
});
export const { setDocs, setPage, setPages , setFrom , setTo} = investSlice.actions;
export default investSlice.reducer;
