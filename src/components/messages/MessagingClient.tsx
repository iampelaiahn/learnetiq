
'use client';
import * as React from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { Search, Send, Paperclip, Phone, Video, MoreVertical, Smile } from 'lucide-react';

const contacts = {
  tutors: [
    { id: 't1', name: 'Dr. Evelyn Reed', avatar: 'https://placehold.co/40x40.png', aiHint: 'woman portrait', lastMessage: 'Of course, Alex. How can I help?', timestamp: '2:45pm' },
    { id: 't2', name: 'Prof. Finch', avatar: 'https://placehold.co/40x40.png', aiHint: 'man portrait', lastMessage: 'See you in class tomorrow.', timestamp: 'Yesterday', unread: 1 },
  ],
  peers: [
    { id: 'p1', name: 'Bob Johnson', avatar: 'https://placehold.co/40x40.png', aiHint: 'person portrait', lastMessage: 'Thanks for the notes!', timestamp: '10:30am'},
    { id: 'p2', name: 'Charlie Brown', avatar: 'https://placehold.co/40x40.png', aiHint: 'boy portrait', lastMessage: 'Almost! Just putting the final touches on it.', timestamp: 'Yesterday' },
  ],
};

const initialMessages = {
  t1: [
    { from: 'me', text: 'Hi Dr. Reed, I have a question about calculus.' },
    { from: 'them', text: 'Of course, Alex. How can I help?' },
  ],
  t2: [
    { from: 'them', text: 'Reminder: Quiz tomorrow on chapters 1-3.' },
    { from: 'me', text: 'Thanks for the heads up, Professor!' },
    { from: 'them', text: 'See you in class tomorrow.' },
  ],
  p1: [
    { from: 'them', text: 'Hey, do you have the notes from todays physics lecture?' },
    { from: 'me', text: 'Yep, sending them over now.' },
    { from: 'them', text: 'Thanks for the notes!' },
  ],
  p2: [
    { from: 'them', text: 'Hey, did you finish the history assignment?' },
    { from: 'me', text: 'Almost! Just putting the final touches on it.' },
  ],
};

type Contact = (typeof contacts.tutors)[0] | (typeof contacts.peers)[0];
type Message = { from: 'me' | 'them'; text: string };

function TypingIndicator() {
    return (
      <div className="flex items-center space-x-1 p-2">
        <span className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.3s]"></span>
        <span className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.15s]"></span>
        <span className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce"></span>
      </div>
    );
  }

