import {configureStore} from "@reduxjs/toolkit";
import counter from './Counter'
import student from "./student";

export const store  = configureStore({
    reducer: {
        counter,
        student,
    },
});