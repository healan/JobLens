import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search, Filter, ChevronDown } from 'lucide-react';

const applications = [
  { id: 1, company: 'Stripe', role: 'Senior Product Designer', status: 'interview', date: '2024-05-30', match: 92, salary: '$140k - $180k' },
  { id: 2, company: 'Vercel', role: 'Frontend Engineer', status: 'applied', date: '2024-05-27', match: 88, salary: '$130k - $170k' },
  { id: 3, company: 'Linear', role: 'Product Manager', status: 'screening', date: '2024-05-25', match: 85, salary: '$150k - $190k' },
  { id: 4, company: 'Figma', role: 'UX Researcher', status: 'applied', date: '2024-05-20', match: 90, salary: '$120k - $160k' },
  { id: 5, company: 'Notion', role: 'Design Lead', status: 'rejected', date: '2024-05-18', match: 78, salary: '$160k - $200k' },
  { id: 6, company: 'GitHub', role: 'Senior Engineer', status: 'interview', date: '2024-05-15', match: 89, salary: '$145k - $185k' },
];

export function Applications() {
  const [filter, setFilter] = useState('all');

  const filteredApplications = filter === 'all'
    ? applications
    : applications.filter(app => app.status === filter);

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="mb-1">Applications</h1>
          <p className="text-muted-foreground text-sm">Manage all your job applications</p>
        </div>
        <Link
          to="/create"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-all"
        >
          <Plus className="w-5 h-5" />
          New Application
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search applications..."
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-input-background border border-border focus:border-primary outline-none transition-colors"
          />
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-3 rounded-xl border border-border hover:bg-accent transition-all flex items-center gap-2">
            <Filter className="w-5 h-5" />
            <span className="hidden sm:inline">Filter</span>
          </button>
          <button className="px-4 py-3 rounded-xl border border-border hover:bg-accent transition-all flex items-center gap-2">
            <span className="hidden sm:inline">Sort</span>
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Status Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {[
          { label: 'All', value: 'all', count: applications.length },
          { label: 'Applied', value: 'applied', count: applications.filter(a => a.status === 'applied').length },
          { label: 'Screening', value: 'screening', count: applications.filter(a => a.status === 'screening').length },
          { label: 'Interview', value: 'interview', count: applications.filter(a => a.status === 'interview').length },
          { label: 'Rejected', value: 'rejected', count: applications.filter(a => a.status === 'rejected').length },
        ].map((tab) => (
          <button
            key={tab.value}
            onClick={() => setFilter(tab.value)}
            className={`px-4 py-2 rounded-xl text-sm whitespace-nowrap transition-all ${
              filter === tab.value
                ? 'bg-primary text-primary-foreground'
                : 'bg-accent text-accent-foreground hover:bg-accent/80'
            }`}
          >
            {tab.label} ({tab.count})
          </button>
        ))}
      </div>

      {/* Applications List */}
      <div className="grid grid-cols-1 gap-4">
        {filteredApplications.map((app) => (
          <Link
            key={app.id}
            to={`/job/${app.id}`}
            className="p-6 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all"
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-start sm:items-center gap-3 mb-2 flex-col sm:flex-row">
                  <h3 className="font-medium">{app.company}</h3>
                  <div className="flex items-center gap-2">
                    <div className="px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-500 text-xs">
                      {app.match}% match
                    </div>
                    <div
                      className={`px-3 py-1 rounded-lg text-xs capitalize ${
                        app.status === 'interview'
                          ? 'bg-green-500/10 text-green-500'
                          : app.status === 'screening'
                          ? 'bg-blue-500/10 text-blue-500'
                          : app.status === 'rejected'
                          ? 'bg-red-500/10 text-red-500'
                          : 'bg-yellow-500/10 text-yellow-500'
                      }`}
                    >
                      {app.status}
                    </div>
                  </div>
                </div>
                <div className="text-muted-foreground mb-2">{app.role}</div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{app.salary}</span>
                  <span>•</span>
                  <span>Applied {new Date(app.date).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
