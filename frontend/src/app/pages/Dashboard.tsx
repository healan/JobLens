import { Link } from 'react-router-dom';
import { Plus, TrendingUp, Clock, CheckCircle, XCircle, Target } from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const applicationData = [
  { month: 'Jan', applications: 12 },
  { month: 'Feb', applications: 19 },
  { month: 'Mar', applications: 25 },
  { month: 'Apr', applications: 31 },
  { month: 'May', applications: 28 },
  { month: 'Jun', applications: 34 },
];

const recentApplications = [
  { company: 'Stripe', role: 'Senior Product Designer', status: 'interview', date: '2 days ago', match: 92 },
  { company: 'Vercel', role: 'Frontend Engineer', status: 'applied', date: '5 days ago', match: 88 },
  { company: 'Linear', role: 'Product Manager', status: 'screening', date: '1 week ago', match: 85 },
  { company: 'Figma', role: 'UX Researcher', status: 'applied', date: '2 weeks ago', match: 90 },
];

export function Dashboard() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="mb-1">Dashboard</h1>
          <p className="text-muted-foreground text-sm">Track your job search progress</p>
        </div>
        <Link
          to="/create"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-all"
        >
          <Plus className="w-5 h-5" />
          New Application
        </Link>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <div className="p-6 rounded-3xl bg-card border border-border">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-blue-500" />
            </div>
            <span className="text-xs text-green-500">+12%</span>
          </div>
          <div className="text-3xl font-semibold mb-1">34</div>
          <div className="text-sm text-muted-foreground">Total Applications</div>
        </div>

        <div className="p-6 rounded-3xl bg-card border border-border">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center">
              <Clock className="w-5 h-5 text-yellow-500" />
            </div>
            <span className="text-xs text-yellow-500">In progress</span>
          </div>
          <div className="text-3xl font-semibold mb-1">12</div>
          <div className="text-sm text-muted-foreground">Active</div>
        </div>

        <div className="p-6 rounded-3xl bg-card border border-border">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-500" />
            </div>
            <span className="text-xs text-green-500">+3</span>
          </div>
          <div className="text-3xl font-semibold mb-1">8</div>
          <div className="text-sm text-muted-foreground">Interviews</div>
        </div>

        <div className="p-6 rounded-3xl bg-card border border-border">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
              <Target className="w-5 h-5 text-purple-500" />
            </div>
            <span className="text-xs text-muted-foreground">Avg</span>
          </div>
          <div className="text-3xl font-semibold mb-1">87%</div>
          <div className="text-sm text-muted-foreground">Match Score</div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-3xl bg-card border border-border">
          <h3 className="mb-6">Application Trend</h3>
          <ResponsiveContainer width="100%" height={240}>
            <AreaChart data={applicationData}>
              <defs>
                <linearGradient id="colorApplications" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="rgb(168, 85, 247)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="rgb(168, 85, 247)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="month" stroke="var(--color-muted-foreground)" fontSize={12} />
              <YAxis stroke="var(--color-muted-foreground)" fontSize={12} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="applications"
                stroke="rgb(168, 85, 247)"
                fillOpacity={1}
                fill="url(#colorApplications)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="p-6 rounded-3xl bg-card border border-border">
          <h3 className="mb-6">Monthly Summary</h3>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={applicationData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="month" stroke="var(--color-muted-foreground)" fontSize={12} />
              <YAxis stroke="var(--color-muted-foreground)" fontSize={12} />
              <Tooltip />
              <Bar dataKey="applications" fill="rgb(59, 130, 246)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Applications */}
      <div className="p-6 rounded-3xl bg-card border border-border">
        <div className="flex items-center justify-between mb-6">
          <h3>Recent Applications</h3>
          <Link to="/applications" className="text-sm text-primary hover:underline">
            View all
          </Link>
        </div>
        <div className="space-y-4">
          {recentApplications.map((app, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-xl bg-accent/30 hover:bg-accent transition-all"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <div className="font-medium">{app.company}</div>
                  <div className="px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-500 text-xs">
                    {app.match}% match
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">{app.role}</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-sm text-muted-foreground">{app.date}</div>
                <div
                  className={`px-3 py-1.5 rounded-lg text-xs capitalize ${
                    app.status === 'interview'
                      ? 'bg-green-500/10 text-green-500'
                      : app.status === 'screening'
                      ? 'bg-blue-500/10 text-blue-500'
                      : 'bg-yellow-500/10 text-yellow-500'
                  }`}
                >
                  {app.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
