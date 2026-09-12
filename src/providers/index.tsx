"use client";

import type { ReactNode } from "react";
import GoogleAuthProvider from "./google-auth.provider";
import QueryProvider from "./query.provider";

export default function Providers({
    children,
    googleClientId,
}: {
    children: ReactNode;
    googleClientId?: string;
}) {
    return (
        <GoogleAuthProvider clientId={googleClientId}>
            <QueryProvider>
                {children}
            </QueryProvider>
        </GoogleAuthProvider>
    )
}

