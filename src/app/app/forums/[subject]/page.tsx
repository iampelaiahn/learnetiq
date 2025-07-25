'use client';
import { PostCard, type Post } from '@/components/forums/PostCard';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  ArrowLeft,
  Book,
  MoreHorizontal,
  Plus,
  Rss,
  Scale,
  Shield,
  User,
  ArrowBigUp,
  Code,
  Atom,
  Landmark,
  Globe,
  Dna,
  Bot,
  DollarSign,
  Palette,
  Music,
  Paintbrush,
  GraduationCap
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { CommunitySidebar } from '@/components/forums/CommunitySidebar';

const allPosts: Record<string, Post[]> = {
  'Computer Science': [
    {
      id: '1',
      author: 'dev_guru',
      timestamp: '2 days ago',
      title: 'What is the best language for a beginner?',
      content:
        "I'm looking to get into programming and I'm not sure where to start. I've heard Python is good for beginners, but I've also seen a lot of job postings for JavaScript. What do you all think? I'm interested in web development, but also want something that's versatile.",
      upvotes: 256,
      commentCount: 2,
      comments: [
        {
          id: 'c1',
          author: 'js_master',
          timestamp: '2 days ago',
          content:
            "JavaScript is the way to go for web dev. You can use it for both front-end and back-end (with Node.js). It's a huge ecosystem.",
          upvotes: 32,
          replies: [
            {
              id: 'c1_r1',
              author: 'dev_guru',
              timestamp: '2 days ago',
              content:
                "That's a good point. I like the idea of using one language for everything.",
              upvotes: 8,
            },
          ],
        },
        {
          id: 'c2',
          author: 'python_fan',
          timestamp: '2 days ago',
          content:
            "I started with Python and loved it. The syntax is very clean and readable. It's great for data science and AI too.",
          upvotes: 25,
        },
      ],
    },
    {
      id: '2',
      author: 'algo_queen',
      timestamp: '5 days ago',
      title: 'Big O Notation explained with examples',
      content:
        "Just wrote a blog post breaking down Big O notation for anyone who's struggling with it. It's a fundamental concept in CS, and understanding it will make you a better developer. Let me know if you have any questions!",
      upvotes: 1200,
      commentCount: 1,
      comments: [
        {
          id: 'c3',
          author: 'learner123',
          timestamp: '5 days ago',
          content: 'This was super helpful! Thanks for sharing.',
          upvotes: 15,
        },
      ],
    },
  ],
  Mathematics: [
    {
      id: '3',
      author: 'calc_nerd',
      timestamp: '1 day ago',
      title: 'Tips for understanding derivatives?',
      content:
        "I'm finding the concept of derivatives a bit tricky. Does anyone have any good resources or analogies that helped them understand it better?",
      upvotes: 150,
      commentCount: 2,
      comments: [
        {
          id: 'c4',
          author: 'math_whiz',
          timestamp: '1 day ago',
          content:
            'Think of it as the instantaneous rate of change. Like the speed of a car at a specific moment in time.',
          upvotes: 45,
        },
         {
          id: 'c5',
          author: 'visual_learner',
          timestamp: '1 day ago',
          content:
            "3Blue1Brown's videos on YouTube are amazing for visualizing calculus concepts.",
          upvotes: 60,
        },
      ],
    },
  ],
  History: [
     {
      id: '4',
      author: 'history_buff',
      timestamp: '3 days ago',
      title: 'Most impactful invention in human history?',
      content:
        "What do you all think is the single most impactful invention that shaped human civilization as we know it? I'm torn between the printing press and agriculture.",
      upvotes: 450,
      commentCount: 1,
      comments: [
         {
          id: 'c6',
          author: 'ancient_civ_expert',
          timestamp: '3 days ago',
          content:
            "It has to be agriculture. It allowed for settled societies, population growth, and specialization of labor, which paved the way for everything else.",
          upvotes: 95,
        },
      ]
    },
  ]
};

const forumDetails: Record<string, { icon: React.ElementType, bannerHint: string }> = {
    'Mathematics': { icon: Atom, bannerHint: 'abstract math' },
    'History': { icon: Landmark, bannerHint: 'historical artifacts' },
    'Physics': { icon: Globe, bannerHint: 'galaxy stars' },
    'Literature': { icon: Book, bannerHint: 'old library' },
    'Computer Science': { icon: Code, bannerHint: 'binary code' },
    'Biology': { icon: Dna, bannerHint: 'dna helix' },
    'AI & Robotics': { icon: Bot, bannerHint: 'robotics technology' },
    'Economics': { icon: DollarSign, bannerHint: 'stock market chart' },
    'Philosophy': { icon: Scale, bannerHint: 'ancient philosophy' },
    'Art History': { icon: Paintbrush, bannerHint: 'classical painting' },
    'Music Theory': { icon: Music, bannerHint: 'sheet music' },
    'Social Sciences': { icon: GraduationCap, bannerHint: 'university campus' },
    'default': { icon: Code, bannerHint: 'abstract technology' },
}

export default function ForumSubjectPage({
  params,
}: {
  params: { subject: string };
}) {
  const subject = decodeURIComponent(params.subject);
  const mockPosts = allPosts[subject] || [];
  const details = forumDetails[subject] || forumDetails.default;
  const Icon = details.icon;

  return (
    <div className="mx-auto max-w-7xl">
      <div className="relative h-48 w-full overflow-hidden rounded-t-lg bg-muted">
        <Image
          src={`https://placehold.co/1200x300.png`}
          alt={`${subject} banner`}
          fill
          objectFit="cover"
          data-ai-hint={details.bannerHint}
        />
      </div>
      <div className="bg-card px-4 py-3">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-end gap-4">
            <div className="relative -mt-16 h-24 w-24 flex-shrink-0 rounded-full border-4 border-card bg-background">
              <div className="flex h-full w-full items-center justify-center">
                <Icon className="h-12 w-12 text-primary" />
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
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            {mockPosts.length > 0 ? (
                mockPosts.map((post) => (
                    <PostCard key={post.id} post={post} isFullPost={false} />
                ))
            ) : (
                <div className="text-center text-muted-foreground py-12">
                    <p className="text-lg font-semibold">No posts yet</p>
                    <p>Be the first to create a post in this community!</p>
                </div>
            )}
          </div>
          <div className="space-y-4 lg:col-span-1">
            <CommunitySidebar subject={subject} />
          </div>
        </div>
      </div>
    </div>
  );
}
