import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { generateSubjectForumSummaries } from '@/ai/flows/generate-subject-forum-summaries';
import { AlertCircle, Bot } from 'lucide-react';

export type Forum = {
  subject: string;
  description: string;
  icon: LucideIcon;
  posts: string[];
};

type ForumCardProps = {
  forum: Forum;
};

async function ForumSummary({ forum }: { forum: Forum }) {
  try {
    const summary = await generateSubjectForumSummaries({
      subject: forum.subject,
      posts: forum.posts,
    });
    return (
      <div className="mt-2 flex items-start gap-2 text-xs text-muted-foreground">
        <Bot className="h-4 w-4 flex-shrink-0 mt-0.5 text-accent" />
        <p>{summary.summary}</p>
      </div>
    );
  } catch (error) {
    console.error(`Failed to generate summary for ${forum.subject}:`, error);
    return (
       <div className="mt-2 flex items-center gap-2 text-xs text-destructive">
        <AlertCircle className="h-4 w-4 flex-shrink-0" />
        <p>Could not load AI summary.</p>
      </div>
    );
  }
}

export function ForumCard({ forum }: ForumCardProps) {
  const { subject, description, icon: Icon } = forum;
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Icon className="h-8 w-8 text-primary" />
          <CardTitle className="font-headline text-xl">{subject}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
         <h4 className="text-sm font-semibold mb-1">Recent Activity</h4>
         {/* @ts-expect-error Async Server Component */}
         <ForumSummary forum={forum}/>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full" variant="outline">
          <Link href={`/app/forums/${encodeURIComponent(subject)}`}>Enter Forum</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
