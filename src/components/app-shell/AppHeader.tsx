'use client';
import { Input } from '../ui/input';
import { SidebarTrigger, useSidebar } from '../ui/sidebar';
import { Search } from 'lucide-react';
import { UserNav } from './UserNav';
import { Logo } from '../Logo';
import { useIsMobile } from '@/hooks/use-mobile';
import { ThemeToggle } from '../ThemeToggle';
import { cn } from '@/lib/utils';

export function AppHeader() {
  const { state: sidebarState } = useSidebar();
  const isMobile = useIsMobile();

  const isSidebarCollapsed = sidebarState === 'collapsed';

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <div
        className={cn('flex items-center gap-2', {
          'md:hidden': !isSidebarCollapsed,
        })}
      >
        <Logo />
      </div>
      <div className="hidden md:block">
        <SidebarTrigger />
      </div>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
        <ThemeToggle />
        <UserNav />
      </div>
      <div className="md:hidden">
        <SidebarTrigger />
      </div>
    </header>
  );
}
