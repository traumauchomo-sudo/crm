import { useState } from 'react';
import AppLayout from './components/AppLayout';

const contacts = [
    {
        name: 'Jamie Rivera',
        company: 'Acme Corp',
        role: 'Director',
        owner: 'Alex',
        tags: ['VIP'],
        status: 'Active',
    },
    {
        name: 'Priya Nair',
        company: 'Beta LLC',
        role: 'VP Sales',
        owner: 'Sam',
        tags: ['Lead'],
        status: 'Active',
    },
    {
        name: 'Chen Li',
        company: 'Delta Co',
        role: 'Manager',
        owner: 'Priya',
        tags: ['Demo'],
        status: 'Active',
    },
];

const tagOptions = ['VIP', 'Lead', 'Demo', 'Renewal'];

export default function Contacts() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <AppLayout title="Contacts">
            <section className="rounded-2xl bg-white p-5 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <h2 className="text-lg font-semibold text-slate-900">Contacts</h2>
                        <p className="text-sm text-slate-500">Manage contact profiles, tags, and ownership.</p>
                    </div>
                    <button
                        onClick={() => setIsDrawerOpen(true)}
                        className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                    >
                        + New Contact
                    </button>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                    <input
                        placeholder="Search contacts"
                        className="w-full max-w-xs rounded-full border border-slate-200 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                    <div className="flex flex-wrap gap-2">
                        {tagOptions.map((tag) => (
                            <button
                                key={tag}
                                className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-500 transition hover:border-indigo-300 hover:text-indigo-600"
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mt-5 overflow-x-auto">
                    <table className="min-w-full text-left text-sm">
                        <thead>
                            <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-400">
                                <th className="py-3 pr-4">Name</th>
                                <th className="py-3 pr-4">Company</th>
                                <th className="py-3 pr-4">Role</th>
                                <th className="py-3 pr-4">Owner</th>
                                <th className="py-3 pr-4">Tags</th>
                                <th className="py-3 pr-4">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((contact) => (
                                <tr key={contact.name} className="border-b border-slate-100">
                                    <td className="py-3 pr-4 font-semibold text-slate-900">{contact.name}</td>
                                    <td className="py-3 pr-4 text-slate-600">{contact.company}</td>
                                    <td className="py-3 pr-4 text-slate-600">{contact.role}</td>
                                    <td className="py-3 pr-4 text-slate-600">{contact.owner}</td>
                                    <td className="py-3 pr-4">
                                        <div className="flex flex-wrap gap-2">
                                            {contact.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-500"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="py-3 pr-4">
                                        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                                            {contact.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {isDrawerOpen && (
                <div className="fixed inset-0 z-50 flex">
                    <div
                        className="flex-1 bg-slate-900/50"
                        onClick={() => setIsDrawerOpen(false)}
                        aria-hidden
                    />
                    <div className="w-full max-w-md bg-white p-6 shadow-xl">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-slate-900">New Contact</h3>
                            <button
                                onClick={() => setIsDrawerOpen(false)}
                                className="rounded-full px-2 py-1 text-slate-400 hover:text-slate-600"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="mt-4 space-y-3 text-sm">
                            <div className="grid grid-cols-2 gap-3">
                                <input
                                    placeholder="First name"
                                    className="rounded-lg border border-slate-200 px-3 py-2"
                                />
                                <input
                                    placeholder="Company"
                                    className="rounded-lg border border-slate-200 px-3 py-2"
                                />
                                <input
                                    placeholder="Email"
                                    className="rounded-lg border border-slate-200 px-3 py-2"
                                />
                                <input
                                    placeholder="Phone"
                                    className="rounded-lg border border-slate-200 px-3 py-2"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <input
                                    placeholder="Owner"
                                    className="rounded-lg border border-slate-200 px-3 py-2"
                                />
                                <input
                                    placeholder="Tags"
                                    className="rounded-lg border border-slate-200 px-3 py-2"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                    Custom Field: Renewal Date
                                </label>
                                <input
                                    type="date"
                                    className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                    Notes
                                </label>
                                <textarea className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2" rows={4} />
                            </div>
                        </div>
                        <div className="mt-6 flex items-center justify-between">
                            <button
                                onClick={() => setIsDrawerOpen(false)}
                                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600"
                            >
                                Cancel
                            </button>
                            <button className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white">
                                Save Contact
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </AppLayout>
    );
}
