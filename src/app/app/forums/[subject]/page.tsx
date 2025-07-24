import { NewPostForm } from '@/components/forums/NewPostForm';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const mockPosts = [
  {
    id: 1,
    author: 'Alice',
    avatar: 'https://placehold.co/40x40.png',
    timestamp: '2 hours ago',
    content:
      'I agree, the real-world applications are what make it so interesting! For example, GPS systems heavily rely on trigonometry and triangulation to pinpoint your location.',
  },
  {
    id: 2,
    author: 'Bob',
    avatar: 'https://placehold.co/40x40.png',
    timestamp: '3 hours ago',
    content:
      'Real-world applications of trigonometry are everywhere! Architecture, video game design, astronomy, and even music production use its principles.',
  },
  {
    id: 3,
    author: 'Alex',
    avatar: 'https://placehold.co/40x40.png',
    timestamp: '5 hours ago',
    content: 'What are some real-world applications of trigonometry?',
  },
];

export default function ForumSubjectPage({
  params,
}: {
  params: { subject: string };
}) {
  const subject = decodeURIComponent(params.subject);

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <Link
        href="/app/forums"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Forums
      </Link>
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
          {subject} Forum
        </h1>
        <p className="mt-2 text-muted-foreground">
          Join the conversation and share your insights.
        </p>
      </div>

      <NewPostForm />

      <div className="space-y-4">
        <h2 className="font-headline text-2xl font-semibold">Discussions</h2>
        {mockPosts.map((post) => (
          <Card key={post.id}>
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src={post.avatar} alt={post.author} data-ai-hint="profile picture"/>
                  <AvatarFallback>
                    {post.author.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">{post.author}</p>
                    <p className="text-xs text-muted-foreground">
                      {post.timestamp}
                    </p>
                  </div>
                  <p className="mt-2 text-foreground/90">{post.content}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
