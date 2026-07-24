import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Target, TrendingUp, Brain } from 'lucide-react';

export function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600" />
              <span className="font-semibold text-foreground">JobLens AI</span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                to="/signin"
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-all"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 text-accent-foreground mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">AI-Powered Job Search</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-foreground mb-6 tracking-tight">
              Land your dream job
              <span className="block mb-px leading-[1.15] bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent">
                with AI insights
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Track applications, analyze skill gaps, and get AI-powered recommendations to accelerate your job search.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/signup"
                className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                Start for free
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="w-full sm:w-auto px-8 py-4 border border-border rounded-xl hover:bg-accent transition-all">
                Watch demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="mb-2">AI Match Analysis</h3>
              <p className="text-muted-foreground text-sm">
                Get instant compatibility scores between your profile and job requirements.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="mb-2">Skill Gap Insights</h3>
              <p className="text-muted-foreground text-sm">
                Identify missing skills and get personalized learning recommendations.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/10 to-green-500/5 flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="mb-2">Smart Tracking</h3>
              <p className="text-muted-foreground text-sm">
                Never miss a follow-up with AI-powered reminders and analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-purple-500/10 to-blue-600/10 border border-border text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Ready to accelerate your job search?</h2>
            <p className="text-muted-foreground mb-8">Join thousands of job seekers using AI to land their dream roles.</p>
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-all"
            >
              Get started free
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
