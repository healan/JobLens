import { User, Mail, Phone, MapPin, Briefcase, Award, Edit } from 'lucide-react';

export function Profile() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="mb-1">Profile</h1>
            <p className="text-muted-foreground text-sm">Manage your professional information</p>
          </div>
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-all flex items-center gap-2">
            <Edit className="w-5 h-5" />
            Edit Profile
          </button>
        </div>

        {/* Profile Card */}
        <div className="p-8 rounded-3xl bg-card border border-border">
          <div className="flex flex-col sm:flex-row gap-6 mb-8">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center flex-shrink-0">
              <User className="w-12 h-12 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="mb-2">Sarah Johnson</h2>
              <div className="text-muted-foreground mb-4">Senior Product Designer</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-lg bg-purple-500/10 text-purple-500 text-sm">Product Design</span>
                <span className="px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-500 text-sm">UI/UX</span>
                <span className="px-3 py-1.5 rounded-lg bg-green-500/10 text-green-500 text-sm">Design Systems</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <Mail className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-1">Email</div>
                <div className="text-sm">sarah.johnson@email.com</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <Phone className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-1">Phone</div>
                <div className="text-sm">+1 (555) 123-4567</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <MapPin className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-1">Location</div>
                <div className="text-sm">San Francisco, CA</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-1">Experience</div>
                <div className="text-sm">5 years</div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="p-8 rounded-3xl bg-card border border-border">
          <h3 className="mb-6">Work Experience</h3>
          <div className="space-y-6">
            {[
              {
                company: 'TechCorp',
                role: 'Senior Product Designer',
                period: '2022 - Present',
                description: 'Led design system initiatives and managed a team of 3 designers.',
              },
              {
                company: 'DesignStudio',
                role: 'Product Designer',
                period: '2019 - 2022',
                description: 'Designed user experiences for B2B SaaS products.',
              },
            ].map((exp, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="mb-1">{exp.role}</h4>
                  <div className="text-sm text-muted-foreground mb-2">
                    {exp.company} • {exp.period}
                  </div>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="p-8 rounded-3xl bg-card border border-border">
          <h3 className="mb-6">Skills & Expertise</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h4 className="mb-4">Design Tools</h4>
              <div className="space-y-3">
                {[
                  { name: 'Figma', level: 95 },
                  { name: 'Sketch', level: 85 },
                  { name: 'Adobe XD', level: 80 },
                ].map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-4">Technical Skills</h4>
              <div className="space-y-3">
                {[
                  { name: 'React', level: 88 },
                  { name: 'TypeScript', level: 85 },
                  { name: 'CSS/Tailwind', level: 90 },
                ].map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="p-8 rounded-3xl bg-card border border-border">
          <h3 className="mb-6">Certifications & Achievements</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Google UX Design Certificate', year: '2023' },
              { title: 'Certified Scrum Product Owner', year: '2022' },
              { title: 'Design Thinking Specialization', year: '2021' },
              { title: 'Interaction Design Foundation', year: '2020' },
            ].map((cert, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-accent/30">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-medium text-sm">{cert.title}</div>
                  <div className="text-xs text-muted-foreground">{cert.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
