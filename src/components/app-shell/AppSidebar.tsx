
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
  Video,
  Users,
  FolderKanban,
  TrendingUp,
  BrainCircuit,
  GraduationCap,
  FileText,
  Reply,
  Sun,
  Bot,
  UserCog,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Logo } from '../Logo';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card, CardContent } from '../ui/card';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from '../ui/dropdown-menu';
import { useTheme } from 'next-themes';

const studentMenuItems = [
  { href: '/app/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/app/study', label: 'Study Panel', icon: BrainCircuit },
  { href: '/app/live-classes', label: 'Live Classes', icon: Video },
  { href: '/app/forums', label: 'Forums', icon: Users },
  { href: '/app/resources', label: 'Resources', icon: FolderKanban },
  { href: '/app/progress', label: 'Progress', icon: TrendingUp },
];

const tutorMenuItems = [
    { href: '/tutor/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/tutor/students', label: 'My Students', icon: Users },
    { href: '/tutor/courses', label: 'My Courses', icon: FolderKanban },
    { href: '/tutor/live-classes', label: 'Live Classes', icon: Video },
    { href: '/tutor/assignments', label: 'Assignments', icon: FileText },
]

const notifications = [
    {
      id: '1',
      icon: GraduationCap,
      title: 'New grade in Math',
      description: 'You received an A on the calculus quiz.',
      time: '5 min ago',
      read: false,
    },
    {
      id: '2',
      icon: Reply,
      title: 'New reply in CS Forum',
      description: 'js_master replied to your post about React.',
      time: '20 min ago',
      read: false,
    },
    {
      id: '3',
      icon: Video,
      title: 'Live class starting soon',
      description: 'Intro to Quantum Physics with Prof. Finch starts in 15 minutes.',
      time: '1 hour ago',
      read: true,
    },
    {
        id: '4',
        icon: FileText,
        title: 'New resource added',
        description: 'A new PDF has been added to the Physics resources.',
        time: '3 hours ago',
        read: true,
      },
  ];

  const messages = [
    {
        id: '1',
        sender: 'Dr. Evelyn Reed',
        avatar: 'https://placehold.co/100x100.png',
        aiHint: 'woman portrait',
        message: 'Of course, Alex. How can I help with calculus?',
        time: '5 min ago',
        read: false,
    },
    {
        id: '2',
        sender: 'Prof. Finch',
        avatar: 'https://placehold.co/100x100.png',
        aiHint: 'man portrait',
        message: "Don't forget the quiz tomorrow on chapters 1-3.",
        time: '2 hours ago',
        read: true,
    },
    {
        id: '3',
        sender: 'Bob J.',
        avatar: 'https://placehold.co/100x100.png',
        aiHint: 'person portrait',
        message: 'Hey, thanks for sending over the physics notes!',
        time: '1 day ago',
        read: true,
    },
];

function NotificationItem({ notification }: { notification: (typeof notifications)[0] }) {
    return (
        <DropdownMenuItem className="flex items-start gap-3 p-3 cursor-pointer">
            <div className="flex-shrink-0">
                <notification.icon className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="flex-grow">
                <p className="font-semibold">{notification.title}</p>
                <p className="text-sm text-muted-foreground">{notification.description}</p>
                 <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
            </div>
            {!notification.read && <div className="h-2 w-2 rounded-full bg-primary self-center flex-shrink-0"></div>}
        </DropdownMenuItem>
    )
}

function MessageItem({ message }: { message: (typeof messages)[0] }) {
    return (
        <DropdownMenuItem className="flex items-start gap-3 p-3 cursor-pointer">
             <Avatar className="h-9 w-9 flex-shrink-0">
                <AvatarImage src={message.avatar} data-ai-hint={message.aiHint} />
                <AvatarFallback>{message.sender.charAt(0)}</AvatarFallback>
            </Avatar>
             <div className="flex-grow">
                <div className="flex justify-between items-center">
                    <p className="font-semibold">{message.sender}</p>
                    <p className="text-xs text-muted-foreground">{message.time}</p>
                </div>
                <p className="text-sm text-muted-foreground truncate">{message.message}</p>
            </div>
             {!message.read && <div className="h-2 w-2 rounded-full bg-primary self-center flex-shrink-0 ml-2"></div>}
        </DropdownMenuItem>
    )
}


