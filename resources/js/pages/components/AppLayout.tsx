import { Link } from '@inertiajs/react';
import type { ReactNode } from 'react';

const navItems = [
    { label: 'Dashboard', href: '/' },
    { label: 'Contacts', href: '/contacts' },
    { label: 'Pipeline', href: '/pipeline' },
    { label: 'Tasks', href: '/tasks' },
];

export default function AppLayout({ children, title }: { children: ReactNode; title: string }) {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <header className="border-b border-slate-200 bg-white">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">CRM</p>
                        <h1 className="text-xl font-semibold text-slate-900">{title}</h1>
                    </div>
                    <nav className="flex items-center gap-4 text-sm font-medium text-slate-600">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="rounded-full px-3 py-1.5 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex items-center gap-2">
                        <input
                            placeholder="Search"
                            className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        />
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white">
                            AR
                        </div>
                    </div>
                </div>
            </header>
            <main className="mx-auto max-w-6xl px-6 py-8">{children}</main>
        </div>
    );
}
