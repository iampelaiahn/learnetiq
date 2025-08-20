'use client';
import { SidebarTrigger, useSidebar } from '../ui/sidebar';
import { UserNav } from './UserNav';
import { Logo } from '../Logo';
import { useIsMobile } from '@/hooks/use-mobile';
import { ThemeToggle } from '../ThemeToggle';
import { cn } from '@/lib/utils';
import { CourseCombobox } from '../courses/CourseCombobox';

// Simplified course data for the header combobox
const coursesData = [
    { id: 'career-dev', title: 'English for career development' },
    { id: 'calculus-101', title: 'Calculus 101' },
    { id: 'physics-fundamentals', title: 'Fundamentals of Physics' },
    { id: 'world-history', title: 'World History: Ancient Civilizations' },
    { id: 'intro-chemistry', title: 'Introduction to Chemistry' },
    { id: 'cellular-biology', title: 'Cellular Biology' },
    { id: 'beginner-shona', title: 'Beginner Shona' },
    { id: 'french-pastry', title: 'Introduction to French Pastry' },
    { id: 'accounting-principles', title: 'Principles of Accounting' },
    { id: 'intro-commerce', title: 'Introduction to Commerce' }
];

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
            <CourseCombobox courses={coursesData}/>
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
