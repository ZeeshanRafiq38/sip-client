import { createSlice } from "@reduxjs/toolkit";

const teamSlice = createSlice({
    name: "team",
    initialState: {
        docs: null,
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
export const { setDocs, setPage, setPages } = teamSlice.actions;
export default teamSlice.reducer;
