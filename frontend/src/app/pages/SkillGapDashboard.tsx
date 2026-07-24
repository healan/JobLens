import { TrendingUp, BookOpen, PlayCircle, Award, Target } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const skillGapData = [
  { skill: 'Figma Advanced', gap: 15, priority: 'high' },
  { skill: 'Design Systems', gap: 8, priority: 'medium' },
  { skill: 'Leadership', gap: 12, priority: 'high' },
  { skill: 'Motion Design', gap: 20, priority: 'medium' },
  { skill: 'User Research', gap: 5, priority: 'low' },
];

const chartData = skillGapData.map(s => ({ name: s.skill, gap: s.gap }));

export function SkillGapDashboard() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="mb-1">Skill Gap Analysis</h1>
        <p className="text-muted-foreground text-sm">Identify and close skill gaps to improve your job prospects</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <div className="p-6 rounded-3xl bg-card border border-border">
          <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
            <Target className="w-5 h-5 text-red-500" />
          </div>
          <div className="text-3xl font-semibold mb-1">5</div>
          <div className="text-sm text-muted-foreground">Skill Gaps Identified</div>
        </div>

        <div className="p-6 rounded-3xl bg-card border border-border">
          <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-4">
            <TrendingUp className="w-5 h-5 text-yellow-500" />
          </div>
          <div className="text-3xl font-semibold mb-1">2</div>
          <div className="text-sm text-muted-foreground">High Priority</div>
        </div>

        <div className="p-6 rounded-3xl bg-card border border-border">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
            <BookOpen className="w-5 h-5 text-blue-500" />
          </div>
          <div className="text-3xl font-semibold mb-1">12</div>
          <div className="text-sm text-muted-foreground">Recommended Courses</div>
        </div>

        <div className="p-6 rounded-3xl bg-card border border-border">
          <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
            <Award className="w-5 h-5 text-green-500" />
          </div>
          <div className="text-3xl font-semibold mb-1">3</div>
          <div className="text-sm text-muted-foreground">Skills Improved</div>
        </div>
      </div>

      {/* Skill Gap Chart */}
      <div className="p-8 rounded-3xl bg-card border border-border">
        <h3 className="mb-6">Skill Gap Overview</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis dataKey="name" stroke="var(--color-muted-foreground)" fontSize={12} />
            <YAxis stroke="var(--color-muted-foreground)" fontSize={12} />
            <Tooltip />
            <Bar dataKey="gap" fill="rgb(239, 68, 68)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Detailed Gaps & Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Skill Gaps */}
        <div className="p-8 rounded-3xl bg-card border border-border">
          <h3 className="mb-6">Identified Gaps</h3>
          <div className="space-y-4">
            {skillGapData.map((gap, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-accent/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{gap.skill}</span>
                  <span
                    className={`px-2 py-1 rounded-md text-xs ${
                      gap.priority === 'high'
                        ? 'bg-red-500/10 text-red-500'
                        : gap.priority === 'medium'
                        ? 'bg-yellow-500/10 text-yellow-500'
                        : 'bg-blue-500/10 text-blue-500'
                    }`}
                  >
                    {gap.priority} priority
                  </span>
                </div>
                <div className="text-sm text-muted-foreground mb-2">{gap.gap}% gap from target level</div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-red-500" style={{ width: `${gap.gap}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Recommendations */}
        <div className="p-8 rounded-3xl bg-card border border-border">
          <h3 className="mb-6">Recommended Learning</h3>
          <div className="space-y-4">
            {[
              { title: 'Advanced Figma Prototyping', platform: 'Coursera', duration: '4 weeks', skill: 'Figma Advanced' },
              { title: 'Leadership for Tech Leads', platform: 'LinkedIn Learning', duration: '2 weeks', skill: 'Leadership' },
              { title: 'Building Design Systems', platform: 'Udemy', duration: '6 weeks', skill: 'Design Systems' },
            ].map((course, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-accent/30 hover:bg-accent transition-all cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <PlayCircle className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium mb-1">{course.title}</div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <span>{course.platform}</span>
                      <span>•</span>
                      <span>{course.duration}</span>
                    </div>
                    <div className="px-2 py-1 rounded-md bg-purple-500/10 text-purple-500 text-xs inline-block">
                      {course.skill}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Plan */}
      <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 to-blue-600/10 border border-border">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="mb-2">90-Day Learning Plan</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Follow this personalized plan to close your top skill gaps and increase your match score to 95%+
            </p>
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-all">
              Generate Learning Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
