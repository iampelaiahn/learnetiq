import { PostCard, type Post } from '@/components/forums/PostCard';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft,
  Book,
  MoreHorizontal,
  Plus,
  Rss,
  Scale,
  Shield,
  User,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { CommunitySidebar } from '@/components/forums/CommunitySidebar';

const mockPosts: Post[] = [
  {
    id: '1',
    author: 'dev_guru',
    timestamp: '2 days ago',
    title: 'What is the best language for a beginner?',
    content:
      "I'm looking to get into programming and I'm not sure where to start. I've heard Python is good for beginners, but I've also seen a lot of job postings for JavaScript. What do you all think? I'm interested in web development, but also want something that's versatile.",
    upvotes: 256,
    commentCount: 8,
  },
  {
    id: '2',
    author: 'algo_queen',
    timestamp: '5 days ago',
    title: 'Big O Notation explained with examples',
    content:
      "Just wrote a blog post breaking down Big O notation for anyone who's struggling with it. It's a fundamental concept in CS, and understanding it will make you a better developer. Let me know if you have any questions!",
    upvotes: 1200,
    commentCount: 42,
  },
];

export default function ForumSubjectPage({
  params,
}: {
  params: { subject: string };
}) {
  const subject = decodeURIComponent(params.subject);

  return (
    <div className="mx-auto max-w-7xl">
      <div className="relative h-48 w-full overflow-hidden rounded-t-lg bg-muted">
        <Image
          src="https://placehold.co/1200x300.png"
          alt={`${subject} banner`}
          layout="fill"
          objectFit="cover"
          data-ai-hint="abstract technology"
        />
      </div>
      <div className="bg-card px-4 py-3">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-end gap-4">
            <div className="relative -mt-16 h-24 w-24 flex-shrink-0 rounded-full border-4 border-card bg-background">
              <div className="flex h-full w-full items-center justify-center">
                <Code className="h-12 w-12 text-primary" />
              </div>
            </div>
            <div className="flex-grow">
              <h1 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
                r/{subject}
              </h1>
              <p className="text-sm text-muted-foreground">
                A community for all things {subject}.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Create Post
              </Button>
              <Button variant="outline">Join</Button>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-6 max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4 md:col-span-2">
            {mockPosts.map((post) => (
              <PostCard key={post.id} post={post} isFullPost={false} />
            ))}
          </div>
          <div className="space-y-4 md:col-span-1">
            <CommunitySidebar subject={subject} />
          </div>
        </div>
      </div>
    </div>
  );
}
