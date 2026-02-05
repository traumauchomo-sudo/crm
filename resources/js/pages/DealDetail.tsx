import AppLayout from './components/AppLayout';

const timeline = [
    { date: '2024-06-05', text: 'Call: Discussed renewal scope' },
    { date: '2024-06-02', text: 'Email: Shared pricing options' },
];

export default function DealDetail() {
    return (
        <AppLayout title="Deal Detail">
            <section className="rounded-2xl bg-white p-5 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                        <h2 className="text-xl font-semibold text-slate-900">Acme Corp Renewal</h2>
                        <p className="text-sm text-slate-500">Stage: Proposal</p>
                    </div>
                    <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">$45,000</span>
                </div>
                <div className="mt-5 grid gap-4 md:grid-cols-3">
                    <div className="rounded-xl border border-slate-100 p-4">
                        <p className="text-xs uppercase tracking-wide text-slate-400">Owner</p>
                        <p className="mt-2 text-sm font-semibold text-slate-700">Alex</p>
                    </div>
                    <div className="rounded-xl border border-slate-100 p-4">
                        <p className="text-xs uppercase tracking-wide text-slate-400">Close Date</p>
                        <p className="mt-2 text-sm font-semibold text-slate-700">2024-07-15</p>
                    </div>
                    <div className="rounded-xl border border-slate-100 p-4">
                        <p className="text-xs uppercase tracking-wide text-slate-400">Probability</p>
                        <p className="mt-2 text-sm font-semibold text-slate-700">65%</p>
                    </div>
                </div>
                <div className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50 p-4 text-sm text-emerald-700">
                    Next Best Action: Send proposal by 2024-06-10
                    <button className="ml-3 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">
                        Mark Complete
                    </button>
                </div>
            </section>

            <section className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-700">Activity Timeline</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                    {timeline.map((item) => (
                        <li key={item.date} className="flex items-start gap-3">
                            <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
                            <div>
                                <p className="text-xs text-slate-400">{item.date}</p>
                                <p>{item.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </AppLayout>
    );
}
