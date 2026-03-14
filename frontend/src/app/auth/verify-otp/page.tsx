"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { authApi } from "@/lib/api";
import Link from "next/link";

function VerifyOTPContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const email = searchParams.get("email") || "";

    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        // Initial focus
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);

    const handleChange = (index: number, value: string) => {
        if (value.length > 1) {
            value = value.slice(-1);
        }

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move to next input if value is entered
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const otpString = otp.join("");
        if (otpString.length < 6) {
            setError("Please enter the full 6-digit code.");
            return;
        }

        setLoading(true);
        setError("");

        try {
            await authApi.verifyOtp(email, otpString);
            // Success! Maybe redirect to a dashboard or home
            alert("Verification successful!");
            router.push("/");
        } catch (err: any) {
            setError(err.message || "Invalid OTP. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="surface-container-lowest glass-card rounded-[2rem] p-10 md:p-12 shadow-[0px_12px_40px_rgba(25,28,30,0.06)] relative z-10">
            <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-fixed mb-6">
                    <span className="material-symbols-outlined text-on-primary-fixed text-3xl">
                        verified_user
                    </span>
                </div>
                <h1 className="text-headline-md font-headline text-on-surface mb-3 text-2xl font-bold">
                    Enter Verification Code
                </h1>
                <p className="text-body-md text-on-surface-variant">
                    We&apos;ve sent a 6-digit security code to <span className="font-semibold text-primary">{email}</span>.
                </p>
            </div>

            <form className="space-y-8" onSubmit={handleSubmit}>
                {/* OTP Input Grid */}
                <div className="flex justify-between gap-3 md:gap-4">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            ref={(el) => {
                                inputRefs.current[index] = el;
                            }}
                            className="otp-input w-full aspect-square text-center text-2xl font-bold bg-surface-container-highest border-none rounded-xl focus:bg-surface-container-lowest transition-all"
                            maxLength={1}
                            type="text"
                            value={digit}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                        />
                    ))}
                </div>

                {error && (
                    <p className="text-error text-sm text-center font-medium">{error}</p>
                )}

                {/* Countdown and Resend */}
                <div className="flex flex-col items-center gap-3">
                    <div className="flex items-center gap-2 text-label-sm text-on-surface-variant">
                        <span className="material-symbols-outlined text-sm">schedule</span>
                        <span>Resend code in 00:30</span>
                    </div>
                    <button
                        className="text-title-sm font-semibold text-primary opacity-50 cursor-not-allowed hover:underline"
                        type="button"
                        disabled
                    >
                        Resend Code
                    </button>
                </div>

                {/* Primary Action */}
                <button
                    disabled={loading}
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-br from-primary to-primary-container text-on-primary font-semibold text-body-md shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                    type="submit"
                >
                    {loading ? (
                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                    ) : (
                        "Verify Code"
                    )}
                </button>
            </form>

            <div className="mt-8 text-center">
                <Link
                    className="inline-flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-colors text-body-md"
                    href="/auth/send-otp"
                >
                    <span className="material-symbols-outlined text-sm">arrow_back</span>
                    Back to login
                </Link>
            </div>
        </div>
    );
}

export default function VerifyOTP() {
    return (
        <div className="bg-surface text-on-surface font-body min-h-screen flex flex-col">
            {/* Top Navigation */}
            <nav className="sticky top-0 z-50 glass-card">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-container rounded-lg flex items-center justify-center">
                            <span className="material-symbols-outlined text-on-primary text-xl">link</span>
                        </div>
                        <Link href="/" className="text-xl font-headline font-bold text-on-surface">LinkTrack</Link>
                    </div>
                    <div className="hidden md:flex items-center gap-8">
                        <Link className="text-title-sm font-medium text-on-surface-variant hover:text-primary transition-colors" href="#">Features</Link>
                        <Link className="text-title-sm font-medium text-on-surface-variant hover:text-primary transition-colors" href="#">How It Works</Link>
                        <Link className="text-title-sm font-medium text-on-surface-variant hover:text-primary transition-colors" href="#">Pricing</Link>
                    </div>
                    <button className="px-6 py-2.5 rounded-xl bg-surface-container-high text-on-surface font-medium hover:bg-surface-container-highest transition-colors">
                        Enter Code
                    </button>
                </div>
            </nav>

            {/* Main Content Area */}
            <main className="flex-grow flex items-center justify-center px-6 py-20 relative overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary opacity-5 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-tertiary opacity-5 blur-[100px] rounded-full"></div>
                <div className="w-full max-w-md">
                    <Suspense fallback={<div className="text-center text-on-surface-variant">Loading...</div>}>
                        <VerifyOTPContent />
                    </Suspense>
                </div>
            </main>

            <footer className="bg-surface py-12 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-body-md text-on-surface-variant">© 2024 LinkTrack Inc. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link className="text-body-md text-on-surface-variant hover:text-on-surface" href="#">Privacy Policy</Link>
                        <Link className="text-body-md text-on-surface-variant hover:text-on-surface" href="#">Terms of Service</Link>
                        <Link className="text-body-md text-on-surface-variant hover:text-on-surface" href="#">Contact Support</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
