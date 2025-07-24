import { ForumCard, type Forum } from '@/components/forums/ForumCard';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Atom, Book, Globe, Landmark, Code, Dna, Bot } from 'lucide-react';

const categories = [
    { name: 'All', icon: undefined },
    { name: 'Science', icon: Atom },
    { name: 'Humanities', icon: Landmark },
    { name: 'Technology', icon: Code },
    { name: 'Arts', icon: Book },
];

const forums: Forum[] = [
  {
    subject: 'Mathematics',
    description: 'Discuss all things math, from algebra to calculus.',
    icon: Atom,
    members: 12000,
    posts: [
      'Anyone have tips for solving differential equations?',
      'Just posted a new proof for the Pythagorean theorem!',
      'What are some real-world applications of trigonometry?',
    ],
  },
  {
    subject: 'History',
    description: 'Explore the past, from ancient civilizations to modern times.',
    icon: Landmark,
    members: 8500,
    posts: [
      'Debating the causes of the fall of the Roman Empire.',
      'Just learned about the Silk Road, fascinating!',
      'Who was the most influential leader of the 20th century?',
    ],
  },
  {
    subject: 'Physics',
    description: 'Dive into the laws that govern the universe.',
    icon: Globe,
    members: 15000,
    posts: [
      'Can someone explain quantum entanglement in simple terms?',
      "I'm struggling with Newton's laws of motion.",
      'The latest images from the James Webb Telescope are mind-blowing.',
    ],
  },
  {
    subject: 'Literature',
    description: 'Analyze great works of fiction, poetry, and prose.',
    icon: Book,
    members: 6800,
    posts: [
      'What are your thoughts on the ending of "1984"?',
      'Shakespeare vs. Dickens: who was the better writer?',
      'Recommending a great collection of short stories I just read.',
    ],
  },
  {
    subject: 'Computer Science',
    description: 'From algorithms to AI, discuss the world of computing.',
    icon: Code,
    members: 22000,
    posts: ['What is the best language for a beginner?', 'How do neural networks work?'],
  },
    {
    subject: 'Biology',
    description: 'Explore the science of life and living organisms.',
    icon: Dna,
    members: 9500,
    posts: ['CRISPR gene editing is fascinating.', 'The Krebs cycle explained.'],
  },
    {
    subject: 'AI & Robotics',
    description: 'The future is now. Discuss artificial intelligence and robotics.',
    icon: Bot,
    members: 18000,
    posts: ['Will AGI be achieved this decade?', 'Building my first robot arm.'],
  },
];

export default function ForumsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
          Explore Communities
        </h1>
      </div>

      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex w-max space-x-2 pb-4">
            {categories.map((category, index) => (
                <Button key={category.name} variant={index === 0 ? 'default' : 'outline'} className="rounded-full">
                    {category.icon && <category.icon className="mr-2 h-4 w-4" />}
                    {category.name}
                </Button>
            ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      
      <div>
        <h2 className="text-xl font-bold font-headline mb-4">Popular Communities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {forums.slice(0, 4).map((forum) => (
                <ForumCard key={forum.subject} forum={forum} />
            ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold font-headline mb-4">Science &amp; Tech</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {forums.filter(f => ['Mathematics', 'Physics', 'Computer Science', 'Biology', 'AI & Robotics'].includes(f.subject)).slice(0, 4).map((forum) => (
                <ForumCard key={forum.subject} forum={forum} />
            ))}
        </div>
        <div className="mt-4 flex justify-center">
            <Button variant="outline">Show more</Button>
        </div>
      </div>
      
       <div>
        <h2 className="text-xl font-bold font-headline mb-4">Humanities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {forums.filter(f => ['History', 'Literature'].includes(f.subject)).map((forum) => (
                <ForumCard key={forum.subject} forum={forum} />
            ))}
        </div>
      </div>

    </div>
  );
}
