
'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const users = [
  { name: 'Maren Maureen', avatar: 'https://placehold.co/40x40.png', aiHint: 'woman portrait' },
  { name: 'Jenniffer Jane', avatar: 'https://placehold.co/40x40.png', aiHint: 'woman face' },
  { name: 'Ryan Herwinds', avatar: 'https://placehold.co/40x40.png', aiHint: 'man smiling' },
  { name: 'Kierra Culhane', avatar: 'https://placehold.co/40x40.png', aiHint: 'woman smiling' },
];

export function OnlineUsers() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-headline">Online Users</CardTitle>
        <Button variant="link" className="p-0 h-auto">See all</Button>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {users.map((user) => (
            <li key={user.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={user.avatar} data-ai-hint={user.aiHint} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <p className="font-semibold">{user.name}</p>
              </div>
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
