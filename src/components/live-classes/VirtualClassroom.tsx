
'use client';

import * as React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  PhoneOff,
  Maximize,
  Minimize,
  Users,
  MessageSquare,
  Paperclip,
  Send,
  PanelRightOpen,
  X,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { format, isSameDay, parseISO } from 'date-fns';

const participants = [
  { id: 'p1', name: 'Dr. Reed', avatar: 'https://placehold.co/100x100.png', aiHint: 'woman portrait' },
  { id: 'p2', name: 'Bob J.', avatar: 'https://placehold.co/100x100.png', aiHint: 'person portrait' },
  { id: 'p3', name: 'Charlie B.', avatar: 'https://placehold.co/100x100.png', aiHint: 'boy portrait' },
  { id: 'p4', name: 'You', avatar: 'https://placehold.co/100x100.png', aiHint: 'person avatar' },
];

type ChatMessage = {
    id: string;
    from: string;
    text: string;
    timestamp: string;
    avatar: string;
    aiHint: string;
};

const initialMessages: ChatMessage[] = [
    { id: 'm1', from: 'Dr. Reed', text: "Hey there! I've been feeling quite overwhelmed lately with work.", timestamp: '2024-04-28T04:15:00', avatar: 'https://placehold.co/100x100.png', aiHint: 'woman portrait' },
    { id: 'm2', from: 'You', text: 'Amante de cinema e viciado em pipoca! 🍿🎬', timestamp: '2024-04-28T08:20:00', avatar: 'https://placehold.co/100x100.png', aiHint: 'person avatar' },
    { id: 'm3', from: 'Dr. Reed', text: 'When will the contract be sent?', timestamp: '2024-04-29T06:15:00', avatar: 'https://placehold.co/100x100.png', aiHint: 'woman portrait' },
    { id: 'm4', from: 'You', text: 'Paperless opt-in email sent', timestamp: '2024-04-29T08:20:00', avatar: 'https://placehold.co/100x100.png', aiHint: 'person avatar' },
]

