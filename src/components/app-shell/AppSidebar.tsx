'use client';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from '@/components/ui/sidebar';
import {
  LayoutDashboard,
  MessageSquare,
  Settings,
  LogOut,
  Bell
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const menuItems = [
  { href: '/app/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/app/messages', label: 'Messages', icon: MessageSquare },
  { href: '#', label: 'Notifications', icon: Bell },
  { href: '#', label: 'Settings', icon: Settings },
];

export function AppSidebar() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname.startsWith(href) && (href !== '/app' || pathname === href);

  return (
    <Sidebar variant="floating">
      <SidebarHeader className="items-center">
        <Link href="/app/dashboard" className='block'>
            <Avatar className="h-10 w-10">
              <AvatarImage src="https://placehold.co/100x100.png" alt="User" data-ai-hint="person avatar" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
        </Link>
      </SidebarHeader>
      <SidebarContent className='justify-center'>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href} className="flex justify-center">
              <SidebarMenuButton
                asChild
                size="icon"
                variant='ghost'
                className='h-12 w-12 rounded-lg data-[active=true]:bg-primary/10 data-[active=true]:text-primary hover:bg-primary/10 hover:text-primary'
                isActive={isActive(item.href)}
                tooltip={item.label}
              >
                <Link href={item.href}>
                  <item.icon className="h-6 w-6"/>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className='items-center'>
         <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Logout" size="icon" variant='ghost' className="h-12 w-12 rounded-lg hover:bg-primary/10 hover:text-primary">
                    <Link href="/">
                        <LogOut className="h-6 w-6"/>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
         </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
