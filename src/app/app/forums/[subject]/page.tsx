import { NewPostForm } from '@/components/forums/NewPostForm';
import { PostCard } from '@/components/forums/PostCard';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { ArrowBigUp, ArrowLeft, MessageSquare } from 'lucide-react';
import Link from 'next/link';

const mockPost = {
  id: '1',
  author: 'alex_w',
  timestamp: '5 hours ago',
  title: 'What are some real-world applications of trigonometry?',
  content: "I'm trying to connect what I'm learning in class to the real world. Can anyone share some interesting examples of how trigonometry is used in different fields? I know it's used in architecture and engineering, but I'm curious about other applications too.",
  upvotes: 128,
  comments: [
    {
      id: 'c1',
      author: 'physics_bob',
      timestamp: '3 hours ago',
      content:
        'Real-world applications of trigonometry are everywhere! Architecture, video game design, astronomy, and even music production use its principles.',
      upvotes: 42,
      replies: [
        {
          id: 'c1_1',
          author: 'music_maya',
          timestamp: '3 hours ago',
          content: 'In music, sine waves are the purest form of sound! Synthesizers generate complex tones by adding sine waves of different frequencies and amplitudes. That\'s all trig!',
          upvotes: 15,
          replies: []
        }
      ]
    },
    {
      id: 'c2',
      author: 'geo_alice',
      timestamp: '2 hours ago',
      content:
        'I agree, the real-world applications are what make it so interesting! For example, GPS systems heavily rely on trigonometry and triangulation to pinpoint your location.',
      upvotes: 35,
      replies: [
        {
          id: 'c2_1',
          author: 'alex_w',
          timestamp: '1 hour ago',
          content: 'Wow, I never thought about GPS! That makes so much sense. Thanks for sharing!',
          upvotes: 10,
          replies: []
        }
      ]
    },
  ],
};

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
        Back to All Forums
      </Link>
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
          r/{subject}
        </h1>
        <p className="mt-1 text-muted-foreground">
          A community for all things {subject}.
        </p>
      </div>

      <PostCard post={mockPost} />

      <div className="space-y-4">
        <h2 className="font-headline text-xl font-semibold border-b pb-2">
          Comments ({mockPost.comments.length})
        </h2>
        <NewPostForm />
        <div className="flex flex-col gap-4">
          <TooltipProvider>
            {mockPost.comments.map((comment) => (
              <CommentThread key={comment.id} comment={comment} />
            ))}
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
}

function CommentThread({ comment }: { comment: typeof mockPost.comments[0] }) {
  return (
    <div className="flex gap-3">
      <div className="w-10 flex-shrink-0 flex justify-center">
        <div className="w-px bg-border h-full"></div>
      </div>
      <div className="flex-1 space-y-2">
        <div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
             <p className="font-semibold text-foreground">{comment.author}</p>
             <span>•</span>
             <span>{comment.timestamp}</span>
          </div>
          <p className="text-foreground/90 mt-1">{comment.content}</p>
          <div className="flex items-center gap-1 mt-2 text-xs">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="p-1 h-auto w-auto">
                    <ArrowBigUp className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Upvote</TooltipContent>
            </Tooltip>
            <span className="text-xs font-bold w-6 text-center">{comment.upvotes}</span>
            <Tooltip>
              <TooltipTrigger asChild>
                 <Button variant="ghost" size="icon" className="p-1 h-auto w-auto">
                    <MessageSquare className="h-4 w-4" />
                 </Button>
              </TooltipTrigger>
              <TooltipContent>Reply</TooltipContent>
            </Tooltip>
          </div>
        </div>
        <div className="flex flex-col gap-4">
           {comment.replies.map(reply => (
                <CommentThread key={reply.id} comment={reply} />
           ))}
        </div>
      </div>
    </div>
  )
}
