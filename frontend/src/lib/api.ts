const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export async function apiFetch(endpoint: string, options: RequestInit = {}) {
    const url = `${BASE_URL}${endpoint}`;
    const response = await fetch(url, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
        },
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
        throw new Error(data?.message || "Something went wrong");
    }

    return data;
}

export const authApi = {
    sendOtp: (name: string, email: string) =>
        apiFetch("/auth/send-otp", {
            method: "POST",
            body: JSON.stringify({ name, email }),
        }),
    verifyOtp: (email: string, otp: string) =>
        apiFetch("/auth/verify-otp", {
            method: "POST",
            body: JSON.stringify({ email, otp }),
        }),
};
