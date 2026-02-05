import { useState } from 'react';
import AppLayout from './components/AppLayout';

const timeline = [
    { date: '2024-06-05', text: 'Call logged: Discussed renewal timeline' },
    { date: '2024-06-02', text: 'Email sent: Proposal attached', attachment: 'proposal.pdf' },
    { date: '2024-05-28', text: 'Meeting: Requirements gathering' },
];

export default function ContactDetail() {
    const [showActivity, setShowActivity] = useState(false);
    const [activityStep, setActivityStep] = useState<'menu' | 'call' | 'task'>('menu');

    return (
        <AppLayout title="Contact Detail">
            <section className="rounded-2xl bg-white p-5 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                        <h2 className="text-xl font-semibold text-slate-900">Jamie Rivera</h2>
                        <p className="text-sm text-slate-500">Acme Corp • Director of Operations</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600">
                            Edit
                        </button>
                        <button
                            onClick={() => {
                                setActivityStep('menu');
                                setShowActivity(true);
                            }}
                            className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white"
                        >
                            Log Activity
                        </button>
                    </div>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                    <div className="rounded-xl border border-slate-100 p-4">
                        <p className="text-xs uppercase tracking-wide text-slate-400">Owner</p>
                        <p className="mt-2 text-sm font-semibold text-slate-700">Alex</p>
                    </div>
                    <div className="rounded-xl border border-slate-100 p-4">
                        <p className="text-xs uppercase tracking-wide text-slate-400">Status</p>
                        <p className="mt-2 text-sm font-semibold text-emerald-600">Active</p>
                    </div>
                    <div className="rounded-xl border border-slate-100 p-4">
                        <p className="text-xs uppercase tracking-wide text-slate-400">Tags</p>
                        <div className="mt-2 flex gap-2">
                            {['VIP', 'Renewal'].map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-500"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-700">Timeline</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                    {timeline.map((item) => (
                        <li key={item.date} className="flex items-start gap-3">
                            <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
                            <div>
                                <p className="text-xs text-slate-400">{item.date}</p>
                                <p>{item.text}</p>
                                {item.attachment && (
                                    <a
                                        href="#"
                                        className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-500"
                                    >
                                        Download {item.attachment}
                                    </a>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            {showActivity && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 px-4">
                    <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-slate-900">
                                {activityStep === 'menu' ? 'Log Activity' : activityStep === 'task' ? 'Log Task' : 'Log Call'}
                            </h3>
                            <button
                                onClick={() => {
                                    setShowActivity(false);
                                    setActivityStep('menu');
                                }}
                                className="text-slate-400 hover:text-slate-600"
                            >
                                ✕
                            </button>
                        </div>
                        {activityStep === 'menu' ? (
                            <div className="mt-4 space-y-3 text-sm text-slate-600">
                                {['Call', 'Email', 'Meeting', 'Task'].map((option) => (
                                    <label key={option} className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="activity"
                                            onChange={() =>
                                                setActivityStep(option === 'Task' ? 'task' : 'call')
                                            }
                                        />
                                        {option}
                                    </label>
                                ))}
                                <button className="mt-4 w-full rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white">
                                    Continue
                                </button>
                            </div>
                        ) : activityStep === 'task' ? (
                            <>
                                <div className="mt-4 space-y-3">
                                    <input
                                        placeholder="Task title"
                                        className="w-full rounded-lg border border-slate-200 px-3 py-2"
                                    />
                                    <input
                                        type="date"
                                        className="w-full rounded-lg border border-slate-200 px-3 py-2"
                                    />
                                    <input
                                        placeholder="Assignee"
                                        className="w-full rounded-lg border border-slate-200 px-3 py-2"
                                    />
                                    <label className="flex items-center gap-2 text-sm text-slate-600">
                                        <input type="checkbox" />
                                        Set reminder
                                    </label>
                                </div>
                                <div className="mt-6 flex items-center justify-between">
                                    <button
                                        onClick={() => setActivityStep('menu')}
                                        className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600"
                                    >
                                        Back
                                    </button>
                                    <button className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white">
                                        Save Activity
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="mt-4 space-y-3">
                                    <input
                                        placeholder="Outcome"
                                        className="w-full rounded-lg border border-slate-200 px-3 py-2"
                                    />
                                    <input
                                        placeholder="Duration"
                                        className="w-full rounded-lg border border-slate-200 px-3 py-2"
                                    />
                                    <input
                                        placeholder="Sentiment"
                                        className="w-full rounded-lg border border-slate-200 px-3 py-2"
                                    />
                                    <textarea
                                        placeholder="Summary"
                                        rows={4}
                                        className="w-full rounded-lg border border-slate-200 px-3 py-2"
                                    />
                                    <input type="file" className="w-full text-sm text-slate-500" />
                                </div>
                                <div className="mt-6 flex items-center justify-between">
                                    <button
                                        onClick={() => setActivityStep('menu')}
                                        className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600"
                                    >
                                        Back
                                    </button>
                                    <button className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white">
                                        Save Activity
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </AppLayout>
    );
}
