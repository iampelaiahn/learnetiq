import { ArrowBigDown, ArrowBigUp, MessageSquare, Share } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export type Post = {
  id: string;
  author: string;
  timestamp: string;
  title: string;
  content: string;
  upvotes: number;
  commentCount: number;
};

export function PostCard({
  post,
  isFullPost = false,
}: {
  post: Post;
  isFullPost?: boolean;
}) {
  return (
    <Card className="overflow-hidden">
      <div className="flex">
        <div className="flex flex-col items-center gap-1 bg-muted p-2 text-center">
          <Button variant="ghost" size="sm" className="p-1 h-auto">
            <ArrowBigUp className="h-5 w-5" />
          </Button>
          <span className="text-xs font-bold w-6">
            {new Intl.NumberFormat('en-US', {
              notation: 'compact',
              maximumFractionDigits: 1,
            }).format(post.upvotes)}
          </span>
          <Button variant="ghost" size="sm" className="p-1 h-auto">
            <ArrowBigDown className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex-1">
          <CardHeader className="pb-2">
            <CardDescription className="text-xs flex items-center gap-2">
              <Avatar className="h-5 w-5">
                <AvatarImage src="https://placehold.co/40x40.png" data-ai-hint="person avatar"/>
                <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
              </Avatar>
              <span>
                Posted by u/{post.author} • {post.timestamp}
              </span>
            </CardDescription>
            <CardTitle
              className={cn(
                'text-xl font-bold',
                !isFullPost && 'hover:underline'
              )}
            >
              {isFullPost ? (
                post.title
              ) : (
                <Link href={`/app/forums/Computer%20Science/${post.id}`}>
                  {post.title}
                </Link>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent
            className={cn(!isFullPost && 'max-h-32 overflow-hidden mask-fade-bottom')}
          >
            <p className="text-foreground/90 whitespace-pre-wrap">
              {post.content}
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm">
              <MessageSquare className="mr-2 h-4 w-4" />
              {post.commentCount} Comments
            </Button>
            <Button variant="ghost" size="sm">
              <Share className="mr-2 h-4 w-4" />
              Share
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}