function TypingIndicator() {
    return (
      <div className="flex items-center space-x-1 p-2">
        <span className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.3s]"></span>
        <span className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.15s]"></span>
        <span className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce"></span>
      </div>
    );
  }

  function SidebarTabs() {
    const [chatMessages, setChatMessages] = React.useState<ChatMessage[]>(initialMessages);
    const [newMessage, setNewMessage] = React.useState('');
    const [isTyping, setIsTyping] = React.useState(false);
    const scrollAreaRef = React.useRef<HTMLDivElement>(null);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (newMessage.trim()) {
            const newId = `m${chatMessages.length + 1}`;
            const newMsg: ChatMessage = {
                id: newId,
                from: 'You',
                text: newMessage,
                timestamp: new Date().toISOString(),
                avatar: 'https://placehold.co/100x100.png',
                aiHint: 'person avatar',
            };
            setChatMessages([...chatMessages, newMsg]);
            setNewMessage('');

            setIsTyping(true);
            setTimeout(() => {
                const response: ChatMessage = {
                    id: `m${chatMessages.length + 2}`,
                    from: 'Dr. Reed',
                    text: "That's a good question! Let's discuss it.",
                    timestamp: new Date().toISOString(),
                    avatar: 'https://placehold.co/100x100.png',
                    aiHint: 'woman portrait',
                };
                 setChatMessages(prev => [...prev, response]);
                 setIsTyping(false);
            }, 2500);
        }
    };
    
    React.useEffect(() => {
        if (scrollAreaRef.current) {
            const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
            if (viewport) {
                viewport.scrollTop = viewport.scrollHeight;
            }
        }
      }, [chatMessages, isTyping]);


    return (
        <Tabs defaultValue="chat" className="h-full flex flex-col">
            <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="participants">
                <Users className="mr-2 h-4 w-4" /> Participants
            </TabsTrigger>
            <TabsTrigger value="chat">
                <MessageSquare className="mr-2 h-4 w-4" /> Chat
            </TabsTrigger>
            </TabsList>

            {/* Participants Tab */}
            <TabsContent value="participants" className="flex-grow">
            <Card className="h-full">
                <CardHeader>
                <CardTitle>Participants ({participants.length})</CardTitle>
                </CardHeader>
                <CardContent>
                <ScrollArea className="h-[calc(100vh-22rem)]">
                    <div className="grid grid-cols-2 gap-4">
                    {participants.map((p) => (
                        <div key={p.id} className="flex flex-col items-center gap-2 text-center">
                        <Avatar className="h-16 w-16">
                            <AvatarImage src={p.avatar} data-ai-hint={p.aiHint}/>
                            <AvatarFallback>{p.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium">{p.name}</span>
                        </div>
                    ))}
                    </div>
                </ScrollArea>
                </CardContent>
            </Card>
            </TabsContent>

            {/* Chat Tab */}
            <TabsContent value="chat" className="flex-grow flex flex-col bg-background/80 rounded-b-lg">
                <ScrollArea className="flex-grow p-4" ref={scrollAreaRef}>
                    <div className="space-y-4">
                        {chatMessages.map((msg, index) => {
                            const showDate = index === 0 || !isSameDay(parseISO(chatMessages[index - 1].timestamp), parseISO(msg.timestamp));
                            const isYou = msg.from === 'You';
                            return (
                                <React.Fragment key={msg.id}>
                                    {showDate && (
                                        <div className="text-center text-xs text-muted-foreground my-4">
                                            {format(parseISO(msg.timestamp), 'MMMM d, yyyy')}
                                        </div>
                                    )}
                                    <div className={cn('flex items-end gap-2', isYou ? 'justify-end' : 'justify-start')}>
                                        {!isYou && (
                                            <Avatar className="h-8 w-8 self-start">
                                                <AvatarImage src={msg.avatar} data-ai-hint={msg.aiHint} />
                                                <AvatarFallback>{msg.from.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                        )}
                                        <div className={cn("max-w-xs rounded-2xl p-3", isYou ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-muted rounded-bl-none')}>
                                            <p className="text-sm">{msg.text}</p>
                                            <p className={cn("text-xs mt-1", isYou ? "text-primary-foreground/70" : "text-muted-foreground/70")}>
                                                {format(parseISO(msg.timestamp), 'hh:mm a')}
                                            </p>
                                        </div>
                                         {isYou && (
                                            <Avatar className="h-8 w-8 self-start">
                                                <AvatarImage src={msg.avatar} data-ai-hint={msg.aiHint} />
                                                <AvatarFallback>Y</AvatarFallback>
                                            </Avatar>
                                        )}
                                    </div>
                                </React.Fragment>
                            )
                        })}
                         {isTyping && (
                            <div className="flex items-end gap-2 justify-start">
                                <Avatar className="h-8 w-8 self-start">
                                    <AvatarImage src="https://placehold.co/40x40.png" data-ai-hint="woman portrait"/>
                                    <AvatarFallback>DR</AvatarFallback>
                                </Avatar>
                                <div className="max-w-xs rounded-2xl p-3 bg-muted rounded-bl-none">
                                    <TypingIndicator />
                                </div>
                            </div>
                         )}
                    </div>
                </ScrollArea>
                <div className="p-4 border-t bg-background rounded-b-lg">
                    <form className="flex w-full items-center space-x-2" onSubmit={handleSendMessage}>
                    <Input 
                        placeholder="Write something..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className="bg-muted border-transparent focus-visible:ring-primary"
                    />
                    <Button type="submit" size="default" className="rounded-lg">
                        Send
                    </Button>
                </form>
                </div>
            </TabsContent>
        </Tabs>
    )
}

function FloatingSidebar() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
            <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-4 right-4 z-20 h-12 w-12 rounded-full text-white bg-black/30 backdrop-blur-sm hover:bg-white/20 hover:text-white"
                onClick={() => setIsOpen(true)}
            >
                <Users className="h-6 w-6" />
            </Button>
            <div className={cn(
                "absolute top-0 right-0 h-full w-[350px] bg-background text-foreground z-30 transition-transform transform",
                isOpen ? "translate-x-0" : "translate-x-full",
                "shadow-lg flex flex-col p-4"
            )}>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold font-headline">Classroom Panel</h2>
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                        <X className="h-5 w-5"/>
                    </Button>
                </div>
                <div className="flex-grow">
                     <SidebarTabs />
                </div>
            </div>
             {isOpen && <div className="absolute inset-0 bg-black/50 z-20" onClick={() => setIsOpen(false)}></div>}
        </>
    )
}


export function VirtualClassroom({ classId }: { classId: string }) {
  const router = useRouter();
  const [isMicOn, setIsMicOn] = React.useState(true);
  const [isVideoOn, setIsVideoOn] = React.useState(true);
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  const videoContainerRef = React.useRef<HTMLDivElement>(null);

  const handleLeaveCall = () => {
    router.push('/app/live-classes');
  };

  const handleMaximize = () => {
    if (!videoContainerRef.current) return;

    if (!document.fullscreenElement) {
      videoContainerRef.current.requestFullscreen().catch((err) => {
        alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  React.useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  const Controls = ({ floating = false }: { floating?: boolean }) => (
     <div
      className={cn(
        'w-full',
        {
          'absolute bottom-4 left-1/2 -translate-x-1/2 z-20 w-auto': floating,
        }
      )}
    >
      <Card
        className={cn(
            'w-full',
            {
                'bg-black/30 backdrop-blur-sm border-white/20 w-auto': floating
            }
        )}
      >
        <CardContent className="p-2 flex items-center justify-center gap-2">
          <Button variant={floating ? "ghost" : "outline"} size="icon" className={cn("h-12 w-12 rounded-full", {"text-white hover:bg-white/20 hover:text-white": floating})} onClick={() => setIsMicOn(!isMicOn)}>
            {isMicOn ? <Mic className="h-6 w-6" /> : <MicOff className="h-6 w-6 text-red-500" />}
          </Button>
          <Button variant={floating ? "ghost" : "outline"} size="icon" className={cn("h-12 w-12 rounded-full", {"text-white hover:bg-white/20 hover:text-white": floating})} onClick={() => setIsVideoOn(!isVideoOn)}>
             {isVideoOn ? <Video className="h-6 w-6" /> : <VideoOff className="h-6 w-6 text-red-500" />}
          </Button>
          <Button variant="destructive" size="icon" className="h-12 w-12 rounded-full mx-4" onClick={handleLeaveCall}>
            <PhoneOff className="h-6 w-6" />
          </Button>
          <Button variant={floating ? "ghost" : "outline"} size="icon" className={cn("h-12 w-12 rounded-full", {"text-white hover:bg-white/20 hover:text-white": floating})} onClick={handleMaximize}>
            {isFullscreen ? <Minimize className="h-6 w-6" /> : <Maximize className="h-6 w-6" />}
          </Button>
        </CardContent>
      </Card>
    </div>
  );


  return (
    <div className="grid h-[calc(100vh-8rem)] grid-cols-1 lg:grid-cols-4 lg:grid-rows-1 gap-4">
      {/* Main Content */}
      <div className="lg:col-span-3 flex flex-col gap-4">
        {/* Main Video */}
        <div ref={videoContainerRef} className="relative flex-grow rounded-lg bg-black overflow-hidden flex items-center justify-center">
          {isVideoOn ? (
            <Image
              src="https://placehold.co/1280x720.png"
              alt="Tutor's video stream"
              fill
              className="w-full h-full object-cover"
              data-ai-hint="video conference"
            />
          ) : (
            <div className="flex flex-col items-center gap-4 text-white">
              <VideoOff className="h-16 w-16" />
              <p>Your video is off</p>
            </div>
          )}
          <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-lg">
            Dr. Evelyn Reed
          </div>
          {isFullscreen && <Controls floating />}
          {isFullscreen && <FloatingSidebar />}
        </div>

        {/* Controls */}
        {!isFullscreen && <Controls />}
      </div>

      {/* Sidebar */}
      <div className={cn("lg:col-span-1 h-full", isFullscreen && "hidden")}>
        <SidebarTabs/>
      </div>
    </div>
  );
}

    