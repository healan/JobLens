import { Target, TrendingUp, Award, AlertCircle } from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

const radarData = [
  { skill: 'React', current: 95, required: 90 },
  { skill: 'TypeScript', current: 88, required: 85 },
  { skill: 'Design Systems', current: 92, required: 95 },
  { skill: 'Figma', current: 85, required: 90 },
  { skill: 'Leadership', current: 78, required: 85 },
  { skill: 'Communication', current: 90, required: 85 },
];

export function AIMatchAnalysis() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="mb-1">AI Match Analysis</h1>
        <p className="text-muted-foreground text-sm">See how your profile matches job requirements</p>
      </div>

      {/* Overall Score */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 to-blue-600/10 border border-border lg:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="mb-0">Overall Match Score</h2>
              <p className="text-sm text-muted-foreground">Based on your profile and target roles</p>
            </div>
          </div>
          <div className="text-6xl font-semibold mb-2">87%</div>
          <p className="text-muted-foreground">Strong match for your target positions</p>
        </div>

        <div className="p-8 rounded-3xl bg-card border border-border">
          <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
            <Award className="w-5 h-5 text-green-500" />
          </div>
          <div className="text-3xl font-semibold mb-1">12</div>
          <div className="text-sm text-muted-foreground mb-4">Strong Matches</div>
          <div className="text-xs text-muted-foreground">Applications with 85%+ match score</div>
        </div>
      </div>

      {/* Skill Radar */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-8 rounded-3xl bg-card border border-border">
          <h3 className="mb-6">Skills Comparison</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="var(--color-border)" />
              <PolarAngleAxis dataKey="skill" stroke="var(--color-muted-foreground)" fontSize={12} />
              <PolarRadiusAxis stroke="var(--color-muted-foreground)" fontSize={12} />
              <Radar name="Your Skills" dataKey="current" stroke="rgb(168, 85, 247)" fill="rgb(168, 85, 247)" fillOpacity={0.3} />
              <Radar name="Required" dataKey="required" stroke="rgb(59, 130, 246)" fill="rgb(59, 130, 246)" fillOpacity={0.3} />
            </RadarChart>
          </ResponsiveContainer>
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500" />
              <span className="text-xs text-muted-foreground">Your Skills</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <span className="text-xs text-muted-foreground">Required</span>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-card border border-border">
          <h3 className="mb-6">Detailed Breakdown</h3>
          <div className="space-y-4">
            {radarData.map((item, idx) => {
              const gap = item.required - item.current;
              const isStrong = gap <= 0;
              return (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">{item.skill}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">{item.current}%</span>
                      {isStrong ? (
                        <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center">
                          <Award className="w-3 h-3 text-green-500" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-yellow-500/10 flex items-center justify-center">
                          <AlertCircle className="w-3 h-3 text-yellow-500" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full ${isStrong ? 'bg-green-500' : 'bg-yellow-500'}`}
                      style={{ width: `${(item.current / item.required) * 100}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Top Matches */}
      <div className="p-8 rounded-3xl bg-card border border-border">
        <h3 className="mb-6">Your Top Matches</h3>
        <div className="space-y-4">
          {[
            { company: 'Stripe', role: 'Senior Product Designer', match: 92, skills: ['Figma', 'React', 'Design Systems'] },
            { company: 'Figma', role: 'UX Researcher', match: 90, skills: ['User Research', 'Prototyping', 'Analytics'] },
            { company: 'GitHub', role: 'Senior Engineer', match: 89, skills: ['TypeScript', 'React', 'Node.js'] },
          ].map((job, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-accent/30 hover:bg-accent transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-medium">{job.company}</span>
                    <span className="px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-500 text-xs">
                      {job.match}% match
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">{job.role}</div>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, sidx) => (
                      <span key={sidx} className="px-2 py-1 rounded-md bg-accent text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
