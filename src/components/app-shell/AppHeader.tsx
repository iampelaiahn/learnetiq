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
    { id: 'adv-english', title: 'English for career advancement' },
    { id: 'first-steps-chinese', title: 'First steps in Chinese' },
    { id: 'managing-class', title: 'English Teaching: managing the class' },
    { id: 'american-english', title: 'Pronunciation of American English' },
    { id: 'basic-spanish', title: 'Basic Spanish for Travelers' },
    { id: 'french-pastry', title: 'Introduction to French Pastry' }
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
