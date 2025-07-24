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
  BookOpen,
  MessageSquare,
  BarChart2,
  Video,
  Users,
  LifeBuoy,
  LogOut,
  Settings,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Logo } from '../Logo';
import { Separator } from '../ui/separator';

const menuItems = [
  { href: '/app/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/app/resources', label: 'Resources', icon: BookOpen },
  { href: '/app/forums', label: 'Forums', icon: Users },
  { href: '/app/messages', label: 'Messages', icon: MessageSquare },
  { href: '/app/progress', label: 'Progress', icon: BarChart2 },
  { href: '/app/live-classes', label: 'Live Classes', icon: Video },
];

export function AppSidebar() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <Sidebar>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={isActive(item.href)}
                tooltip={item.label}
              >
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <Separator className="my-2"/>
         <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Settings">
                    <Link href="#">
                        <Settings />
                        <span>Settings</span>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Support">
                    <Link href="#">
                        <LifeBuoy />
                        <span>Support</span>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Logout">
                    <Link href="/">
                        <LogOut />
                        <span>Logout</span>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
         </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
