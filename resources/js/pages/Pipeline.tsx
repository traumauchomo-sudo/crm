import { useState } from 'react';
import AppLayout from './components/AppLayout';

const stages = [
    { name: 'New', deals: ['Acme Corp', 'Foxtrot Ltd'] },
    { name: 'Qualified', deals: ['Beta LLC', 'Gamma Partners'] },
    { name: 'Proposal', deals: ['Delta Co'] },
    { name: 'Negotiation', deals: ['Echo Inc'] },
];

export default function Pipeline() {
    const [showRequired, setShowRequired] = useState(false);

    return (
        <AppLayout title="Lead Pipeline">
            <section className="rounded-2xl bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-semibold text-slate-900">Pipeline</h2>
                        <p className="text-sm text-slate-500">Drag deals between stages and track forecasts.</p>
                    </div>
                    <button
                        onClick={() => setShowRequired(true)}
                        className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600"
                    >
                        Move to Proposal
                    </button>
                </div>
                <div className="mt-5 grid gap-4 lg:grid-cols-4">
                    {stages.map((stage) => (
                        <div key={stage.name} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                            <h3 className="text-sm font-semibold text-slate-700">{stage.name}</h3>
                            <div className="mt-3 space-y-2">
                                {stage.deals.map((deal) => (
                                    <div key={deal} className="rounded-lg bg-white p-3 text-sm text-slate-700 shadow-sm">
                                        {deal}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {showRequired && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 px-4">
                    <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-slate-900">Update Deal: Acme Corp</h3>
                            <button onClick={() => setShowRequired(false)} className="text-slate-400 hover:text-slate-600">
                                ✕
                            </button>
                        </div>
                        <p className="mt-2 text-sm text-slate-500">Stage: Proposal</p>
                        <div className="mt-4 grid gap-3 md:grid-cols-2">
                            <input
                                placeholder="Deal Value"
                                className="rounded-lg border border-slate-200 px-3 py-2"
                            />
                            <input
                                type="date"
                                className="rounded-lg border border-slate-200 px-3 py-2"
                            />
                            <input
                                placeholder="Win Probability"
                                className="rounded-lg border border-slate-200 px-3 py-2"
                            />
                            <input
                                placeholder="Next Step"
                                className="rounded-lg border border-slate-200 px-3 py-2"
                            />
                        </div>
                        <div className="mt-6 flex items-center justify-between">
                            <button
                                onClick={() => setShowRequired(false)}
                                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600"
                            >
                                Cancel
                            </button>
                            <button className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white">
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </AppLayout>
    );
}
