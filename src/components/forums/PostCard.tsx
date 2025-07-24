'use client';

import * as React from 'react';
import { ArrowBigDown, ArrowBigUp, MessageSquare, Share, MoreHorizontal } from 'lucide-react';
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
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';


export type Comment = {
  id: string;
  author: string;
  timestamp: string;
  content: string;
  upvotes: number;
  replies?: Comment[];
  isOp?: boolean;
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
          <span className={cn("font-semibold", { "text-primary": comment.isOp })}>{comment.author}</span>
          {comment.isOp && <span className="text-xs font-semibold text-white bg-blue-500 px-1.5 py-0.5 rounded-sm ml-1">OP</span>}
          <span className="text-muted-foreground ml-2">{comment.timestamp}</span>
        </div>
        <p className="text-foreground/90 mt-1">{comment.content}</p>
        <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground font-semibold">
           <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="p-1 h-6 w-6">
              <ArrowBigUp className="h-4 w-4" />
            </Button>
            <span>{comment.upvotes}</span>
            <Button variant="ghost" size="icon" className="p-1 h-6 w-6">
              <ArrowBigDown className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="ghost" size="sm" className="p-1 h-auto gap-1">
            <MessageSquare className="h-4 w-4"/>
            Reply
          </Button>
          <Button variant="ghost" size="sm" className="p-1 h-auto gap-1">
            <Share className="h-4 w-4" />
            Share
          </Button>
           <Button variant="ghost" size="icon" className="p-1 h-6 w-6">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
        </div>
        {comment.replies && comment.replies.length > 0 && (
          <div className="mt-4 pl-4 border-l-2">
            {comment.replies.map((reply) => (
              <CommentThread key={reply.id} comment={reply} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function CommentSection({ comments, postAuthor }: { comments: Comment[]; postAuthor: string; }) {
    return (
        <div className="bg-muted/50 p-4">
            <h4 className="font-semibold text-lg mb-4">Comments ({comments.length})</h4>
            <NewPostForm />
             <div className="mt-6">
                {comments.map((comment) => (
                    <CommentThread key={comment.id} comment={{...comment, isOp: comment.author === postAuthor}} />
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
    <TooltipProvider>
    <Collapsible open={isCommentsOpen} onOpenChange={setIsCommentsOpen}>
    <Card className="overflow-hidden">
      <div className="flex">
        <div className="hidden sm:flex flex-col items-center p-2 bg-muted/50">
           <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-7 w-7">
                        <ArrowBigUp className="h-5 w-5" />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Upvote</p>
                </TooltipContent>
            </Tooltip>
          <span className="text-sm font-bold">
            {new Intl.NumberFormat('en-US', {
              notation: 'compact',
              maximumFractionDigits: 1,
            }).format(post.upvotes)}
          </span>
           <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-7 w-7">
                        <ArrowBigDown className="h-5 w-5" />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Downvote</p>
                </TooltipContent>
            </Tooltip>
        </div>
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
             <div className="flex sm:hidden items-center gap-1 rounded-full bg-muted p-1">
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
      </div>
       <CollapsibleContent>
        {post.comments && <CommentSection comments={post.comments} postAuthor={post.author}/>}
      </CollapsibleContent>
    </Card>
    </Collapsible>
    </TooltipProvider>
  );
}
