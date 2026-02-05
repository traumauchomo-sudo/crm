import { Head } from '@inertiajs/react';

const contacts = [
    {
        id: 1,
        name: 'Jamie Rivera',
        company: 'Acme Corp',
        role: 'Director',
        owner: 'Alex',
        tags: ['VIP'],
        status: 'Active',
    },
    {
        id: 2,
        name: 'Priya Nair',
        company: 'Beta LLC',
        role: 'VP Sales',
        owner: 'Sam',
        tags: ['Lead'],
        status: 'Active',
    },
    {
        id: 3,
        name: 'Chen Li',
        company: 'Delta Co',
        role: 'Manager',
        owner: 'Priya',
        tags: ['Demo'],
        status: 'Active',
    },
];

const pipeline = [
    {
        name: 'New',
        total: '$320k',
        deals: [
            { id: 1, name: 'Acme Corp', amount: '$120k', owner: 'Alex' },
            { id: 2, name: 'Foxtrot Ltd', amount: '$80k', owner: 'Priya' },
        ],
    },
    {
        name: 'Qualified',
        total: '$410k',
        deals: [
            { id: 3, name: 'Beta LLC', amount: '$150k', owner: 'Sam' },
            { id: 4, name: 'Gamma Partners', amount: '$260k', owner: 'Alex' },
        ],
    },
    {
        name: 'Proposal',
        total: '$230k',
        deals: [{ id: 5, name: 'Delta Co', amount: '$230k', owner: 'Priya' }],
    },
    {
        name: 'Negotiation',
        total: '$180k',
        deals: [{ id: 6, name: 'Echo Inc', amount: '$180k', owner: 'Sam' }],
    },
];

const tasks = [
    {
        id: 1,
        due: 'Today',
        title: 'Send proposal to Acme',
        related: 'Acme Corp Deal',
        owner: 'Alex',
        status: 'Open',
    },
    {
        id: 2,
        due: 'Tomorrow',
        title: 'Follow up with Beta',
        related: 'Beta LLC Contact',
        owner: 'Sam',
        status: 'Open',
    },
    {
        id: 3,
        due: 'Overdue',
        title: 'Update notes from Delta meeting',
        related: 'Delta Co Deal',
        owner: 'Priya',
        status: 'Overdue',
    },
];

const timeline = [
    {
        id: 1,
        date: '2024-06-05',
        type: 'Call logged',
        detail: 'Discussed renewal timeline',
    },
    {
        id: 2,
        date: '2024-06-02',
        type: 'Email sent',
        detail: 'Proposal attached',
    },
    {
        id: 3,
        date: '2024-05-28',
        type: 'Meeting',
        detail: 'Requirements gathering',
    },
];

const activities = [
    { id: 1, label: 'Calls', value: 12, tone: 'bg-indigo-500' },
    { id: 2, label: 'Emails', value: 18, tone: 'bg-emerald-500' },
    { id: 3, label: 'Meetings', value: 6, tone: 'bg-amber-500' },
    { id: 4, label: 'Notes', value: 14, tone: 'bg-slate-400' },
];

const stages = [
    { id: 1, label: 'New', value: 20 },
    { id: 2, label: 'Qualified', value: 30 },
    { id: 3, label: 'Proposal', value: 15 },
    { id: 4, label: 'Negotiation', value: 8 },
];

const kpis = [
    { id: 1, label: 'Pipeline', value: '$1.2M', trend: '+8%' },
    { id: 2, label: 'Win Rate', value: '32%', trend: '+3%' },
    { id: 3, label: 'Tasks Due Today', value: '5', trend: '2 overdue' },
    { id: 4, label: 'New Leads', value: '12', trend: '+4 this week' },
];

const filters = ['All', 'Active', 'Needs Review', 'VIP'];

const stageRequirements = [
    { id: 1, label: 'Deal Value', value: '$45,000' },
    { id: 2, label: 'Expected Close', value: '2024-07-15' },
    { id: 3, label: 'Win Probability', value: '65%' },
    { id: 4, label: 'Next Step', value: 'Send proposal' },
];

const logActivityOptions = ['Call', 'Email', 'Meeting', 'Task'];

