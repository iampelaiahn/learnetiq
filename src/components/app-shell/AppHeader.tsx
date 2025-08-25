'use client';
import { SidebarTrigger } from '../ui/sidebar';
import { UserNav } from './UserNav';
import { ThemeToggle } from '../ThemeToggle';

export function AppHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
      </div>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <div className="ml-auto flex-1 sm:flex-initial" />
        <ThemeToggle />
        <UserNav />
      </div>
    </header>
  );
}
