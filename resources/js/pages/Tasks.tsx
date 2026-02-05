import { useState } from 'react';
import AppLayout from './components/AppLayout';

const tasks = [
    { due: 'Today', task: 'Send proposal to Acme', related: 'Acme Corp Deal', owner: 'Alex' },
    { due: 'Tomorrow', task: 'Follow up with Beta', related: 'Beta LLC Contact', owner: 'Sam' },
    { due: 'Overdue', task: 'Update notes from Delta meeting', related: 'Delta Co Deal', owner: 'Priya' },
];

export default function Tasks() {
    const [showCompleted, setShowCompleted] = useState(false);

    return (
        <AppLayout title="My Tasks">
            <section className="rounded-2xl bg-white p-5 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <h2 className="text-lg font-semibold text-slate-900">My Tasks</h2>
                        <p className="text-sm text-slate-500">Track due dates, reminders, and SLA alerts.</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                            1 Overdue
                        </span>
                        <button className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white">New Task</button>
                    </div>
                </div>

                <div className="mt-5 overflow-x-auto">
                    <table className="min-w-full text-left text-sm">
                        <thead>
                            <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-400">
                                <th className="py-3 pr-4">Due</th>
                                <th className="py-3 pr-4">Task</th>
                                <th className="py-3 pr-4">Related To</th>
                                <th className="py-3 pr-4">Owner</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task) => (
                                <tr key={task.task} className="border-b border-slate-100">
                                    <td className="py-3 pr-4">
                                        <span
                                            className={
                                                task.due === 'Overdue'
                                                    ? 'rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-600'
                                                    : 'rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600'
                                            }
                                        >
                                            {task.due}
                                        </span>
                                    </td>
                                    <td className="py-3 pr-4 font-semibold text-slate-900">
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
                                            {task.task}
                                        </label>
                                    </td>
                                    <td className="py-3 pr-4 text-slate-600">{task.related}</td>
                                    <td className="py-3 pr-4 text-slate-600">{task.owner}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
                <button
                    onClick={() => setShowCompleted((value) => !value)}
                    className="flex w-full items-center justify-between text-sm font-semibold text-slate-700"
                >
                    Completed Tasks (3)
                    <span>{showCompleted ? '▴' : '▾'}</span>
                </button>
                {showCompleted && (
                    <div className="mt-4 space-y-2 text-sm text-slate-500">
                        <p>✔ Review Q2 pipeline</p>
                        <p>✔ Send renewal reminder</p>
                        <p>✔ Draft meeting summary</p>
                    </div>
                )}
            </section>
        </AppLayout>
    );
}
