
'use client';

import type { PropsWithChildren } from 'react';
import { AppSidebar } from '@/components/app-shell/AppSidebar';
import { SidebarProvider, useSidebar } from '@/components/ui/sidebar';
import { AppHeader } from '@/components/app-shell/AppHeader';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { SchoolHeader } from '@/components/app-shell/SchoolHeader';

function AppContent({ children }: PropsWithChildren) {
  const { state } = useSidebar();
  const isMobile = useIsMobile();
  
  const marginLeft = isMobile ? '0' : state === 'expanded' ? '16rem' : '4rem';

  return (
    <div 
      className="flex flex-1 flex-col transition-[margin-left] duration-300 ease-in-out"
      style={{ marginLeft }}
    >
      <AppHeader />
      <main className="min-h-[calc(100vh-4rem)] p-4 md:p-8">
        <SchoolHeader />
        <div className="mt-8">
            {children}
        </div>
      </main>
    </div>
  );
}


export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider>
      <div className="flex">
        <AppSidebar />
        <AppContent>{children}</AppContent>
      </div>
    </SidebarProvider>
  );
}