const flowItems = [
    {
        id: 1,
        title: 'Add Contact',
        steps: [
            'Contacts List → click “+ New Contact”.',
            'New Contact Drawer opens from the right.',
            'Save contact to see it appear in the list.',
        ],
    },
    {
        id: 2,
        title: 'Move Deal to Proposal',
        steps: [
            'Drag card into Proposal.',
            'Complete required fields modal.',
            'Auto-task is created with a toast.',
        ],
    },
    {
        id: 3,
        title: 'Log Activity',
        steps: [
            'Open contact detail.',
            'Choose Log Activity → Call.',
            'Save activity to show on the timeline.',
        ],
    },
    {
        id: 4,
        title: 'Complete Task',
        steps: ['Check the task box.', 'Row collapses into Completed section.', 'Toast confirms completion.'],
    },
];

export default function Welcome() {
    return (
        <>
            <Head title="CRM Overview">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=inter:400,500,600,700" rel="stylesheet" />
            </Head>
            <div className="min-h-screen bg-slate-50 text-slate-900">
                <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
                    <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-5">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">CRM</p>
                            <h1 className="text-2xl font-semibold">Dashboard</h1>
                            <p className="text-sm text-slate-500">Modern customer workspace preview</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500">
                                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                                Synced
                            </div>
                            <button className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700">
                                + New Contact
                            </button>
                        </div>
                    </div>
                </header>

                <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-8">
                    <section className="grid gap-4 lg:grid-cols-4">
                        {kpis.map((kpi) => (
                            <div
                                key={kpi.id}
                                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                            >
                                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                    {kpi.label}
                                </p>
                                <div className="mt-3 flex items-baseline justify-between">
                                    <span className="text-2xl font-semibold text-slate-900">{kpi.value}</span>
                                    <span className="text-xs font-medium text-emerald-600">{kpi.trend}</span>
                                </div>
                            </div>
                        ))}
                    </section>

                    <section className="grid gap-6 lg:grid-cols-[2fr_1.2fr_1.2fr]">
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-lg font-semibold">Pipeline by Stage</h2>
                                    <p className="text-sm text-slate-500">Weighted forecast totals</p>
                                </div>
                                <button className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-500">
                                    View forecast
                                </button>
                            </div>
                            <div className="mt-6 space-y-4">
                                {stages.map((stage) => (
                                    <div key={stage.id} className="space-y-2">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="font-medium text-slate-700">{stage.label}</span>
                                            <span className="text-slate-500">{stage.value}</span>
                                        </div>
                                        <div className="h-2 rounded-full bg-slate-100">
                                            <div
                                                className="h-2 rounded-full bg-indigo-500"
                                                style={{ width: `${Math.min(stage.value * 2, 100)}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div>
                                <h2 className="text-lg font-semibold">Team Activity</h2>
                                <p className="text-sm text-slate-500">Last 7 days</p>
                            </div>
                            <div className="mt-5 space-y-4">
                                {activities.map((activity) => (
                                    <div key={activity.id} className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <span className={`h-3 w-3 rounded-full ${activity.tone}`} />
                                            <span className="text-sm font-medium text-slate-700">
                                                {activity.label}
                                            </span>
                                        </div>
                                        <span className="text-sm font-semibold text-slate-900">
                                            {activity.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-lg font-semibold">My Tasks</h2>
                                    <p className="text-sm text-slate-500">Due today</p>
                                </div>
                                <button className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                                    New Task
                                </button>
                            </div>
                            <div className="mt-4 space-y-3">
                                {tasks.slice(0, 2).map((task) => (
                                    <div
                                        key={task.id}
                                        className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-3 py-2"
                                    >
                                        <div>
                                            <p className="text-sm font-semibold text-slate-800">{task.title}</p>
                                            <p className="text-xs text-slate-500">{task.related}</p>
                                        </div>
                                        <span className="text-xs font-medium text-amber-600">{task.due}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                                <div>
                                    <h2 className="text-lg font-semibold">Contacts</h2>
                                    <p className="text-sm text-slate-500">Sortable and tag filtered view</p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {filters.map((filter) => (
                                        <button
                                            key={filter}
                                            className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-500 transition hover:border-indigo-300 hover:text-indigo-600"
                                        >
                                            {filter}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-5 overflow-hidden rounded-xl border border-slate-100">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-slate-50 text-xs uppercase text-slate-400">
                                        <tr>
                                            <th className="px-4 py-3">Name</th>
                                            <th className="px-4 py-3">Company</th>
                                            <th className="px-4 py-3">Role</th>
                                            <th className="px-4 py-3">Owner</th>
                                            <th className="px-4 py-3">Tags</th>
                                            <th className="px-4 py-3">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {contacts.map((contact) => (
                                            <tr key={contact.id} className="hover:bg-slate-50">
                                                <td className="px-4 py-3 font-semibold text-slate-900">
                                                    {contact.name}
                                                </td>
                                                <td className="px-4 py-3 text-slate-600">{contact.company}</td>
                                                <td className="px-4 py-3 text-slate-600">{contact.role}</td>
                                                <td className="px-4 py-3 text-slate-600">{contact.owner}</td>
                                                <td className="px-4 py-3">
                                                    <div className="flex flex-wrap gap-2">
                                                        {contact.tags.map((tag) => (
                                                            <span
                                                                key={tag}
                                                                className="rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-600"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-600">
                                                        {contact.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <aside className="space-y-6">
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold">Contact Detail</h3>
                                    <button className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-500">
                                        Edit
                                    </button>
                                </div>
                                <p className="mt-4 text-sm font-semibold text-slate-900">Jamie Rivera</p>
                                <p className="text-xs text-slate-500">Director of Operations · Acme Corp</p>
                                <div className="mt-4 space-y-2 text-sm text-slate-600">
                                    <p>Owner: Alex</p>
                                    <p>Status: Active</p>
                                    <p>Email: jamie@acme.com</p>
                                    <p>Phone: 555-123</p>
                                </div>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    <span className="rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-600">
                                        VIP
                                    </span>
                                    <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
                                        Renewal
                                    </span>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold">Timeline</h3>
                                    <button className="rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
                                        Log Activity
                                    </button>
                                </div>
                                <div className="mt-4 space-y-4">
                                    {timeline.map((item) => (
                                        <div key={item.id} className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2">
                                            <p className="text-xs text-slate-400">{item.date}</p>
                                            <p className="text-sm font-semibold text-slate-800">{item.type}</p>
                                            <p className="text-xs text-slate-500">{item.detail}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </aside>
                    </section>

                    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                            <div>
                                <h2 className="text-lg font-semibold">Lead Pipeline</h2>
                                <p className="text-sm text-slate-500">Drag deals to update stages</p>
                            </div>
                            <button className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-500">
                                Configure stages
                            </button>
                        </div>
                        <div className="mt-6 grid gap-4 lg:grid-cols-4">
                            {pipeline.map((stage) => (
                                <div
                                    key={stage.name}
                                    className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4"
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-semibold text-slate-700">{stage.name}</p>
                                            <p className="text-xs text-slate-400">{stage.total}</p>
                                        </div>
                                        <span className="rounded-full bg-white px-2 py-1 text-xs font-medium text-slate-500">
                                            {stage.deals.length}
                                        </span>
                                    </div>
                                    {stage.deals.map((deal) => (
                                        <div
                                            key={deal.id}
                                            className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm"
                                        >
                                            <p className="text-sm font-semibold text-slate-800">{deal.name}</p>
                                            <p className="text-xs text-slate-500">{deal.amount}</p>
                                            <p className="text-xs text-slate-400">Owner: {deal.owner}</p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <h2 className="text-lg font-semibold">My Tasks Queue</h2>
                            <p className="text-sm text-slate-500">Assignments, reminders, and SLA status</p>
                            <div className="mt-5 overflow-hidden rounded-xl border border-slate-100">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-slate-50 text-xs uppercase text-slate-400">
                                        <tr>
                                            <th className="px-4 py-3">Due</th>
                                            <th className="px-4 py-3">Task</th>
                                            <th className="px-4 py-3">Related</th>
                                            <th className="px-4 py-3">Owner</th>
                                            <th className="px-4 py-3">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {tasks.map((task) => (
                                            <tr key={task.id} className="hover:bg-slate-50">
                                                <td className="px-4 py-3 text-slate-600">{task.due}</td>
                                                <td className="px-4 py-3 font-semibold text-slate-900">
                                                    {task.title}
                                                </td>
                                                <td className="px-4 py-3 text-slate-600">{task.related}</td>
                                                <td className="px-4 py-3 text-slate-600">{task.owner}</td>
                                                <td className="px-4 py-3">
                                                    <span
                                                        className={`rounded-full px-2 py-1 text-xs font-semibold ${
                                                            task.status === 'Overdue'
                                                                ? 'bg-rose-50 text-rose-600'
                                                                : 'bg-emerald-50 text-emerald-600'
                                                        }`}
                                                    >
                                                        {task.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold">Required Fields</h3>
                                    <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700">
                                        Proposal
                                    </span>
                                </div>
                                <div className="mt-4 space-y-3">
                                    {stageRequirements.map((field) => (
                                        <div
                                            key={field.id}
                                            className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-3 py-2"
                                        >
                                            <span className="text-sm font-medium text-slate-700">{field.label}</span>
                                            <span className="text-xs font-semibold text-slate-900">{field.value}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4 flex gap-2">
                                    <button className="w-full rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-500">
                                        Cancel
                                    </button>
                                    <button className="w-full rounded-full bg-indigo-600 px-3 py-2 text-xs font-semibold text-white">
                                        Confirm
                                    </button>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <h3 className="text-lg font-semibold">Log Activity</h3>
                                <p className="text-sm text-slate-500">Choose a type</p>
                                <div className="mt-4 grid gap-2">
                                    {logActivityOptions.map((option) => (
                                        <label
                                            key={option}
                                            className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-sm text-slate-700"
                                        >
                                            <input type="radio" name="activity" className="text-indigo-600" />
                                            {option}
                                        </label>
                                    ))}
                                </div>
                                <button className="mt-4 w-full rounded-full bg-slate-900 px-3 py-2 text-xs font-semibold text-white">
                                    Continue
                                </button>
                            </div>
                        </div>
                    </section>

                    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h2 className="text-lg font-semibold">Flow Highlights</h2>
                        <p className="text-sm text-slate-500">Operational guidance from UI spec</p>
                        <div className="mt-5 grid gap-4 md:grid-cols-2">
                            {flowItems.map((flow) => (
                                <div key={flow.id} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                                    <p className="text-sm font-semibold text-slate-800">{flow.title}</p>
                                    <ul className="mt-3 space-y-2 text-xs text-slate-500">
                                        {flow.steps.map((step) => (
                                            <li key={step} className="flex gap-2">
                                                <span className="text-indigo-600">•</span>
                                                <span>{step}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h2 className="text-lg font-semibold">New Contact Drawer</h2>
                        <p className="text-sm text-slate-500">Custom fields and notes</p>
                        <div className="mt-5 grid gap-4 md:grid-cols-2">
                            <div className="space-y-3">
                                <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                    Name
                                </label>
                                <input
                                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
                                    placeholder="Jamie Rivera"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                    Company
                                </label>
                                <input
                                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
                                    placeholder="Acme Corp"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                    Email
                                </label>
                                <input
                                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
                                    placeholder="jamie@acme.com"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                    Phone
                                </label>
                                <input
                                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
                                    placeholder="555-123"
                                />
                            </div>
                        </div>
                        <div className="mt-4 grid gap-4 md:grid-cols-2">
                            <div className="space-y-3">
                                <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                    Owner
                                </label>
                                <select className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm">
                                    <option>Alex</option>
                                    <option>Priya</option>
                                    <option>Sam</option>
                                </select>
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                    Custom Field: Renewal Date
                                </label>
                                <input
                                    type="date"
                                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
                                    defaultValue="2024-12-15"
                                />
                            </div>
                        </div>
                        <div className="mt-4 space-y-3">
                            <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                Notes
                            </label>
                            <textarea
                                className="min-h-[120px] w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
                                placeholder="Add context, recent conversations, and priorities..."
                            />
                        </div>
                        <div className="mt-5 flex items-center justify-end gap-2">
                            <button className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-500">
                                Cancel
                            </button>
                            <button className="rounded-full bg-indigo-600 px-4 py-2 text-xs font-semibold text-white">
                                Save Contact
                            </button>
                        </div>
                    </section>

                    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h2 className="text-lg font-semibold">Log Call Activity</h2>
                        <p className="text-sm text-slate-500">Attachments and sentiment capture</p>
                        <div className="mt-5 grid gap-4 md:grid-cols-2">
                            <div className="space-y-3">
                                <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                    Outcome
                                </label>
                                <select className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm">
                                    <option>Connected</option>
                                    <option>Left voicemail</option>
                                </select>
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                    Duration
                                </label>
                                <select className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm">
                                    <option>15 min</option>
                                    <option>30 min</option>
                                </select>
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                    Sentiment
                                </label>
                                <select className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm">
                                    <option>Positive</option>
                                    <option>Neutral</option>
                                    <option>Negative</option>
                                </select>
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                    Attachment
                                </label>
                                <input type="file" className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm" />
                            </div>
                        </div>
                        <div className="mt-4 space-y-3">
                            <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                Summary
                            </label>
                            <textarea
                                className="min-h-[120px] w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
                                placeholder="Discussion summary..."
                            />
                        </div>
                        <div className="mt-5 flex items-center justify-end gap-2">
                            <button className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-500">
                                Cancel
                            </button>
                            <button className="rounded-full bg-indigo-600 px-4 py-2 text-xs font-semibold text-white">
                                Save Activity
                            </button>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}
