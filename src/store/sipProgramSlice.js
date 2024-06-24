import { createSlice } from "@reduxjs/toolkit";

const sipProgramSlice = createSlice({
    name: "sipProgram",
    initialState: {
        docs: null,
    },
    reducers: {
        setDocs(state, action) {
            state.docs = action.payload;
        },
    },
});
export const { setDocs } = sipProgramSlice.actions;
export default sipProgramSlice.reducer;
