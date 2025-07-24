'use client';

import * as React from 'react';
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
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';
import { NewPostForm } from './NewPostForm';

export type Comment = {
  id: string;
  author: string;
  timestamp: string;
  content: string;
  upvotes: number;
  replies?: Comment[];
};

export type Post = {
  id: string;
  author: string;
  timestamp: string;
  title: string;
  content: string;
  upvotes: number;
  commentCount: number;
  comments?: Comment[];
};

function CommentThread({ comment }: { comment: Comment }) {
  return (
    <div className="flex items-start gap-3 mt-4">
      <Avatar className="h-8 w-8">
        <AvatarImage src={`https://placehold.co/40x40.png`} data-ai-hint="person avatar"/>
        <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-grow">
        <div className="text-sm">
          <span className="font-semibold">{comment.author}</span>
          <span className="text-muted-foreground ml-2">{comment.timestamp}</span>
        </div>
        <p className="text-foreground/90 mt-1">{comment.content}</p>
        <div className="flex items-center gap-2 mt-2 text-xs">
          <Button variant="ghost" size="sm" className="p-1 h-auto">Upvote ({comment.upvotes})</Button>
          <Button variant="ghost" size="sm" className="p-1 h-auto">Reply</Button>
        </div>
        {comment.replies && comment.replies.length > 0 && (
          <div className="mt-4 pl-4 border-l">
            {comment.replies.map((reply) => (
              <CommentThread key={reply.id} comment={reply} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function CommentSection({ comments }: { comments: Comment[] }) {
    return (
        <div className="bg-muted/50 p-4">
            <h4 className="font-semibold text-lg mb-4">Comments</h4>
            <NewPostForm />
             <div className="mt-6">
                {comments.map((comment) => (
                    <CommentThread key={comment.id} comment={comment} />
                ))}
            </div>
        </div>
    )
}

export function PostCard({
  post,
  isFullPost = false,
}: {
  post: Post;
  isFullPost?: boolean;
}) {
  const [isCommentsOpen, setIsCommentsOpen] = React.useState(isFullPost);

  return (
    <Collapsible open={isCommentsOpen} onOpenChange={setIsCommentsOpen}>
    <Card className="overflow-hidden">
      <div className="flex-1">
        <CardHeader className="pb-2">
          <CardDescription className="text-xs flex items-center gap-2">
            <Avatar className="h-5 w-5">
              <AvatarImage
                src="https://placehold.co/40x40.png"
                data-ai-hint="person avatar"
              />
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
          className={cn(
            !isFullPost && 'max-h-32 overflow-hidden mask-fade-bottom'
          )}
        >
          <p className="text-foreground/90 whitespace-pre-wrap">
            {post.content}
          </p>
        </CardContent>
        <CardFooter className="flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-full bg-muted p-1">
            <Button variant="ghost" size="sm" className="p-1 h-auto">
              <ArrowBigUp className="h-5 w-5" />
            </Button>
            <span className="text-xs font-bold w-6 text-center">
              {new Intl.NumberFormat('en-US', {
                notation: 'compact',
                maximumFractionDigits: 1,
              }).format(post.upvotes)}
            </span>
            <Button variant="ghost" size="sm" className="p-1 h-auto">
              <ArrowBigDown className="h-5 w-5" />
            </Button>
          </div>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
                <MessageSquare className="mr-2 h-4 w-4" />
                {post.commentCount} Comments
            </Button>
          </CollapsibleTrigger>
          <Button variant="ghost" size="sm">
            <Share className="mr-2 h-4 w-4" />
            Share
          </Button>
        </CardFooter>
      </div>
       <CollapsibleContent>
        {post.comments && <CommentSection comments={post.comments} />}
      </CollapsibleContent>
    </Card>
    </Collapsible>
  );
}
