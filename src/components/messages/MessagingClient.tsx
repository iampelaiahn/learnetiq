
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { Search, Send, Paperclip } from 'lucide-react';

const contacts = {
  tutors: [
    { id: 't1', name: 'Dr. Evelyn Reed', avatar: 'https://placehold.co/40x40.png', aiHint: 'woman portrait' },
    { id: 't2', name: 'Prof. Finch', avatar: 'https://placehold.co/40x40.png', aiHint: 'man portrait' },
  ],
  peers: [
    { id: 'p1', name: 'Bob Johnson', avatar: 'https://placehold.co/40x40.png', aiHint: 'person portrait' },
    { id: 'p2', name: 'Charlie Brown', avatar: 'https://placehold.co/40x40.png', aiHint: 'boy portrait' },
  ],
};

const initialMessages = {
  t1: [
    { from: 'me', text: 'Hi Dr. Reed, I have a question about calculus.' },
    { from: 'them', text: 'Of course, Alex. How can I help?' },
  ],
  p2: [
    { from: 'them', text: 'Hey, did you finish the history assignment?' },
    { from: 'me', text: 'Almost! Just putting the final touches on it.' },
  ],
};

type Contact = (typeof contacts.tutors)[0] | (typeof contacts.peers)[0];
type Message = { from: 'me' | 'them'; text: string };

export function MessagingClient() {
  const [selectedContact, setSelectedContact] = React.useState<Contact>(contacts.tutors[0]);
  const [messages, setMessages] = React.useState<Record<string, Message[]>>(initialMessages);
  const [newMessage, setNewMessage] = React.useState('');
  const [filter, setFilter] = React.useState('');

  const handleSelectContact = (contact: Contact) => {
    setSelectedContact(contact);
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
    }
  };

  const conversation = messages[selectedContact?.id] || [];


  const filteredContacts = (type: 'tutors' | 'peers') =>
    contacts[type].filter((c) =>
      c.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <div className="grid h-full grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <Card className="md:col-span-1 lg:col-span-1 flex flex-col">
        <CardHeader>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Filter contacts..."
              className="pl-8"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
        </CardHeader>
        <Tabs defaultValue="tutors" className="flex-grow flex flex-col">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="tutors">Tutors</TabsTrigger>
            <TabsTrigger value="peers">Peers</TabsTrigger>
          </TabsList>
          <ScrollArea className="flex-grow">
            <TabsContent value="tutors" className="m-0">
              <ContactList
                contacts={filteredContacts('tutors')}
                selectedContact={selectedContact}
                onSelectContact={handleSelectContact}
              />
            </TabsContent>
            <TabsContent value="peers" className="m-0">
              <ContactList
                contacts={filteredContacts('peers')}
                selectedContact={selectedContact}
                onSelectContact={handleSelectContact}
              />
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </Card>

      <Card className="md:col-span-2 lg:col-span-3 flex flex-col h-full">
        {selectedContact ? (
          <>
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar>
                <AvatarImage src={selectedContact.avatar} data-ai-hint={selectedContact.aiHint}/>
                <AvatarFallback>
                  {selectedContact.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <h3 className="font-semibold text-lg">{selectedContact.name}</h3>
            </CardHeader>
            <Separator />
            <ScrollArea className="flex-grow p-4">
              <div className="space-y-4">
                {conversation.map((msg, index) => (
                  <div
                    key={index}
                    className={cn('flex items-end gap-2', {
                      'justify-end': msg.from === 'me',
                    })}
                  >
                    <div
                      className={cn('max-w-xs rounded-lg p-3 md:max-w-md', {
                        'bg-primary text-primary-foreground': msg.from === 'me',
                        'bg-muted': msg.from === 'them',
                      })}
                    >
                      <p>{msg.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <CardFooter className="p-4 border-t">
              <form className="flex w-full items-center space-x-2" onSubmit={handleSendMessage}>
                <Button variant="ghost" size="icon" type="button">
                    <Paperclip className="h-5 w-5" />
                    <span className="sr-only">Attach document</span>
                </Button>
                <Input 
                    placeholder="Type a message..." 
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <Button type="submit">
                  <Send className="h-4 w-4" />
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
  contacts,
  selectedContact,
  onSelectContact,
}: {
  contacts: Contact[];
  selectedContact: Contact;
  onSelectContact: (contact: Contact) => void;
}) {
  return (
    <div className="flex flex-col gap-1 p-2">
      {contacts.map((contact) => (
        <Button
          key={contact.id}
          variant="ghost"
          className={cn('w-full justify-start gap-3 h-12', {
            'bg-accent text-accent-foreground': selectedContact.id === contact.id,
          })}
          onClick={() => onSelectContact(contact)}
        >
          <Avatar>
            <AvatarImage src={contact.avatar} data-ai-hint={contact.aiHint} />
            <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span>{contact.name}</span>
        </Button>
      ))}
    </div>
  );
}
