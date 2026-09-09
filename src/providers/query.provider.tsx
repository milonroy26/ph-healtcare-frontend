"use client";

//* single tone pattern, makesure kortechi mount unmount new query client create na hoi ekta client parse kre. 

import {
    environmentManager,
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";
import type { ReactNode } from "react";

//* make query client
function makeQueryClient() {
    return new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 60 * 1000,
            },
        },
    });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
    //? if server environment run return query client
    if (environmentManager.isServer()) {
        return makeQueryClient();
    }
    else {
        //? if exists browser query client
        if (!browserQueryClient) {
            browserQueryClient = makeQueryClient();
        }

        return browserQueryClient;
    }
}

export default function QueryProvider({ children }: { children: ReactNode }) {

    const queryClient = getQueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );

}