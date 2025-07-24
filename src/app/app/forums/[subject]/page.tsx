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
  author: 'dev_guru',
  timestamp: '2 days ago',
  title: 'What is the best language for a beginner?',
  content: "I'm looking to get into programming and I'm not sure where to start. I've heard Python is good for beginners, but I've also seen a lot of job postings for JavaScript. What do you all think? I'm interested in web development, but also want something that's versatile.",
  upvotes: 256,
  comments: [
    {
      id: 'c1',
      author: 'frontend_master',
      timestamp: '1 day ago',
      content:
        'If you\'re interested in web development, you can\'t go wrong with JavaScript. It\'s the language of the web, and with frameworks like React and Vue, you can build some amazing things.',
      upvotes: 78,
      replies: [
        {
          id: 'c1_1',
          author: 'py_fan',
          timestamp: '1 day ago',
          content: 'I agree that JavaScript is essential for web dev, but I still think Python is a better starting point. The syntax is much cleaner and easier to learn. You can always pick up JavaScript later.',
          upvotes: 45,
          replies: []
        }
      ]
    },
    {
      id: 'c2',
      author: 'data_nerd',
      timestamp: '22 hours ago',
      content:
        'Python is definitely the way to go for data science and machine learning. If that\'s a path you\'re considering, starting with Python will give you a huge head start.',
      upvotes: 61,
      replies: []
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
