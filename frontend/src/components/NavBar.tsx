import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="glass-nav sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-8">
                <Link href="/" className="text-xl font-bold tracking-tight text-primary">
                    LinkTrack
                </Link>
                <div className="hidden md:flex items-center gap-6">
                    <Link
                        className="text-sm font-medium text-on-surface-variant hover:text-primary"
                        href="#"
                    >
                        Features
                    </Link>
                    <Link
                        className="text-sm font-medium text-on-surface-variant hover:text-primary"
                        href="#"
                    >
                        How It Works
                    </Link>
                    <Link
                        className="text-sm font-medium text-on-surface-variant hover:text-primary"
                        href="#"
                    >
                        Pricing
                    </Link>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <button className="px-5 py-2 text-sm font-semibold rounded-xl bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors">
                    Enter Code
                </button>
                <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden">
                    <img
                        alt="User Avatar"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUm3N0PE8iWatLG-uGyFsCR80Gg8h7y7wwU-WbEBgbH3Ohb1rXTqIC-MfE7wrkdnKYXhuvenGx_mrn8n-KyuyIbHrLyfyB61sexg9iL_eF02UMoc6iNDaLI7G3Al5L-f7cVLzZlKH2_aNVMv8Gucj5iQeVPY2y26AYalnO9RoOOQ7nno7TgJPATpMEYv0Y7fEMPnS2NypcZ5VNDIXS-OpDxmZKTpQWWMw5GD-UyUAWIPb_FcqIBOY05M8GH58hQ8vHU3DFNEBT5ec"
                    />
                </div>
            </div>
        </nav>
    );
}
