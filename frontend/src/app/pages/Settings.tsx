import { Bell, Shield, Globe, CreditCard, User, Mail } from 'lucide-react';

export function Settings() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="mb-1">Settings</h1>
          <p className="text-muted-foreground text-sm">Manage your account preferences and settings</p>
        </div>

        {/* Account Settings */}
        <div className="p-8 rounded-3xl bg-card border border-border">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
              <User className="w-5 h-5 text-purple-500" />
            </div>
            <h3>Account Settings</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-2">Full Name</label>
              <input
                type="text"
                defaultValue="Sarah Johnson"
                className="w-full px-4 py-3 rounded-xl bg-input-background border border-border focus:border-primary outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                defaultValue="sarah.johnson@email.com"
                className="w-full px-4 py-3 rounded-xl bg-input-background border border-border focus:border-primary outline-none transition-colors"
              />
            </div>
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-all">
              Save Changes
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div className="p-8 rounded-3xl bg-card border border-border">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <Bell className="w-5 h-5 text-blue-500" />
            </div>
            <h3>Notifications</h3>
          </div>
          <div className="space-y-4">
            {[
              { title: 'Email Notifications', description: 'Receive email updates about your applications' },
              { title: 'Follow-up Reminders', description: 'Get reminded when to follow up on applications' },
              { title: 'Match Alerts', description: 'Notify when a job matches your profile' },
              { title: 'Weekly Summary', description: 'Receive a weekly digest of your job search activity' },
            ].map((setting, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-accent/30">
                <div>
                  <div className="font-medium text-sm mb-1">{setting.title}</div>
                  <div className="text-xs text-muted-foreground">{setting.description}</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy & Security */}
        <div className="p-8 rounded-3xl bg-card border border-border">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-green-500" />
            </div>
            <h3>Privacy & Security</h3>
          </div>
          <div className="space-y-3">
            <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-accent transition-all">
              Change Password
            </button>
            <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-accent transition-all">
              Two-Factor Authentication
            </button>
            <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-accent transition-all">
              Connected Apps
            </button>
            <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-accent transition-all">
              Download Your Data
            </button>
          </div>
        </div>

        {/* Preferences */}
        <div className="p-8 rounded-3xl bg-card border border-border">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center">
              <Globe className="w-5 h-5 text-yellow-500" />
            </div>
            <h3>Preferences</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-2">Language</label>
              <select className="w-full px-4 py-3 rounded-xl bg-input-background border border-border focus:border-primary outline-none transition-colors">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-2">Timezone</label>
              <select className="w-full px-4 py-3 rounded-xl bg-input-background border border-border focus:border-primary outline-none transition-colors">
                <option>Pacific Time (PT)</option>
                <option>Eastern Time (ET)</option>
                <option>Central European Time (CET)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Billing */}
        <div className="p-8 rounded-3xl bg-card border border-border">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-red-500" />
            </div>
            <h3>Billing & Plan</h3>
          </div>
          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-600/10 mb-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="font-semibold mb-1">Pro Plan</div>
                <div className="text-sm text-muted-foreground">$29/month • Billed monthly</div>
              </div>
              <button className="px-4 py-2 border border-border rounded-xl hover:bg-accent transition-all text-sm">
                Change Plan
              </button>
            </div>
            <div className="text-xs text-muted-foreground">Next billing date: June 15, 2024</div>
          </div>
          <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            View billing history
          </button>
        </div>

        {/* Danger Zone */}
        <div className="p-8 rounded-3xl bg-red-500/5 border-2 border-red-500/20">
          <h3 className="mb-4 text-red-500">Danger Zone</h3>
          <div className="space-y-3">
            <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-red-500/10 transition-all text-red-500">
              Deactivate Account
            </button>
            <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-red-500/10 transition-all text-red-500">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
