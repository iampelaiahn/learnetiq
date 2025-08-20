
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

const participants = [
  { name: 'Dr. Reed', avatar: 'https://placehold.co/100x100.png', aiHint: 'woman portrait' },
  { name: 'Bob J.', avatar: 'https://placehold.co/100x100.png', aiHint: 'person portrait' },
  { name: 'Charlie B.', avatar: 'https://placehold.co/100x100.png', aiHint: 'boy portrait' },
  { name: 'You', avatar: 'https://placehold.co/100x100.png', aiHint: 'person avatar' },
];

function SidebarTabs() {
    return (
        <Tabs defaultValue="participants" className="h-full flex flex-col">
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
                    {participants.map((p, i) => (
                        <div key={i} className="flex flex-col items-center gap-2 text-center">
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
            <TabsContent value="chat" className="flex-grow flex flex-col">
            <Card className="flex-grow flex flex-col">
                <CardHeader>
                <CardTitle>Class Chat</CardTitle>
                </CardHeader>
                <ScrollArea className="flex-grow p-4">
                <div className="space-y-4 text-sm">
                    <p><span className="font-semibold">Charlie:</span> Can you explain that again?</p>
                    <p><span className="font-semibold text-primary">You:</span> Yes, I had the same question!</p>
                    <p><span className="font-semibold">Dr. Reed:</span> Absolutely. Let's look at the formula...</p>
                </div>
                </ScrollArea>
                <div className="p-4 border-t">
                    <form className="flex w-full items-center space-x-2">
                    <Button variant="ghost" size="icon" type="button">
                        <Paperclip className="h-5 w-5" />
                        <span className="sr-only">Attach document</span>
                    </Button>
                    <Input placeholder="Type a message..." />
                    <Button type="submit" size="icon">
                        <Send className="h-4 w-4" />
                        <span className="sr-only">Send</span>
                    </Button>
                </form>
                </div>
            </Card>
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
      <div className="lg:col-span-1 h-full">
        <SidebarTabs/>
      </div>
    </div>
  );
}
