
'use client';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarSeparator,
  SidebarMenuBadge,
  useSidebar,
} from '@/components/ui/sidebar';
import {
  LayoutDashboard,
  MessageSquare,
  Bell,
  Settings,
  HelpCircle,
  Moon,
  Paintbrush,
  ChevronsUpDown,
  Search,
  BookCopy,
  Video,
  Users,
  FolderKanban,
  TrendingUp,
  BrainCircuit,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Logo } from '../Logo';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card, CardContent } from '../ui/card';

const menuItems = [
  { href: '/app/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/app/study', label: 'Study Panel', icon: BrainCircuit },
  { href: '/app/live-classes', label: 'Live Classes', icon: Video },
  { href: '/app/forums', label: 'Forums', icon: Users },
  { href: '/app/resources', label: 'Resources', icon: FolderKanban },
  { href: '/app/progress', label: 'Progress', icon: TrendingUp },
];

const preferencesItems = [
  { href: '#', label: 'Preferences', icon: Settings },
  { href: '#', label: 'Dark mode', icon: Moon },
  { href: '#', label: 'Themes', icon: Paintbrush },
  { href: '#', label: 'Help', icon: HelpCircle },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { state: sidebarState } = useSidebar();
  const isActive = (href: string) =>
    pathname.startsWith(href) && (href !== '/app' || pathname === href);

  return (
    <Sidebar>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <div className="flex flex-col gap-2 p-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground group-data-[collapsible=icon]:hidden" />
            <span className="absolute right-2.5 top-1.5 text-xs text-muted-foreground group-data-[collapsible=icon]:hidden">
              ⌘K
            </span>
            <Input
              placeholder="Quick search..."
              className="bg-transparent pl-8 group-data-[collapsible=icon]:hidden"
            />
             <div className="hidden group-data-[collapsible=icon]:block">
                 <SidebarMenuButton size="icon" variant="ghost" tooltip="Quick Search">
                    <Search />
                </SidebarMenuButton>
            </div>
          </div>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                href="/app/messages"
                isActive={isActive('/app/messages')}
                tooltip="Inbox"
              >
                <MessageSquare />
                <span>Inbox</span>
              </SidebarMenuButton>
              <SidebarMenuBadge>12</SidebarMenuBadge>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="#" tooltip="Notifications">
                <Bell />
                <span>Notifications</span>
              </SidebarMenuButton>
              <SidebarMenuBadge>15+</SidebarMenuBadge>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
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
        </SidebarGroup>
        
        <div className="flex-grow" />

        <div className="p-2 hidden group-data-[collapsible=icon]:block">
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton size="icon" variant="ghost" className="bg-accent/20 text-accent hover:bg-accent/30 hover:text-accent">
                        <TrendingUp/>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </div>

        <div className="p-2 group-data-[collapsible=icon]:hidden">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-3 text-center">
              <p className="text-sm font-semibold">Current plan: Pro trial</p>
              <p className="text-xs text-muted-foreground mt-1">
                Upgrade to Pro to get the latest and exclusive features
              </p>
              <Button size="sm" className="w-full mt-3">
                Upgrade to Pro
              </Button>
            </CardContent>
          </Card>
        </div>
      </SidebarContent>

      <SidebarFooter>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarMenu>
            {preferencesItems.map((item) => (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton
                  href={item.href}
                  tooltip={item.label}
                  isActive={isActive(item.href)}
                >
                  <item.icon />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarSeparator />
        <div className="p-2">
          <div
            className={
              'flex items-center gap-2 rounded-md p-2 hover:bg-sidebar-accent'
            }
          >
            <Avatar className="h-8 w-8">
              <AvatarImage
                src="https://placehold.co/100x100.png"
                alt="User"
                data-ai-hint="person avatar"
              />
              <AvatarFallback>B</AvatarFallback>
            </Avatar>
            <div className="flex-grow overflow-hidden group-data-[collapsible=icon]:hidden">
              <p className="text-sm font-semibold truncate">Brooklyn</p>
              <p className="text-xs text-muted-foreground truncate">Pro trial</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 group-data-[collapsible=icon]:hidden"
            >
              <ChevronsUpDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
