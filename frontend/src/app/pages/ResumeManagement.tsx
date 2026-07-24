import { FileText, Upload, Download, Edit, Trash, Plus, Eye } from 'lucide-react';

export function ResumeManagement() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="mb-1">Resume Management</h1>
          <p className="text-muted-foreground text-sm">Manage and optimize your resumes for different roles</p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-all">
          <Plus className="w-5 h-5" />
          Upload Resume
        </button>
      </div>

      {/* Upload Area */}
      <div className="p-12 rounded-3xl border-2 border-dashed border-border bg-accent/20 hover:border-primary transition-all cursor-pointer text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
          <Upload className="w-8 h-8 text-white" />
        </div>
        <h3 className="mb-2">Upload a new resume</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Drag and drop or click to browse
        </p>
        <p className="text-xs text-muted-foreground">PDF, DOC, DOCX up to 5MB</p>
      </div>

      {/* Resume List */}
      <div className="space-y-4">
        {[
          {
            name: 'Product_Designer_Resume_2024.pdf',
            role: 'Product Design Roles',
            uploaded: 'May 30, 2024',
            size: '2.4 MB',
            primary: true,
            applications: 12,
          },
          {
            name: 'UX_Researcher_Resume.pdf',
            role: 'Research Roles',
            uploaded: 'May 15, 2024',
            size: '1.8 MB',
            primary: false,
            applications: 5,
          },
          {
            name: 'Design_Lead_Resume.pdf',
            role: 'Leadership Roles',
            uploaded: 'April 28, 2024',
            size: '2.1 MB',
            primary: false,
            applications: 8,
          },
        ].map((resume, idx) => (
          <div key={idx} className="p-6 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <h4 className="font-medium truncate">{resume.name}</h4>
                  {resume.primary && (
                    <span className="px-2 py-0.5 rounded-md bg-green-500/10 text-green-500 text-xs whitespace-nowrap">
                      Primary
                    </span>
                  )}
                </div>
                <div className="text-sm text-muted-foreground mb-2">{resume.role}</div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span>{resume.size}</span>
                  <span>•</span>
                  <span>Uploaded {resume.uploaded}</span>
                  <span>•</span>
                  <span>Used in {resume.applications} applications</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <button className="p-2.5 rounded-xl border border-border hover:bg-accent transition-all">
                  <Eye className="w-5 h-5" />
                </button>
                <button className="p-2.5 rounded-xl border border-border hover:bg-accent transition-all">
                  <Download className="w-5 h-5" />
                </button>
                <button className="p-2.5 rounded-xl border border-border hover:bg-accent transition-all">
                  <Edit className="w-5 h-5" />
                </button>
                <button className="p-2.5 rounded-xl border border-border hover:bg-red-500/10 hover:border-red-500/20 transition-all text-red-500">
                  <Trash className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* AI Optimization */}
      <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 to-blue-600/10 border border-border">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center flex-shrink-0">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="mb-2">AI Resume Optimization</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Get AI-powered suggestions to improve your resume for specific job postings. We'll analyze keywords, formatting, and content to maximize your ATS score.
            </p>
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-all">
              Optimize Resume
            </button>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="p-8 rounded-3xl bg-card border border-border">
        <h3 className="mb-4">Resume Tips</h3>
        <div className="space-y-3 text-sm text-muted-foreground">
          <div className="flex gap-3">
            <span className="text-primary">•</span>
            <span>Tailor your resume for each role to highlight relevant experience and skills</span>
          </div>
          <div className="flex gap-3">
            <span className="text-primary">•</span>
            <span>Use action verbs and quantify achievements with metrics when possible</span>
          </div>
          <div className="flex gap-3">
            <span className="text-primary">•</span>
            <span>Keep formatting simple and ATS-friendly - avoid complex layouts and graphics</span>
          </div>
          <div className="flex gap-3">
            <span className="text-primary">•</span>
            <span>Match keywords from the job description to improve your match score</span>
          </div>
        </div>
      </div>
    </div>
  );
}
