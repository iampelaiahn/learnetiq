
'use client';
import { PostCard, type Post } from '@/components/forums/PostCard';
import { Button } from '@/components/ui/button';
import {
  Code,
  Atom,
  Landmark,
  Globe,
  Dna,
  Bot,
  DollarSign,
  Paintbrush,
  Music,
  GraduationCap,
  Book,
  Scale,
  Plus,
  MoreHorizontal
} from 'lucide-react';
import Image from 'next/image';
import { CommunitySidebar } from '@/components/forums/CommunitySidebar';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

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
  ],
  Physics: [
    {
      id: '5',
      author: 'quantum_quark',
      timestamp: '4 days ago',
      title: "What's your favorite interpretation of quantum mechanics?",
      content: 'Copenhagen? Many-Worlds? Pilot-Wave? There are so many fascinating ways to think about the nature of reality at the quantum level. What clicks best for you and why?',
      upvotes: 321,
      commentCount: 1,
      comments: [
        {
          id: 'c7',
          author: 'everett_fan',
          timestamp: '4 days ago',
          content: "Many-Worlds, all the way. It's the most elegant and avoids the measurement problem. The idea of parallel universes is mind-bending in the best way.",
          upvotes: 50,
        },
      ]
    },
  ],
  Literature: [
    {
      id: '6',
      author: 'bookworm_bella',
      timestamp: '6 days ago',
      title: 'A character you love from a book you hated?',
      content: "Have you ever found a literary gem of a character stuck in a plot you just couldn't get through? I'm curious to hear about these standout characters.",
      upvotes: 189,
      commentCount: 1,
      comments: [
        {
          id: 'c8',
          author: 'page_turner_pete',
          timestamp: '6 days ago',
          content: "Holden Caulfield from 'The Catcher in the Rye'. I found the book itself a bit whiny, but his character is an unforgettable icon of teenage angst.",
          upvotes: 42,
        },
      ]
    },
  ],
  Biology: [
    {
      id: '7',
      author: 'cell_savvy',
      timestamp: '1 week ago',
      title: 'The CRISPR revolution: are we moving too fast?',
      content: "Gene editing technology like CRISPR has the potential to cure genetic diseases, but also raises serious ethical questions. What are your thoughts on the pace of research and its application?",
      upvotes: 550,
      commentCount: 1,
      comments: [
        {
          id: 'c9',
          author: 'bioethicist_brian',
          timestamp: '1 week ago',
          content: "It's a powerful tool that demands careful regulation. The potential for good is immense, but we need a global consensus on ethical boundaries before we see widespread use in humans.",
          upvotes: 120,
        },
      ]
    },
  ],
  'AI & Robotics': [
    {
      id: '8',
      author: 'robot_wrangler',
      timestamp: '2 days ago',
      title: 'What is the most impressive real-world robotics application you\'ve seen?',
      content: 'Beyond the Roomba, what robotic systems have genuinely amazed you? Thinking of things like the Boston Dynamics robots, surgical robots, or automated warehouse systems.',
      upvotes: 730,
      commentCount: 1,
      comments: [
        {
          id: 'c10',
          author: 'future_is_now',
          timestamp: '2 days ago',
          content: 'The Da Vinci surgical system. It allows surgeons to perform complex procedures with incredible precision. It feels like science fiction made real.',
          upvotes: 150,
        },
      ]
    }
  ],
  Economics: [
    {
      id: '9',
      author: 'market_maven',
      timestamp: '10 days ago',
      title: 'Behavioral Economics: What\'s the most interesting cognitive bias?',
      content: "From anchoring to the sunk cost fallacy, our brains are full of quirks that affect our financial decisions. Which bias do you find most fascinating or see most often in your own life?",
      upvotes: 240,
      commentCount: 1,
      comments: [
        {
          id: 'c11',
          author: 'rational_actor',
          timestamp: '10 days ago',
          content: 'The IKEA effect. The fact that you place a disproportionately high value on things you partially created yourself explains so much about consumer behavior and personal attachment to products.',
          upvotes: 65,
        },
      ]
    }
  ],
  Philosophy: [
    {
      id: '10',
      author: 'stoic_student',
      timestamp: '5 days ago',
      title: 'If you could ask one philosopher one question, who and what would you ask?',
      content: "Imagine having a conversation with any philosopher from history. Who would you choose, and what's the one burning question you'd ask them?",
      upvotes: 411,
      commentCount: 1,
      comments: [
        {
          id: 'c12',
          author: 'sartre_fan',
          timestamp: '5 days ago',
          content: "I'd ask Socrates to define 'justice' and then just sit back and watch the master at work for a few hours.",
          upvotes: 88,
        },
      ]
    }
  ],
  'Art History': [
    {
      id: '11',
      author: 'canvas_connoisseur',
      timestamp: '8 days ago',
      title: 'Which art movement do you think was the most revolutionary?',
      content: 'From Impressionism shattering academic traditions to Cubism breaking down form, many movements have changed the course of art history. Which one do you believe had the most profound and lasting impact?',
      upvotes: 315,
      commentCount: 1,
      comments: [
        {
          id: 'c13',
          author: 'dadaist_dreamer',
          timestamp: '8 days ago',
          content: "Dadaism. It wasn't just a new style; it was a radical questioning of what art even is. Its anti-art stance paved the way for so much of conceptual art and postmodernism.",
          upvotes: 72,
        },
      ]
    }
  ],
  'Music Theory': [
    {
      id: '12',
      author: 'maestro_mike',
      timestamp: '3 days ago',
      title: 'What\'s a piece of music with a fascinating use of harmony or theory?',
      content: "Looking for examples of music (any genre!) that does something really clever or beautiful from a theory perspective. Could be a cool chord progression, a unique modulation, or interesting counterpoint.",
      upvotes: 280,
      commentCount: 1,
      comments: [
        {
          id: 'c14',
          author: 'jazz_cat',
          timestamp: '3 days ago',
          content: "Jacob Collier's arrangement of 'Moon River'. The reharmonization is absolutely genius and takes you on a wild, beautiful journey.",
          upvotes: 60,
        },
      ]
    }
  ],
  'Social Sciences': [
    {
      id: '13',
      author: 'culture_critic',
      timestamp: '12 days ago',
      title: "What social experiment has given you the most insight into human nature?",
      content: "From the Milgram experiment to the Stanford prison experiment (and less ethically dubious ones!), what study has really stuck with you and changed how you see society or individuals?",
      upvotes: 480,
      commentCount: 1,
      comments: [
        {
          id: 'c15',
          author: 'observer101',
          timestamp: '12 days ago',
          content: "The 'Violinist at the Metro' experiment by The Washington Post. The fact that so few people stopped to appreciate a world-class musician playing a masterpiece for free because the context was all wrong is a powerful lesson in how we perceive value and beauty.",
          upvotes: 110,
        },
      ]
    }
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


function ForumSubjectView({ subject }: { subject: string }) {
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

export default function ForumSubjectPage() {
  const params = useParams();
  const [subject, setSubject] = useState<string | null>(null);

  useEffect(() => {
    if (params.subject && typeof params.subject === 'string') {
      setSubject(decodeURIComponent(params.subject));
    }
  }, [params.subject]);

  if (!subject) {
    return <div>Loading...</div>; // Or a skeleton loader
  }

  return <ForumSubjectView subject={subject} />;
}

    