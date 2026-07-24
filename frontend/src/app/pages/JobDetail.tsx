import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Building, DollarSign, MapPin, Calendar, ExternalLink, Target, TrendingUp, MessageSquare } from 'lucide-react';

export function JobDetail() {
  const { id } = useParams();

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Back Button */}
        <Link
          to="/applications"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to applications
        </Link>

        {/* Header */}
        <div className="p-8 rounded-3xl bg-card border border-border">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="mb-0">Senior Product Designer</h1>
                  <p className="text-muted-foreground text-sm">Stripe</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  $140k - $180k
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  San Francisco, CA (Remote)
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Applied May 30, 2024
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="px-6 py-3 border border-border rounded-xl hover:bg-accent transition-all flex items-center justify-center gap-2">
                <ExternalLink className="w-5 h-5" />
                View Posting
              </button>
              <div className="px-6 py-3 rounded-xl bg-green-500/10 text-green-500 flex items-center justify-center gap-2">
                Interview Scheduled
              </div>
            </div>
          </div>
        </div>

        {/* AI Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-card border border-border">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
              <Target className="w-5 h-5 text-purple-500" />
            </div>
            <div className="text-3xl font-semibold mb-1">92%</div>
            <div className="text-sm text-muted-foreground">Match Score</div>
          </div>

          <div className="p-6 rounded-3xl bg-card border border-border">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
              <TrendingUp className="w-5 h-5 text-blue-500" />
            </div>
            <div className="text-3xl font-semibold mb-1">3</div>
            <div className="text-sm text-muted-foreground">Skill Gaps</div>
          </div>

          <div className="p-6 rounded-3xl bg-card border border-border">
            <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
              <MessageSquare className="w-5 h-5 text-green-500" />
            </div>
            <div className="text-3xl font-semibold mb-1">5</div>
            <div className="text-sm text-muted-foreground">Follow-ups</div>
          </div>
        </div>

        {/* Match Analysis */}
        <div className="p-8 rounded-3xl bg-card border border-border">
          <h2 className="mb-6">AI Match Analysis</h2>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Technical Skills</span>
                <span className="text-sm font-medium">95%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-green-500" style={{ width: '95%' }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Experience Level</span>
                <span className="text-sm font-medium">90%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-green-500" style={{ width: '90%' }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Domain Knowledge</span>
                <span className="text-sm font-medium">88%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-blue-500" style={{ width: '88%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="p-8 rounded-3xl bg-card border border-border">
          <h2 className="mb-6">Application Timeline</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-green-500" />
              </div>
              <div>
                <div className="font-medium mb-1">Interview Scheduled</div>
                <div className="text-sm text-muted-foreground mb-2">June 5, 2024 at 10:00 AM</div>
                <div className="text-sm">Video call with hiring manager - 45 minutes</div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
              </div>
              <div>
                <div className="font-medium mb-1">Screening Call</div>
                <div className="text-sm text-muted-foreground mb-2">June 1, 2024</div>
                <div className="text-sm">30-minute phone screen with recruiter</div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-muted-foreground" />
              </div>
              <div>
                <div className="font-medium mb-1">Application Submitted</div>
                <div className="text-sm text-muted-foreground">May 30, 2024</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
