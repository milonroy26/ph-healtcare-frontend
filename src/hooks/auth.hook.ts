import { getMe, gooleOAuthLogin, userLogin, userLogout, userRegistration } from "@/api/auth.api";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useLogin() {
    return useMutation({
        mutationFn: userLogin,
    })
}

export function useRegistration() {
    return useMutation({
        mutationFn: userRegistration,
    });
}

export function useLogout() {
    return useMutation({
        mutationFn: userLogout,
    })
}

export function useGoogleOAuthLogin() {
    return useMutation({
        mutationFn: gooleOAuthLogin,
    })
}

export function useGetMe() {
    return useQuery({
        queryKey: ["user"],
        queryFn: getMe,
        retry: false
    });
}