import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { generateSubjectForumSummaries } from '@/ai/flows/generate-subject-forum-summaries';
import { AlertCircle, Bot } from 'lucide-react';

export type Forum = {
  subject: string;
  description: string;
  icon: LucideIcon;
  posts: string[];
  members: number;
};

type ForumListItemProps = {
  forum: Forum;
  index: number;
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
        <p className="line-clamp-1">{summary.summary}</p>
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

export function ForumListItem({ forum, index }: ForumListItemProps) {
  const { subject, description, icon: Icon, members } = forum;
  return (
    <li className="p-4 hover:bg-muted/50 transition-colors">
        <div className="flex items-center gap-4">
            <div className="text-lg font-bold text-muted-foreground hidden sm:block">{index}</div>
            <Icon className="h-10 w-10 text-primary flex-shrink-0" />
            <div className="flex-grow">
                <Link href={`/app/forums/${encodeURIComponent(subject)}`} className="hover:underline">
                    <h3 className="font-bold text-lg">r/{subject}</h3>
                </Link>
                <p className="text-sm text-muted-foreground">{description}</p>
                 {/* @ts-expect-error Async Server Component */}
                 <ForumSummary forum={forum}/>
            </div>
            <div className="text-center flex-shrink-0 hidden md:block">
                <p className="font-bold">{new Intl.NumberFormat().format(members)}</p>
                <p className="text-xs text-muted-foreground">Members</p>
            </div>
             <Button asChild variant="outline" className="flex-shrink-0">
                <Link href={`/app/forums/${encodeURIComponent(subject)}`}>View</Link>
            </Button>
        </div>
    </li>
  );
}
