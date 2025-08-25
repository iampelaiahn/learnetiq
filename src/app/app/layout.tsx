import type { PropsWithChildren } from 'react';
import { AppSidebar } from '@/components/app-shell/AppSidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppHeader } from '@/components/app-shell/AppHeader';

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider>
      <div className="flex">
        <AppSidebar />
        <div className="flex flex-1 flex-col md:ml-16">
          <AppHeader />
          <main className="min-h-[calc(100vh-4rem)] p-4 md:p-8">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
