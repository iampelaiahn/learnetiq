import type { PropsWithChildren } from 'react';
import { AppSidebar } from '@/components/app-shell/AppSidebar';
import {
  SidebarProvider,
  SidebarInset,
} from '@/components/ui/sidebar';
import { AppHeader } from '@/components/app-shell/AppHeader';

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <main className="min-h-[calc(100vh-4rem)] p-4 md:p-8">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
