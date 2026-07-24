import { MessageSquare, Clock, CheckCircle, AlertCircle, Send } from 'lucide-react';

const followUps = [
  { company: 'Stripe', role: 'Senior Product Designer', daysAgo: 2, status: 'urgent', type: 'Interview Thank You' },
  { company: 'Vercel', role: 'Frontend Engineer', daysAgo: 5, status: 'due', type: 'Application Follow-up' },
  { company: 'Linear', role: 'Product Manager', daysAgo: 7, status: 'overdue', type: 'Screening Follow-up' },
  { company: 'Figma', role: 'UX Researcher', daysAgo: 14, status: 'completed', type: 'Application Submitted' },
];

export function FollowUpCenter() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="mb-1">Follow-Up Center</h1>
        <p className="text-muted-foreground text-sm">Never miss an important follow-up with AI-powered reminders</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <div className="p-6 rounded-3xl bg-card border border-border">
          <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
            <AlertCircle className="w-5 h-5 text-red-500" />
          </div>
          <div className="text-3xl font-semibold mb-1">3</div>
          <div className="text-sm text-muted-foreground">Urgent Follow-ups</div>
        </div>

        <div className="p-6 rounded-3xl bg-card border border-border">
          <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-4">
            <Clock className="w-5 h-5 text-yellow-500" />
          </div>
          <div className="text-3xl font-semibold mb-1">5</div>
          <div className="text-sm text-muted-foreground">Due This Week</div>
        </div>

        <div className="p-6 rounded-3xl bg-card border border-border">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
            <MessageSquare className="w-5 h-5 text-blue-500" />
          </div>
          <div className="text-3xl font-semibold mb-1">12</div>
          <div className="text-sm text-muted-foreground">Total Pending</div>
        </div>

        <div className="p-6 rounded-3xl bg-card border border-border">
          <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
            <CheckCircle className="w-5 h-5 text-green-500" />
          </div>
          <div className="text-3xl font-semibold mb-1">28</div>
          <div className="text-sm text-muted-foreground">Completed</div>
        </div>
      </div>

      {/* Follow-up List */}
      <div className="p-8 rounded-3xl bg-card border border-border">
        <div className="flex items-center justify-between mb-6">
          <h3>Pending Follow-ups</h3>
          <button className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-all">
            Mark All Read
          </button>
        </div>
        <div className="space-y-4">
          {followUps.map((followUp, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-xl transition-all ${
                followUp.status === 'urgent'
                  ? 'bg-red-500/5 border-2 border-red-500/20'
                  : followUp.status === 'overdue'
                  ? 'bg-yellow-500/5 border-2 border-yellow-500/20'
                  : followUp.status === 'completed'
                  ? 'bg-accent/30 opacity-60'
                  : 'bg-accent/30'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-medium">{followUp.company}</h4>
                    <span
                      className={`px-2 py-1 rounded-md text-xs ${
                        followUp.status === 'urgent'
                          ? 'bg-red-500/10 text-red-500'
                          : followUp.status === 'overdue'
                          ? 'bg-yellow-500/10 text-yellow-500'
                          : followUp.status === 'completed'
                          ? 'bg-green-500/10 text-green-500'
                          : 'bg-blue-500/10 text-blue-500'
                      }`}
                    >
                      {followUp.status}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">{followUp.role}</div>
                  <div className="text-xs text-muted-foreground">
                    {followUp.type} • {followUp.daysAgo} days ago
                  </div>
                </div>
                <div className="flex gap-3">
                  {followUp.status !== 'completed' && (
                    <>
                      <button className="px-4 py-2 border border-border rounded-xl hover:bg-accent transition-all text-sm">
                        Snooze
                      </button>
                      <button className="px-4 py-2 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-all flex items-center gap-2 text-sm">
                        <Send className="w-4 h-4" />
                        Send
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Suggested Templates */}
      <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 to-blue-600/10 border border-border">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center flex-shrink-0">
            <MessageSquare className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="mb-2">AI-Generated Templates</h3>
            <p className="text-muted-foreground text-sm">
              Get personalized follow-up email templates based on your application stage and timing
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { type: 'Thank You', description: 'Post-interview gratitude' },
            { type: 'Check-in', description: 'Application status inquiry' },
            { type: 'Value Add', description: 'Share relevant work samples' },
          ].map((template, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all cursor-pointer">
              <h4 className="mb-1">{template.type}</h4>
              <p className="text-xs text-muted-foreground">{template.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
