import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-surface selection:bg-primary/10">
      <NavBar />
      <main>
        {/* Hero Section */}
        <section className="relative px-6 pt-20 pb-32 max-w-7xl mx-auto overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-8">
              <h1 className="text-6xl md:text-7xl font-bold leading-[1.1] tracking-tight text-on-surface">
                Real-Time Location Sharing. <span className="text-primary">Simplified.</span>
              </h1>
              <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed">
                Securely share your live location with a single code. Fast. Private. Temporary.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/auth/send-otp"
                  className="hero-gradient px-8 py-4 text-on-primary font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  Start Sharing
                </Link>
                <button className="px-8 py-4 bg-surface-container-high text-on-surface font-bold rounded-xl hover:bg-surface-container-highest transition-all">
                  Enter Code
                </button>
              </div>
            </div>
            {/* Mockup Glass Card */}
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-3xl"></div>
              <div className="relative bg-surface-container-lowest rounded-[2rem] p-4 shadow-2xl shadow-on-surface/5 border border-white/40">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-surface-container relative">
                  {/* Map Representation */}
                  <img
                    className="w-full h-full object-cover opacity-80"
                    alt="Minimalist light colored digital map interface with a route line"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3tIipQjJo-Y9_H4BQRhTUOc2CdKcaa8v1X6dxyaZZOgMW3gwKVupAHiJgAbUTPY0sSeDleUWj2yvm9f0bVx5cqP7GiKBiKlFnxP5CxfHLOZmhQLuRksv3RalZNWHMXsQKw0V8KjpmhDnfVi7q_rBQO2_Xema-Nq5I2KUBRUSaxAC6M3Go5yQm_5hngHEuQZQ74sfhMAKI4oIl-k8kP-Jatvn1xIg9ClbQiHBRnPhQoyC_POtzEM2tQEs07ZStLVlt0CR4oXaCyjU"
                  />
                  {/* UI Overlay */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <div className="bg-surface-container-lowest/90 backdrop-blur-md p-3 rounded-2xl shadow-sm flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                      <span className="text-xs font-bold tracking-widest text-on-surface-variant uppercase">
                        Live Tracking
                      </span>
                    </div>
                    <div className="bg-surface-container-lowest/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-sm">
                      <span className="text-sm font-bold text-primary">ETA: 12 min</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md p-4 rounded-2xl shadow-lg flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center">
                      <span
                        className="material-symbols-outlined text-primary"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        directions_car
                      </span>
                    </div>
                    <div>
                      <p className="text-xs text-on-surface-variant font-medium">Session Code</p>
                      <p className="text-lg font-bold tracking-widest">LX-9921</p>
                    </div>
                    <div className="ml-auto flex -space-x-2">
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-surface-container-highest overflow-hidden">
                        <img
                          className="w-full h-full object-cover"
                          alt="Portrait of a female user profile icon"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf5LH_GLIkAMALKdDbH8bUpA0BgKCXKBpYUQj3jCom7PiJaDJsp7cVTE7xfetfPUGaz-Joh-hvVbs5__I4UZq6s_UF7QDx9o4V1Ptgs2cDERhmHo14-a9tZRnzp6Q1cONBmKrhnP-S49ezbOQuxdpO5hGqAcMqcJEJLpDPWblQNsWDBnZx9CCpL9fTRmrUkAxZJHaQZ4_Z0ayf89FUu-4kfvchKUXZoAijupGtdCi55h-_CDmsRGqGFgHUFYa1BR8EWplB0Vhrkqk"
                        />
                      </div>
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-primary flex items-center justify-center text-[10px] text-white font-bold">
                        +1
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Bento Grid */}
        <section className="px-6 py-32 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight">Powerful simplicity.</h2>
              <p className="text-on-surface-variant mt-2">Engineered for speed, built for privacy.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="md:col-span-2 bg-surface-container-lowest rounded-[2rem] p-10 metric-glow relative overflow-hidden group">
                <div className="flex flex-col h-full justify-between gap-12">
                  <div className="w-14 h-14 rounded-2xl bg-primary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-3xl">bolt</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Instant Code Connection</h3>
                    <p className="text-on-surface-variant max-w-md leading-relaxed">
                      No sign-ups or phone numbers. Just a 6-digit code to connect instantly. Secure peer-to-peer
                      location sharing that stays active only as long as you need it.
                    </p>
                  </div>
                </div>
              </div>
              {/* Feature 2 */}
              <div className="bg-surface-container-lowest rounded-[2rem] p-10 flex flex-col justify-between group">
                <div className="w-14 h-14 rounded-2xl bg-secondary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary text-3xl">route</span>
                </div>
                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-3">Live Route & ETA</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    Real-time updates with turn-by-turn logic. See exactly where they are and when they&apos;ll arrive.
                  </p>
                </div>
              </div>
              {/* Feature 3 */}
              <div className="bg-surface-container-lowest rounded-[2rem] p-10 flex flex-col justify-between md:mt-0 group">
                <div className="w-14 h-14 rounded-2xl bg-tertiary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary text-3xl">lock</span>
                </div>
                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-3">Secure & Temporary</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    Sessions automatically expire. Your data is never stored on our servers once the link closes.
                  </p>
                </div>
              </div>
              {/* Metric Glass */}
              <div className="md:col-span-2 bg-surface-container-lowest rounded-[2rem] p-10 flex flex-col md:flex-row items-center gap-12 overflow-hidden border border-white/50 shadow-sm">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">Unmatched Precision</h3>
                  <p className="text-on-surface-variant leading-relaxed mb-6">
                    Using advanced telemetry, LinkTrack provides sub-meter accuracy even in dense urban environments.
                  </p>
                  <div className="flex gap-4">
                    <div className="px-4 py-2 rounded-full bg-surface-container-high text-xs font-bold tracking-wider text-on-surface-variant uppercase">
                      End-to-End Encrypted
                    </div>
                    <div className="px-4 py-2 rounded-full bg-surface-container-high text-xs font-bold tracking-wider text-on-surface-variant uppercase">
                      Auto-Expire
                    </div>
                  </div>
                </div>
                <div className="flex-none text-center md:text-right">
                  <span className="text-7xl font-bold text-primary tracking-tighter">0.5m</span>
                  <p className="text-sm font-semibold text-primary mt-2 uppercase tracking-widest">
                    Accuracy Radius
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="px-6 py-32 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center mb-24">
              <h2 className="text-4xl font-bold tracking-tight">How It Works</h2>
              <div className="w-20 h-1 bg-primary rounded-full mt-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
              {/* Steps */}
              <div className="flex flex-col items-center text-center gap-6">
                <div className="w-16 h-16 rounded-full bg-surface-container-lowest shadow-xl flex items-center justify-center text-2xl font-bold text-primary relative z-10 border border-white">
                  1
                </div>
                <h4 className="text-xl font-bold">Generate a code</h4>
                <p className="text-on-surface-variant">Click start and get a unique 6-digit session code instantly.</p>
              </div>
              <div className="flex flex-col items-center text-center gap-6">
                <div className="w-16 h-16 rounded-full bg-surface-container-lowest shadow-xl flex items-center justify-center text-2xl font-bold text-primary relative z-10 border border-white">
                  2
                </div>
                <h4 className="text-xl font-bold">Share it instantly</h4>
                <p className="text-on-surface-variant">Send the code or a quick link to whoever needs to follow you.</p>
              </div>
              <div className="flex flex-col items-center text-center gap-6">
                <div className="w-16 h-16 rounded-full bg-surface-container-lowest shadow-xl flex items-center justify-center text-2xl font-bold text-primary relative z-10 border border-white">
                  3
                </div>
                <h4 className="text-xl font-bold">Track live distance</h4>
                <p className="text-on-surface-variant">Watch progress in real-time. Link ends when you reach your goal.</p>
              </div>
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-8 left-1/4 right-1/4 h-px bg-outline-variant/30 -z-0"></div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-24">
          <div className="max-w-5xl mx-auto hero-gradient rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-on-primary mb-8">Ready to share your way?</h2>
              <p className="text-on-primary/80 text-lg mb-12 max-w-xl mx-auto">
                Join thousands who use LinkTrack for safer commutes and easier meetups.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/auth/send-otp"
                  className="px-10 py-5 bg-on-primary text-primary font-bold rounded-2xl hover:bg-surface-bright transition-all shadow-xl"
                >
                  Get Started Now
                </Link>
                <button className="px-10 py-5 bg-white/10 backdrop-blur-md text-on-primary border border-white/20 font-bold rounded-2xl hover:bg-white/20 transition-all">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
