'use client';

import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
    isOpen: boolean
}

const initialState: CounterState = {
    isOpen: true
}

export const sidebarToggleSlice = createSlice({
    name: 'sidebartoggle',
    initialState,
    reducers: {
        toggleSidebar: (state) => {state.isOpen =  false},
        reverseToggleSidebar: (state) => {state.isOpen =  true},
        
    }
})

export const { toggleSidebar, reverseToggleSidebar } = sidebarToggleSlice.actions;

export default sidebarToggleSlice.reducer;