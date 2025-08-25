
'use client';
import { SidebarTrigger } from '../ui/sidebar';
import { UserNav } from './UserNav';
import { ThemeToggle } from '../ThemeToggle';

export function AppHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <SidebarTrigger />
      <div className="flex flex-1 items-center justify-end gap-4">
        <ThemeToggle />
        <UserNav />
      </div>
    </header>
  );
}
