import AppLayout from './components/AppLayout';

const kpis = [
    { label: 'Pipeline', value: '$1.2M' },
    { label: 'Win Rate', value: '32%' },
    { label: 'Tasks Due Today', value: '5' },
    { label: 'New Leads', value: '12' },
];

const pipeline = [
    { stage: 'New', value: 20 },
    { stage: 'Qualified', value: 30 },
    { stage: 'Proposal', value: 15 },
    { stage: 'Negotiation', value: 8 },
];

const activity = [
    { label: 'Calls', value: 12 },
    { label: 'Emails', value: 18 },
    { label: 'Meetings', value: 6 },
    { label: 'Notes', value: 14 },
];

const tasks = [
    'Call Acme',
    'Send proposal',
    'Follow-up Beta',
    'Review notes',
];

const recent = [
    'Alex logged a call with Acme Corp',
    'Priya moved Beta LLC to Proposal',
    'Sam scheduled meeting with Delta Co',
];

export default function Dashboard() {
    return (
        <AppLayout title="Dashboard">
            <section className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white p-4 shadow-sm">
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
                    <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">Filters</label>
                    <select className="rounded-full border border-slate-200 px-3 py-2 text-sm">
                        <option>Owner: All</option>
                        <option>Owner: Alex</option>
                        <option>Owner: Priya</option>
                        <option>Owner: Sam</option>
                    </select>
                    <select className="rounded-full border border-slate-200 px-3 py-2 text-sm">
                        <option>Timeframe: This Week</option>
                        <option>Timeframe: This Month</option>
                        <option>Timeframe: This Quarter</option>
                    </select>
                </div>
                <div className="flex items-center gap-2">
                    <select className="rounded-full border border-slate-200 px-3 py-2 text-sm">
                        <option>Saved View: Default</option>
                        <option>Alex Weekly</option>
                    </select>
                    <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600">
                        Save View
                    </button>
                    <button className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white">Export</button>
                </div>
            </section>
            <section className="grid gap-4 md:grid-cols-4">
                {kpis.map((kpi) => (
                    <div key={kpi.label} className="rounded-2xl bg-white p-4 shadow-sm">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{kpi.label}</p>
                        <p className="mt-2 text-2xl font-semibold text-slate-900">{kpi.value}</p>
                    </div>
                ))}
            </section>

            <section className="mt-6 grid gap-4 lg:grid-cols-3">
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                    <h2 className="text-sm font-semibold text-slate-700">Pipeline by Stage</h2>
                    <div className="mt-4 space-y-3">
                        {pipeline.map((item) => (
                            <div key={item.stage} className="space-y-1">
                                <div className="flex items-center justify-between text-xs font-medium text-slate-500">
                                    <span>{item.stage}</span>
                                    <span>{item.value}</span>
                                </div>
                                <div className="h-2 rounded-full bg-slate-100">
                                    <div
                                        className="h-2 rounded-full bg-indigo-600"
                                        style={{ width: `${item.value * 2}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                    <h2 className="text-sm font-semibold text-slate-700">Team Activity</h2>
                    <div className="mt-4 space-y-3">
                        {activity.map((item) => (
                            <div key={item.label} className="flex items-center justify-between text-sm text-slate-600">
                                <span>{item.label}</span>
                                <span className="font-semibold text-slate-900">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                    <h2 className="text-sm font-semibold text-slate-700">My Tasks</h2>
                    <div className="mt-4 space-y-3">
                        {tasks.map((task) => (
                            <label key={task} className="flex items-center gap-2 text-sm text-slate-600">
                                <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
                                <span>{task}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
                <h2 className="text-sm font-semibold text-slate-700">Recent Activity</h2>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {recent.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-emerald-500" />
                            {item}
                        </li>
                    ))}
                </ul>
            </section>
        </AppLayout>
    );
}