export function MessagingClient() {
  const [selectedContact, setSelectedContact] = React.useState<Contact>(contacts.tutors[0]);
  const [messages, setMessages] = React.useState<Record<string, Message[]>>(initialMessages);
  const [newMessage, setNewMessage] = React.useState('');
  const [filter, setFilter] = React.useState('');
  const [typingContactId, setTypingContactId] = React.useState<string | null>(null);
  const scrollAreaRef = React.useRef<HTMLDivElement>(null);


  const handleSelectContact = (contact: Contact) => {
    setSelectedContact(contact);
    setTypingContactId(null);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() && selectedContact) {
      const currentMessages = messages[selectedContact.id] || [];
      const updatedMessages = [...currentMessages, { from: 'me' as const, text: newMessage }];
      setMessages({
        ...messages,
        [selectedContact.id]: updatedMessages,
      });
      setNewMessage('');

      // Simulate typing and response
      setTypingContactId(selectedContact.id);
      setTimeout(() => {
        const responseMessages = [
            "That's a great question! Let me think.",
            "I see. Can you tell me more?",
            "Interesting point. I hadn't considered that.",
            "Let's break that down further.",
        ]
        const response = responseMessages[Math.floor(Math.random() * responseMessages.length)];
        const allMessages = messages[selectedContact.id] || [];
        setMessages(prev => ({
            ...prev,
            [selectedContact.id]: [...allMessages, { from: 'them', text: response }]
        }));
        setTypingContactId(null);
      }, 2000 + Math.random() * 2000);
    }
  };

  React.useEffect(() => {
    if (scrollAreaRef.current) {
        const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
        if (viewport) {
            viewport.scrollTop = viewport.scrollHeight;
        }
    }
  }, [messages, selectedContact, typingContactId]);


  const conversation = messages[selectedContact?.id] || [];


  const filteredTutors = contacts.tutors.filter((c) =>
    c.name.toLowerCase().includes(filter.toLowerCase())
  );
  const filteredPeers = contacts.peers.filter((c) =>
    c.name.toLowerCase().includes(filter.toLowerCase())
  );


  return (
    <div className="grid h-full grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-muted/40 p-4 rounded-xl">
      <Card className="md:col-span-1 lg:col-span-1 flex flex-col bg-transparent border-0 shadow-none">
        <CardHeader className="p-0 mb-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-8 rounded-full bg-background"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
        </CardHeader>
        <ScrollArea className="flex-grow -mx-2">
            <ContactList
                title="Tutors"
                contacts={filteredTutors}
                selectedContact={selectedContact}
                onSelectContact={handleSelectContact}
              />
            <ContactList
                title="Peers"
                contacts={filteredPeers}
                selectedContact={selectedContact}
                onSelectContact={handleSelectContact}
              />
        </ScrollArea>
      </Card>

      <Card className="md:col-span-2 lg:col-span-3 flex flex-col h-full bg-background/70 rounded-xl shadow-md">
        {selectedContact ? (
          <>
            <CardHeader className="flex flex-row items-center gap-4 p-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={selectedContact.avatar} data-ai-hint={selectedContact.aiHint}/>
                <AvatarFallback>
                  {selectedContact.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-grow">
                <h3 className="font-semibold text-lg">{selectedContact.name}</h3>
                <p className="text-sm text-green-500 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-green-500 block"></span>
                    Online
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon"><Phone /></Button>
                <Button variant="ghost" size="icon"><Video /></Button>
                <Button variant="ghost" size="icon"><MoreVertical /></Button>
              </div>
            </CardHeader>
            <Separator />
            <ScrollArea className="flex-grow p-4" ref={scrollAreaRef}>
              <div className="space-y-2">
                <div className="text-center text-xs text-muted-foreground my-2">Today</div>
                {conversation.map((msg, index) => (
                  <div
                    key={index}
                    className={cn('flex items-end gap-2', {
                      'justify-end': msg.from === 'me',
                      'justify-start': msg.from === 'them',
                    })}
                  >
                     {msg.from === 'them' && (
                       <Avatar className="h-8 w-8 self-end">
                         <AvatarImage src={selectedContact.avatar} data-ai-hint={selectedContact.aiHint} />
                         <AvatarFallback>{selectedContact.name.charAt(0)}</AvatarFallback>
                       </Avatar>
                     )}
                    <div
                      className={cn('max-w-xs rounded-2xl p-3 md:max-w-md', {
                        'bg-primary text-primary-foreground rounded-br-none': msg.from === 'me',
                        'bg-muted text-foreground rounded-bl-none': msg.from === 'them',
                      })}
                    >
                      <p>{msg.text}</p>
                    </div>
                  </div>
                ))}
                {typingContactId === selectedContact.id && (
                     <div className="flex items-end gap-2 justify-start">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={selectedContact.avatar} data-ai-hint={selectedContact.aiHint} />
                            <AvatarFallback>{selectedContact.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="max-w-xs rounded-2xl p-3 md:max-w-md bg-muted rounded-bl-none">
                            <TypingIndicator />
                        </div>
                    </div>
                )}
              </div>
            </ScrollArea>
            <CardFooter className="p-2 border-t">
              <form className="flex w-full items-center space-x-2" onSubmit={handleSendMessage}>
                <Input 
                    placeholder="Type your message here..." 
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="bg-muted border-transparent rounded-full focus-visible:ring-1 focus-visible:ring-primary"
                />
                 <Button variant="ghost" size="icon" type="button" className="text-muted-foreground">
                    <Smile className="h-5 w-5" />
                    <span className="sr-only">Emoji</span>
                </Button>
                <Button variant="ghost" size="icon" type="button" className="text-muted-foreground">
                    <Paperclip className="h-5 w-5" />
                    <span className="sr-only">Attach document</span>
                </Button>
                <Button type="submit" size="icon" className="rounded-full bg-accent hover:bg-accent/90">
                  <Send className="h-5 w-5" />
                  <span className="sr-only">Send</span>
                </Button>
              </form>
            </CardFooter>
          </>
        ) : (
          <div className="flex h-full items-center justify-center text-muted-foreground">
            <p>Select a contact to start messaging.</p>
          </div>
        )}
      </Card>
    </div>
  );
}

function ContactList({
  title,
  contacts,
  selectedContact,
  onSelectContact,
}: {
  title: string;
  contacts: (Contact & { lastMessage?: string, timestamp?: string, unread?: number })[];
  selectedContact: Contact | null;
  onSelectContact: (contact: Contact) => void;
}) {
  if (contacts.length === 0) return null;

  return (
    <div className="px-2 py-2">
      <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-2 px-2">{title}</h3>
      <div className="flex flex-col gap-1">
        {contacts.map((contact) => (
          <Button
            key={contact.id}
            variant="ghost"
            className={cn('w-full h-auto justify-start gap-3 p-2 text-left', {
              'bg-accent text-accent-foreground': selectedContact?.id === contact.id,
            })}
            onClick={() => onSelectContact(contact)}
          >
            <Avatar className="h-10 w-10">
              <AvatarImage src={contact.avatar} data-ai-hint={contact.aiHint} />
              <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-grow truncate">
                <div className="flex justify-between items-center">
                    <span className="font-semibold">{contact.name}</span>
                    <span className="text-xs text-muted-foreground">{contact.timestamp}</span>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-xs text-muted-foreground truncate">{contact.lastMessage}</p>
                    {contact.unread && (
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">{contact.unread}</span>
                    )}
                </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}

    