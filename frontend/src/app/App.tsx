import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { RequireAuth } from './components/RequireAuth';
import { Landing } from './pages/Landing';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Onboarding } from './pages/Onboarding';
import { Dashboard } from './pages/Dashboard';
import { Applications } from './pages/Applications';
import { CreateApplication } from './pages/CreateApplication';
import { JobDetail } from './pages/JobDetail';
import { ResumeManagement } from './pages/ResumeManagement';
import { AIMatchAnalysis } from './pages/AIMatchAnalysis';
import { SkillGapDashboard } from './pages/SkillGapDashboard';
import { Analytics } from './pages/Analytics';
import { FollowUpCenter } from './pages/FollowUpCenter';
import { RejectionAnalysis } from './pages/RejectionAnalysis';
import { Profile } from './pages/Profile';
import { Settings } from './pages/Settings';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/onboarding"
          element={
            <RequireAuth>
              <Onboarding />
            </RequireAuth>
          }
        />

        {/* Protected routes with layout */}
        <Route
          element={
            <RequireAuth>
              <Layout />
            </RequireAuth>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/create" element={<CreateApplication />} />
          <Route path="/job/:id" element={<JobDetail />} />
          <Route path="/resumes" element={<ResumeManagement />} />
          <Route path="/match-analysis" element={<AIMatchAnalysis />} />
          <Route path="/skill-gap" element={<SkillGapDashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/follow-up" element={<FollowUpCenter />} />
          <Route path="/rejections" element={<RejectionAnalysis />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* Redirect unknown routes to landing */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
