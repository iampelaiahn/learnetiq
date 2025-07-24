'use client';

import * as React from 'react';
import { ForumCard, type Forum } from '@/components/forums/ForumCard';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import {
  Atom,
  Book,
  Globe,
  Landmark,
  Code,
  Dna,
  Bot,
  DollarSign,
  Scale,
  Palette,
  Music,
  GraduationCap,
  Paintbrush,
} from 'lucide-react';

const categories = [
  { name: 'All', icon: undefined },
  { name: 'Science & Tech', icon: Atom },
  { name: 'Humanities', icon: Landmark },
  { name: 'Arts', icon: Palette },
  { name: 'Social Sciences', icon: GraduationCap },
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
    category: 'Science & Tech',
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
    category: 'Humanities',
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
    category: 'Science & Tech',
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
    category: 'Humanities',
  },
  {
    subject: 'Computer Science',
    description: 'From algorithms to AI, discuss the world of computing.',
    icon: Code,
    members: 22000,
    posts: [
      'What is the best language for a beginner?',
      'How do neural networks work?',
    ],
    category: 'Science & Tech',
  },
  {
    subject: 'Biology',
    description: 'Explore the science of life and living organisms.',
    icon: Dna,
    members: 9500,
    posts: ['CRISPR gene editing is fascinating.', 'The Krebs cycle explained.'],
    category: 'Science & Tech',
  },
  {
    subject: 'AI & Robotics',
    description:
      'The future is now. Discuss artificial intelligence and robotics.',
    icon: Bot,
    members: 18000,
    posts: ['Will AGI be achieved this decade?', 'Building my first robot arm.'],
    category: 'Science & Tech',
  },
  {
    subject: 'Economics',
    description: 'From micro to macro, discuss the world of economics.',
    icon: DollarSign,
    members: 7200,
    posts: [
      'Supply and demand in the modern age.',
      'What is the future of cryptocurrency?',
    ],
    category: 'Social Sciences',
  },
  {
    subject: 'Philosophy',
    description: 'Ponder the fundamental questions of existence.',
    icon: Scale,
    members: 5300,
    posts: ['Free will vs. determinism.', 'Stoicism in the 21st century.'],
    category: 'Humanities',
  },
  {
    subject: 'Art History',
    description: 'From Renaissance to contemporary, explore the world of art.',
    icon: Paintbrush,
    members: 4100,
    posts: ['The impact of Impressionism.', 'Symbolism in Frida Kahlo\'s work.'],
    category: 'Arts',
  },
  {
    subject: 'Music Theory',
    description: 'Deconstruct the language of music.',
    icon: Music,
    members: 6200,
    posts: [
      'The beauty of the circle of fifths.',
      'What makes a chord progression satisfying?',
    ],
    category: 'Arts',
  },
];

export default function ForumsPage() {
  const [showMore, setShowMore] = React.useState<Record<string, boolean>>({});

  const handleShowMore = (category: string) => {
    setShowMore((prev) => ({ ...prev, [category]: true }));
  };

  const popularForums = [...forums].sort((a, b) => b.members - a.members).slice(0, 4);
  const forumsByCategory = forums.reduce((acc, forum) => {
    if (!acc[forum.category]) {
      acc[forum.category] = [];
    }
    acc[forum.category].push(forum);
    return acc;
  }, {} as Record<string, Forum[]>);


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
            <Button
              key={category.name}
              variant={index === 0 ? 'default' : 'outline'}
              className="rounded-full"
            >
              {category.icon && <category.icon className="mr-2 h-4 w-4" />}
              {category.name}
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <div>
        <h2 className="text-xl font-bold font-headline mb-4">
          Popular Communities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {popularForums.map((forum) => (
            <ForumCard key={forum.subject} forum={forum} />
          ))}
        </div>
      </div>

      {Object.entries(forumsByCategory).map(([category, categoryForums]) => (
        <div key={category}>
          <h2 className="text-xl font-bold font-headline mb-4">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(showMore[category]
              ? categoryForums
              : categoryForums.slice(0, 4)
            ).map((forum) => (
              <ForumCard key={forum.subject} forum={forum} />
            ))}
          </div>
          {!showMore[category] && categoryForums.length > 4 && (
            <div className="mt-4 flex justify-center">
              <Button variant="outline" onClick={() => handleShowMore(category)}>
                Show more
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}