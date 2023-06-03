'use client';

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './Features/counter/counterSlice'
import { sidebarToggleReducer } from "./redux/reducers/sidebarToggleReducer";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        toggleSidebar: sidebarToggleReducer,

    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;