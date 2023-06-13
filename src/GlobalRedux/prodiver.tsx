'use client';
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

interface Props {
    children?: ReactNode
    // any props that come into the component
}

export function Providers({ children, ...props }: Props) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}