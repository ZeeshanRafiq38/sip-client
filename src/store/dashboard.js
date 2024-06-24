import { createSlice } from "@reduxjs/toolkit";
import axios from "api/axios";

const userUrl = "/api/user/profile";
export const getUser = async (token) => {
    const response = await axios.get(userUrl, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    console.log(response);
    return response;
};
const dashboardSlice = createSlice({
    name: "dashboard",
    initialState: {
        user: null,
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        },
    },
});
export const { setUser } = dashboardSlice.actions;
export default dashboardSlice.reducer;
