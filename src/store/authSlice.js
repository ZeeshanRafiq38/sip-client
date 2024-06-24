import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "api/axios";
import { toast } from "react-toastify";

const registerUrl = "/api/user/register";
const loginUrl = "/api/user/login";
const logoutUrl = "/api/user/logout";
export const registerUser = createAsyncThunk(
    "user/registerUser",
    async ({ formData, navigate }) => {
        const body = { ...formData };
        if (!body.referrer) {
            delete body.referrer;
        }
        if (body.confirmPassword) {
            delete body.confirmPassword;
        }
        try {
            const response = await axios.post(registerUrl, body);
            const {
                data: {
                    data: { doc, message },
                },
            } = response;
            if (response.data.data.doc.token) {
                localStorage.setItem(
                    "userLogin",
                    JSON.stringify(response.data.data.doc)
                );
            }
            // console.log(response);
            toast.success(message);
            navigate("/dashboard");
            return response.data;
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    }
);
export const LoginUser = createAsyncThunk(
    "user/loginUser",
    async ({ formData, navigate }, { dispatch }) => {
        const body = { ...formData };
        try {
            const response = await axios.post(loginUrl, body);
            const {
                data: {
                    data: { doc, message },
                },
            } = response;
            if (doc.isActive) {
                if (response.data.data.doc.token) {
                    localStorage.setItem(
                        "userLogin",
                        JSON.stringify(response.data.data.doc)
                    );
                }
                dispatch(setUser(doc));
                toast.success(message);
                navigate("/dashboard");
            } else {
                return dispatch(setShowBlockedPopup(true));
            }
            return response.data;
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    }
);
export const LogoutUser = createAsyncThunk(
    "user/logoutUser",
    async (navigate, { dispatch }) => {
        try {
            const response = await axios.get(logoutUrl);
            const {
                data: {
                    data: { doc, message },
                },
            } = response;

            dispatch(setUser(null));
            localStorage.removeItem("userLogin");
            navigate("/login");
            toast.success(message);
            return response.data;
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    }
);
const authSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        error: null,
        user: JSON.parse(localStorage.getItem("userLogin")) || null,
        showBlockedPopup: false,
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        },
        setShowBlockedPopup(state, action) {
            state.showBlockedPopup = action.payload;
        },
    },
});
export const { setShowBlockedPopup, setUser } = authSlice.actions;
export default authSlice.reducer;
