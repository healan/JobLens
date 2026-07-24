import { XCircle, TrendingDown, Target, Lightbulb } from 'lucide-react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const rejectionReasons = [
  { name: 'Experience Mismatch', value: 35, color: '#ef4444' },
  { name: 'Skill Gap', value: 28, color: '#f97316' },
  { name: 'Culture Fit', value: 18, color: '#eab308' },
  { name: 'Other', value: 19, color: '#94a3b8' },
];

const rejectionsByStage = [
  { stage: 'Application', count: 8 },
  { stage: 'Screening', count: 5 },
  { stage: 'Interview', count: 3 },
  { stage: 'Final', count: 1 },
];

export function RejectionAnalysis() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="mb-1">Rejection Analysis</h1>
        <p className="text-muted-foreground text-sm">Learn from rejections to improve future applications</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <div className="p-6 rounded-3xl bg-card border border-border">
          <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
            <XCircle className="w-5 h-5 text-red-500" />
          </div>
          <div className="text-3xl font-semibold mb-1">17</div>
          <div className="text-sm text-muted-foreground">Total Rejections</div>
        </div>

        <div className="p-6 rounded-3xl bg-card border border-border">
          <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
            <TrendingDown className="w-5 h-5 text-orange-500" />
          </div>
          <div className="text-3xl font-semibold mb-1">32%</div>
          <div className="text-sm text-muted-foreground">Rejection Rate</div>
        </div>

        <div className="p-6 rounded-3xl bg-card border border-border">
          <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-4">
            <Target className="w-5 h-5 text-yellow-500" />
          </div>
          <div className="text-3xl font-semibold mb-1">5</div>
          <div className="text-sm text-muted-foreground">Common Patterns</div>
        </div>

        <div className="p-6 rounded-3xl bg-card border border-border">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
            <Lightbulb className="w-5 h-5 text-blue-500" />
          </div>
          <div className="text-3xl font-semibold mb-1">8</div>
          <div className="text-sm text-muted-foreground">AI Insights</div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-8 rounded-3xl bg-card border border-border">
          <h3 className="mb-6">Rejection Reasons</h3>
          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie
                data={rejectionReasons}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {rejectionReasons.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            {rejectionReasons.map((entry, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
                <span className="text-xs text-muted-foreground">{entry.name} ({entry.value}%)</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-card border border-border">
          <h3 className="mb-6">Rejections by Stage</h3>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={rejectionsByStage}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="stage" stroke="var(--color-muted-foreground)" fontSize={12} />
              <YAxis stroke="var(--color-muted-foreground)" fontSize={12} />
              <Tooltip />
              <Bar dataKey="count" fill="rgb(239, 68, 68)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* AI Insights */}
      <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/5 border border-border">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
            <Lightbulb className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="mb-2">Key Insights</h3>
            <p className="text-muted-foreground text-sm">
              AI-powered analysis of your rejection patterns and actionable recommendations
            </p>
          </div>
        </div>
        <div className="space-y-4">
          {[
            {
              title: 'Experience Level Mismatch',
              description: '35% of rejections cite insufficient years of experience. Consider highlighting relevant projects to demonstrate practical expertise.',
            },
            {
              title: 'Design Systems Knowledge',
              description: 'Rejections often mention lacking design system experience. This aligns with your skill gap analysis - prioritize learning this skill.',
            },
            {
              title: 'Portfolio Optimization',
              description: 'Applications with linked portfolio have 40% lower rejection rate. Ensure your portfolio showcases relevant case studies.',
            },
          ].map((insight, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-card border border-border">
              <h4 className="mb-2">{insight.title}</h4>
              <p className="text-sm text-muted-foreground">{insight.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Rejections */}
      <div className="p-8 rounded-3xl bg-card border border-border">
        <h3 className="mb-6">Recent Rejections</h3>
        <div className="space-y-4">
          {[
            { company: 'Notion', role: 'Design Lead', reason: 'Experience mismatch', date: '2024-05-18', feedback: 'Looking for 8+ years, had 5 years' },
            { company: 'Atlassian', role: 'Senior Designer', reason: 'Skill gap', date: '2024-05-10', feedback: 'Wanted stronger design system experience' },
            { company: 'Shopify', role: 'Product Designer', reason: 'Culture fit', date: '2024-05-05', feedback: 'Team looking for different collaboration style' },
          ].map((rejection, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-accent/30">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                <div>
                  <h4 className="font-medium">{rejection.company}</h4>
                  <div className="text-sm text-muted-foreground">{rejection.role}</div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-2 py-1 rounded-md bg-red-500/10 text-red-500 text-xs">
                    {rejection.reason}
                  </span>
                  <span className="text-xs text-muted-foreground">{rejection.date}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic">"{rejection.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
