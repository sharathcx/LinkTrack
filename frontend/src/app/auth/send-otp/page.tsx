"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authApi } from "@/lib/api";
import Link from "next/link";

export default function SendOTP() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            await authApi.sendOtp(name, email);
            // Redirect to verify page with email in query params
            router.push(`/auth/verify-otp?email=${encodeURIComponent(email)}`);
        } catch (err: any) {
            setError(err.message || "Failed to send OTP. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="text-on-background flex flex-col min-h-screen">
            {/* Top Navigation */}
            <nav className="glass-nav fixed top-0 w-full z-50 flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 primary-gradient rounded-lg flex items-center justify-center text-white">
                        <span
                            className="material-symbols-outlined"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                            link
                        </span>
                    </div>
                    <Link href="/" className="font-headline font-bold text-xl tracking-tight text-on-background">
                        LinkTrack
                    </Link>
                </div>
                <div>
                    <button className="bg-surface-container-high text-on-surface font-medium px-5 py-2 rounded-xl text-sm transition-all hover:opacity-90">
                        Enter Code
                    </button>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-grow flex items-center justify-center px-4 pt-20 pb-12">
                <div className="w-full max-w-[440px] animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="bg-surface-container-lowest rounded-[2rem] p-10 ambient-shadow relative overflow-hidden">
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary opacity-[0.03] blur-3xl rounded-full"></div>

                        <div className="text-center mb-10">
                            <h1 className="text-on-background font-headline text-[2rem] font-bold tracking-tight mb-2">
                                Sign In
                            </h1>
                            <p className="text-on-surface-variant text-body-md">Access your analytics dashboard</p>
                        </div>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="space-y-2 mb-6">
                                <label
                                    className="text-label-sm font-semibold uppercase tracking-wider text-on-surface-variant ml-1"
                                    htmlFor="full-name"
                                >
                                    Full Name
                                </label>
                                <div className="relative group">
                                    <input
                                        required
                                        className="w-full bg-surface-container-low border-none rounded-xl px-5 py-4 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all duration-300"
                                        id="full-name"
                                        placeholder="Your full name"
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none opacity-0 group-focus-within:opacity-100 transition-opacity">
                                        <span className="material-symbols-outlined text-primary text-xl">person</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label
                                    className="text-label-sm font-semibold uppercase tracking-wider text-on-surface-variant ml-1"
                                    htmlFor="email"
                                >
                                    Email address
                                </label>
                                <div className="relative group">
                                    <input
                                        required
                                        className="w-full bg-surface-container-low border-none rounded-xl px-5 py-4 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all duration-300"
                                        id="email"
                                        placeholder="name@company.com"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none opacity-0 group-focus-within:opacity-100 transition-opacity">
                                        <span className="material-symbols-outlined text-primary text-xl">alternate_email</span>
                                    </div>
                                </div>
                                <p className="text-on-surface-variant text-xs mt-3 ml-1 flex items-start gap-2">
                                    <span className="material-symbols-outlined text-sm mt-0.5">info</span>
                                    We&apos;ll send a 6-digit verification code to your email.
                                </p>
                            </div>

                            {error && (
                                <p className="text-error text-sm text-center font-medium">{error}</p>
                            )}

                            <div className="pt-4">
                                <button
                                    disabled={loading}
                                    className="w-full primary-gradient text-white font-semibold py-4 rounded-xl ambient-shadow transition-transform hover:scale-[1.01] active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                                    type="submit"
                                >
                                    {loading ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                <path className="opacity-75" fill="currentColor" d="4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Send OTP</span>
                                            <span className="material-symbols-outlined text-white text-xl">arrow_forward</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="mt-8 text-center flex flex-col gap-4">
                        <p className="text-on-surface-variant text-sm">
                            Don&apos;t have an account?{" "}
                            <Link className="text-primary font-semibold hover:underline" href="#">
                                Create one for free
                            </Link>
                        </p>
                        <div className="flex items-center justify-center gap-6 opacity-60">
                            <Link className="text-xs font-medium text-on-surface-variant hover:text-primary transition-colors" href="#">
                                Privacy Policy
                            </Link>
                            <Link className="text-xs font-medium text-on-surface-variant hover:text-primary transition-colors" href="#">
                                Terms of Service
                            </Link>
                            <Link className="text-xs font-medium text-on-surface-variant hover:text-primary transition-colors" href="#">
                                Contact Support
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="py-8 px-6 text-center">
                <p className="text-on-surface-variant text-[11px] font-medium opacity-50 uppercase tracking-[0.1em]">
                    © 2024 LinkTrack Inc. All rights reserved.
                </p>
            </footer>
        </div>
    );
}
