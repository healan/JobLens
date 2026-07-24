import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building, Briefcase, DollarSign, Link as LinkIcon, FileText, ArrowRight } from 'lucide-react';

export function CreateApplication() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    company: '',
    role: '',
    salary: '',
    url: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/applications');
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-1">Create Application</h1>
          <p className="text-muted-foreground text-sm">Add a new job application to track</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="p-8 rounded-3xl bg-card border border-border space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2">Company Name</label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Stripe"
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-input-background border border-border focus:border-primary outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2">Job Title</label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder="e.g. Senior Product Designer"
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-input-background border border-border focus:border-primary outline-none transition-colors"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2">Salary Range</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={formData.salary}
                    onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                    placeholder="e.g. $120k - $160k"
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-input-background border border-border focus:border-primary outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2">Job Posting URL</label>
                <div className="relative">
                  <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="url"
                    value={formData.url}
                    onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                    placeholder="https://..."
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-input-background border border-border focus:border-primary outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2">Job Description</label>
              <div className="relative">
                <FileText className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Paste the job description here for AI match analysis..."
                  rows={8}
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-input-background border border-border focus:border-primary outline-none transition-colors resize-none"
                />
              </div>
            </div>
          </div>

          {/* AI Analysis Preview */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-purple-500/10 to-blue-600/10 border border-border">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="mb-1">AI Match Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Once you submit, we'll analyze this job against your profile and provide a detailed match score with skill gap insights.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="flex-1 py-3 border border-border rounded-xl hover:bg-accent transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              Create Application
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
