import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: { data: 500},
    reducers: {
        increment: (state, action) => {
            state.data += 1;
        },
        decrement: (state, action) => {
            console.log(action.payload.a, "action")
            state.data -= action.payload.a;
        }
    }
});

export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;