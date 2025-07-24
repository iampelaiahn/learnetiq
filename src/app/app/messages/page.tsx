import { MessagingClient } from '@/components/messages/MessagingClient';

export default function MessagesPage() {
  return (
    <div className="h-[calc(100vh-8rem)]">
       <div className="mb-8">
        <h1 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
          Messages
        </h1>
        <p className="mt-2 text-muted-foreground">
          Communicate with your tutors and peers.
        </p>
      </div>
      <MessagingClient />
    </div>
  );
}
