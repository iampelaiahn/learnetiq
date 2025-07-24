import { ForumListItem, type Forum } from '@/components/forums/ForumListItem';
import { Atom, Book, Globe, Landmark } from 'lucide-react';

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
];

export default function ForumsPage() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
          Community Forums
        </h1>
        <p className="mt-2 text-muted-foreground">
          Engage in discussions, ask questions, and collaborate with your peers.
        </p>
      </div>

      <div className="bg-card border rounded-lg">
        <ul className="divide-y">
            {forums.map((forum, index) => (
              <ForumListItem key={forum.subject} forum={forum} index={index + 1} />
            ))}
        </ul>
      </div>
    </div>
  );
}
