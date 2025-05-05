'use client';

import { SignOutButton, useUser } from '@clerk/nextjs';
import { LogOut, Settings, User } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const { user } = useUser();

  return (
    <div className="flex min-h-screen bg-[var(--background)]">
      {/* Sidebar */}
      <aside className="w-64 bg-[var(--card)] border-r border-[var(--border)] flex flex-col">
        <nav className="flex-1 p-4 space-y-2">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 p-2 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--primary)] hover:text-white rounded-md transition-colors duration-200"
          >
            <User className="h-5 w-5" />
            Profile
          </Link>
          <Link
            href="/dashboard/settings"
            className="flex items-center gap-2 p-2 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--primary)] hover:text-white rounded-md transition-colors duration-200"
          >
            <Settings className="h-5 w-5" />
            Settings
          </Link>
          <SignOutButton>
            <button className="flex items-center gap-2 p-2 w-full text-sm font-medium text-[var(--foreground)] hover:bg-[var(--primary)] hover:text-white rounded-md transition-colors duration-200">
              <LogOut className="h-5 w-5" />
              Sign Out
            </button>
          </SignOutButton>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-[var(--foreground)] mb-4">
            Welcome, {user?.firstName || user?.emailAddresses[0].emailAddress}!
          </h1>
          <p className="text-lg text-[var(--foreground)]">
            This is your dashboard. Use the sidebar to navigate through your
            profile and settings.
          </p>
        </div>
      </main>
    </div>
  );
}
