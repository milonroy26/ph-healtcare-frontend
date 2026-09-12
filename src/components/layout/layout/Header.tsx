"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";
import { useGetMe, useLogout } from "@/hooks";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";

export default function Header() {

    const { data, isLoading } = useGetMe();
    const { mutate: logout } = useLogout();

    const queryClient = useQueryClient();

    const routes = [
        { name: "Home", url: "/" },
        { name: "About us", url: "/about-us" },
    ];

    const handleLogout = () => {
        logout(undefined, {
            onSuccess: () => {
                toast.add({
                    title: "Logout Successful",
                    description: "You have been logged out successfully",
                    type: "Success",
                });
                //? remove user from cache
                queryClient.removeQueries({ queryKey: ["user"] });
            },
            onError: () => {
                toast.add({
                    title: "Logout Failed",
                    description: "Logout failed. Please try again",
                    type: "Error",
                });
            }
        });
    };

    return (
        <header className="w-full h-16 border border-b">
            <div className="flex justify-between items-center h-full max-w-7xl mx-auto">
                <div>PH Healthcare</div>
                <nav className="flex gap-5">
                    {routes.map((route) => (
                        <Link key={route.url} href={route.url}>
                            {route.name}
                        </Link>
                    ))}
                </nav>
                <div>
                    {
                        !isLoading && !data && (
                            <Button
                                variant="outline"
                                render={<Link href="/login">Login</Link>}
                                nativeButton={false}>
                                login
                            </Button>
                        )
                    }
                    {
                        !isLoading && data && (
                            <Button onClick={handleLogout} variant="destructive">logout</Button>
                        )
                    }
                </div>
            </div>
        </header>
    );
}
