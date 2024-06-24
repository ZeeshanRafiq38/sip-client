import { createSlice } from "@reduxjs/toolkit";
import axios from "api/axios";
import { toast } from "react-toastify";

const packageUrl = "/api/package";
export const fetchPackages = async () => {
    try {
        let response = await axios.get(packageUrl);
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
const packageSlice = createSlice({
    name: "package",
    initialState: {
        docs: [],
    },
    reducers: {
        setDocs(state, action) {
            state.docs = action.payload;
        },
    },
});

export const { setDocs } = packageSlice.actions;
export default packageSlice.reducer;
