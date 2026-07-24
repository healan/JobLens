import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Briefcase, Target, FileText } from 'lucide-react';

export function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const handleComplete = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`flex-1 h-1.5 rounded-full transition-all ${
                  s <= step ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="p-8 lg:p-12 rounded-3xl bg-card border border-border">
          {step === 1 && (
            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6 text-purple-500" />
              </div>
              <h2 className="mb-2">What's your current role?</h2>
              <p className="text-muted-foreground text-sm mb-6">
                Help us personalize your experience
              </p>
              <input
                type="text"
                placeholder="e.g. Senior Software Engineer"
                className="w-full px-4 py-3 rounded-xl bg-input-background border border-border focus:border-primary outline-none transition-colors mb-6"
              />
              <button
                onClick={() => setStep(2)}
                className="w-full py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                Continue
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="mb-2">What roles are you targeting?</h2>
              <p className="text-muted-foreground text-sm mb-6">
                We'll use this to provide better match analysis
              </p>
              <textarea
                placeholder="e.g. Product Manager, UX Designer"
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-input-background border border-border focus:border-primary outline-none transition-colors mb-6 resize-none"
              />
              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 py-3 border border-border rounded-xl hover:bg-accent transition-all"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="flex-1 py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2"
                >
                  Continue
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/10 to-green-500/5 flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-green-500" />
              </div>
              <h2 className="mb-2">Upload your resume</h2>
              <p className="text-muted-foreground text-sm mb-6">
                We'll extract your skills and experience automatically
              </p>
              <div className="border-2 border-dashed border-border rounded-xl p-12 text-center mb-6 hover:border-primary transition-all cursor-pointer">
                <div className="text-muted-foreground">
                  <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p className="text-sm">Drop your resume here or click to browse</p>
                  <p className="text-xs mt-2">PDF, DOC, DOCX up to 5MB</p>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 py-3 border border-border rounded-xl hover:bg-accent transition-all"
                >
                  Back
                </button>
                <button
                  onClick={handleComplete}
                  className="flex-1 py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2"
                >
                  Get started
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
