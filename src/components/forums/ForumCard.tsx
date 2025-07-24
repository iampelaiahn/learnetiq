import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

export type Forum = {
  subject: string;
  description: string;
  icon: LucideIcon;
  posts: string[];
  members: number;
  category: string;
};

type ForumCardProps = {
  forum: Forum;
};

export function ForumCard({ forum }: ForumCardProps) {
  const { subject, description, icon: Icon, members } = forum;
  return (
    <Card className="hover:bg-muted/50 transition-colors">
        <CardContent className="p-4">
            <div className="flex items-start gap-4">
                <Icon className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
                <div className="flex-grow">
                    <Link href={`/app/forums/${encodeURIComponent(subject)}`} className="hover:underline">
                        <h3 className="font-bold">r/{subject}</h3>
                    </Link>
                    <p className="text-xs text-muted-foreground">{new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 }).format(members)} members</p>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{description}</p>
                </div>
                <Button asChild className="flex-shrink-0">
                    <Link href={`/app/forums/${encodeURIComponent(subject)}`}>Join</Link>
                </Button>
            </div>
        </CardContent>
    </Card>
  );
}
