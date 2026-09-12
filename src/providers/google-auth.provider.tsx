import { GoogleOAuthProvider } from "@react-oauth/google";
import { ReactNode } from "react";

export default function GoogleAuthProvider({ children, clientId }: { children: ReactNode; clientId?: string }) {

    if (!clientId) {
        return <> {children} </>
    }

    return (
        <GoogleOAuthProvider clientId={clientId}>
            {children}
        </GoogleOAuthProvider>
    )
}
