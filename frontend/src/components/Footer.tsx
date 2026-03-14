export default function Footer() {
    return (
        <footer className="bg-surface-container-low px-6 py-16 border-t border-outline-variant/10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="flex flex-col items-center md:items-start gap-4">
                    <span className="text-2xl font-bold tracking-tight text-on-surface">LinkTrack</span>
                    <p className="text-sm text-on-surface-variant">© 2024 LinkTrack Inc. All rights reserved.</p>
                </div>
                <div className="flex gap-8">
                    <a className="text-sm font-medium text-on-surface-variant hover:text-primary" href="#">Privacy Policy</a>
                    <a className="text-sm font-medium text-on-surface-variant hover:text-primary" href="#">Terms of Service</a>
                    <a className="text-sm font-medium text-on-surface-variant hover:text-primary" href="#">Contact Support</a>
                </div>
                <div className="flex gap-4">
                    <a className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-primary" href="#">
                        <span className="material-symbols-outlined text-sm">public</span>
                    </a>
                    <a className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-primary" href="#">
                        <span className="material-symbols-outlined text-sm">alternate_email</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}
