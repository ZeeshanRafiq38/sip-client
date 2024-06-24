import { createSlice } from "@reduxjs/toolkit";

const withdrawSlice = createSlice({
    name: "withdraw",
    initialState: {
        docs: [],
        page: 0,
        pages: 0,
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
    },
});
export const { setDocs, setPage, setPages } = withdrawSlice.actions;
export default withdrawSlice.reducer;
