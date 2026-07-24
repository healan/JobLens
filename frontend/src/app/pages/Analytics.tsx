import { TrendingUp, Clock, Target, Award } from 'lucide-react';
import { LineChart, Line, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const responseTimeData = [
  { week: 'Week 1', avgDays: 5 },
  { week: 'Week 2', avgDays: 4 },
  { week: 'Week 3', avgDays: 3 },
  { week: 'Week 4', avgDays: 4 },
];

const statusData = [
  { name: 'Applied', value: 14, color: '#eab308' },
  { name: 'Screening', value: 8, color: '#3b82f6' },
  { name: 'Interview', value: 6, color: '#22c55e' },
  { name: 'Rejected', value: 6, color: '#ef4444' },
];

const funnelData = [
  { stage: 'Applied', count: 34 },
  { stage: 'Screening', count: 20 },
  { stage: 'Interview', count: 12 },
  { stage: 'Offer', count: 3 },
];

export function Analytics() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="mb-1">Analytics</h1>
        <p className="text-muted-foreground text-sm">Track your job search performance and trends</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <div className="p-6 rounded-3xl bg-card border border-border">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
            <Clock className="w-5 h-5 text-blue-500" />
          </div>
          <div className="text-3xl font-semibold mb-1">3.8</div>
          <div className="text-sm text-muted-foreground">Avg Response Days</div>
        </div>

        <div className="p-6 rounded-3xl bg-card border border-border">
          <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
            <Target className="w-5 h-5 text-green-500" />
          </div>
          <div className="text-3xl font-semibold mb-1">35%</div>
          <div className="text-sm text-muted-foreground">Interview Rate</div>
        </div>

        <div className="p-6 rounded-3xl bg-card border border-border">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
            <TrendingUp className="w-5 h-5 text-purple-500" />
          </div>
          <div className="text-3xl font-semibold mb-1">87%</div>
          <div className="text-sm text-muted-foreground">Avg Match Score</div>
        </div>

        <div className="p-6 rounded-3xl bg-card border border-border">
          <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-4">
            <Award className="w-5 h-5 text-yellow-500" />
          </div>
          <div className="text-3xl font-semibold mb-1">3</div>
          <div className="text-sm text-muted-foreground">Offers Received</div>
        </div>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-8 rounded-3xl bg-card border border-border">
          <h3 className="mb-6">Response Time Trend</h3>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={responseTimeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="week" stroke="var(--color-muted-foreground)" fontSize={12} />
              <YAxis stroke="var(--color-muted-foreground)" fontSize={12} />
              <Tooltip />
              <Line type="monotone" dataKey="avgDays" stroke="rgb(168, 85, 247)" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="p-8 rounded-3xl bg-card border border-border">
          <h3 className="mb-6">Application Status</h3>
          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            {statusData.map((entry, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
                <span className="text-xs text-muted-foreground">{entry.name} ({entry.value})</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Funnel */}
      <div className="p-8 rounded-3xl bg-card border border-border">
        <h3 className="mb-6">Application Funnel</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={funnelData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis type="number" stroke="var(--color-muted-foreground)" fontSize={12} />
            <YAxis type="category" dataKey="stage" stroke="var(--color-muted-foreground)" fontSize={12} />
            <Tooltip />
            <Bar dataKey="count" fill="rgb(59, 130, 246)" radius={[0, 8, 8, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-8 rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-border">
          <h3 className="mb-2">What's Working</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Your response time has improved by 40% this month</li>
            <li>• Applications with 85%+ match score have 2x higher interview rate</li>
            <li>• Following up within 48 hours increases response rate by 60%</li>
          </ul>
        </div>

        <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/5 border border-border">
          <h3 className="mb-2">Recommendations</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Focus on roles with 85%+ match score for better success rate</li>
            <li>• Set up automated follow-up reminders to improve response time</li>
            <li>• Consider upskilling in Design Systems to increase match scores</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
