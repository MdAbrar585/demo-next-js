'use client';

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './Features/counter/counterSlice'
import sidebarToggleReducer  from "./Features/sidebar/sidebarToggleSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        sidebarToggle: sidebarToggleReducer,

    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;