function ThemeMenu() {
    const { setTheme } = useTheme();
  
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuItem>
            <SidebarMenuButton href="#" tooltip="Appearance">
              <Paintbrush />
              <span>Appearance</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" align="start">
          <DropdownMenuItem onClick={() => setTheme('light')}>
            <Sun className="mr-2 h-4 w-4" />
            <span>Light</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('dark')}>
            <Moon className="mr-2 h-4 w-4" />
            <span>Dark</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('system')}>
            <Settings className="mr-2 h-4 w-4" />
            <span>System</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

export function AppSidebar() {
  const pathname = usePathname();
  const { state: sidebarState } = useSidebar();
  const isActive = (href: string) =>
    pathname === href || (pathname.startsWith(href) && href !== '/');

  const isTutor = pathname.startsWith('/tutor');
  const menuItems = isTutor ? tutorMenuItems : studentMenuItems;
  const user = isTutor ? { name: 'Dr. Evelyn Reed', role: 'Tutor' } : { name: 'Alex', role: 'Student' };


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
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <SidebarMenuItem>
                    <SidebarMenuButton
                        href="#"
                        isActive={isActive('/app/messages')}
                        tooltip="Inbox"
                    >
                        <MessageSquare />
                        <span>Inbox</span>
                    </SidebarMenuButton>
                    <SidebarMenuBadge>3</SidebarMenuBadge>
                    </SidebarMenuItem>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-80" side="right" align="start">
                    <div className="p-2 font-semibold">Recent Messages</div>
                    <DropdownMenuSeparator />
                    <div className="max-h-80 overflow-y-auto">
                        {messages.map(m => <MessageItem key={m.id} message={m} />)}
                    </div>
                    <DropdownMenuSeparator />
                    <div className="p-2 text-center">
                        <Button asChild variant="link" className="text-sm">
                            <Link href="/app/messages">Go to Messages</Link>
                        </Button>
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuItem>
                  <SidebarMenuButton href="#" tooltip="Notifications">
                    <Bell />
                    <span>Notifications</span>
                  </SidebarMenuButton>
                  <SidebarMenuBadge>2</SidebarMenuBadge>
                </SidebarMenuItem>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80" side="right" align="start">
                <div className="p-2 font-semibold">Notifications</div>
                <DropdownMenuSeparator />
                <div className="max-h-80 overflow-y-auto">
                    {notifications.map(n => <NotificationItem key={n.id} notification={n} />)}
                </div>
                <DropdownMenuSeparator />
                <div className="p-2 text-center">
                    <Button variant="link" className="text-sm">View all notifications</Button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
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

        {!isTutor && <div className="p-2 group-data-[collapsible=icon]:hidden">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-3 text-center">
                <div className='flex justify-center mb-2'>
                    <Bot className="h-6 w-6 text-accent" />
                </div>
              <p className="text-sm font-semibold">Unlock AI Tutor</p>
              <p className="text-xs text-muted-foreground mt-1">
                Get personalized help with your studies.
              </p>
              <Button size="sm" className="w-full mt-3">
                Upgrade to Pro
              </Button>
            </CardContent>
          </Card>
        </div>}
      </SidebarContent>

      <SidebarFooter>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarMenu>
             <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  href="/app/settings"
                  tooltip="Preferences"
                  isActive={isActive('/app/settings')}
                >
                  <Link href="/app/settings">
                    <Settings />
                    <span>Preferences</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            <ThemeMenu />
             <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  href="#"
                  tooltip="Help"
                  isActive={isActive('/app/help')}
                >
                   <Link href="#">
                    <HelpCircle />
                    <span>Help</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
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
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-grow overflow-hidden group-data-[collapsible=icon]:hidden">
              <p className="text-sm font-semibold truncate">{user.name}</p>
              <p className="text-xs text-muted-foreground truncate">{user.role}</p>
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
