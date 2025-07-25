import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ResourceCard } from '@/components/resources/ResourceCard';
import { Book, Film, FileText, Landmark, Code, Dna, Globe } from 'lucide-react';

const subjects = [
  {
    name: 'Mathematics',
    icon: Book,
    resources: {
      media: [
        {
          title: 'Calculus Explained',
          description:
            'An engaging video series on the fundamentals of calculus.',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'mathematics education',
        },
        {
          title: 'Algebra Basics',
          description:
            'Master the core concepts of algebra with this animated playlist.',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'algebra book',
        },
        {
          title: 'Statistics Fundamentals',
          description: 'Learn the basics of statistical analysis.',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'data charts',
        },
      ],
      documents: [
        {
          title: 'Geometry Formulas',
          description:
            'A comprehensive PDF guide to all essential geometry formulas.',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'geometry diagrams',
        },
        {
          title: 'Trigonometry Cheatsheet',
          description: 'Quick reference for trig identities and formulas.',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'mathematical formulas',
        },
      ],
    },
  },
  {
    name: 'Physics',
    icon: Globe,
    resources: {
      media: [
        {
          title: 'Quantum Mechanics Intro',
          description:
            'A documentary exploring the strange world of quantum physics.',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'quantum physics',
        },
        {
          title: 'Astrophysics Explained',
          description: 'Journey through the cosmos and explore the stars.',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'galaxy nebula',
        },
      ],
      documents: [
        {
          title: 'Thermodynamics Cheatsheet',
          description: 'Quick reference for the laws of thermodynamics.',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'science textbook',
        },
        {
          title: "Newton's Laws of Motion",
          description: 'A detailed paper on classical mechanics.',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'physics experiment',
        },
      ],
    },
  },
  {
    name: 'History',
    icon: Landmark,
    resources: {
      media: [
        {
          title: 'The Roman Empire',
          description: 'A documentary series on the rise and fall of Rome.',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'roman colosseum',
        },
      ],
      documents: [
        {
          title: 'World War II Summary',
          description: 'A comprehensive overview of the major events.',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'historical map',
        },
        {
          title: 'The Silk Road',
          description: 'Learn about the ancient trade routes.',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'desert caravan',
        },
      ],
    },
  },
  {
    name: 'Literature',
    icon: Book,
    resources: {
      media: [
        {
          title: 'Shakespeare Sonnets Reading',
          description: 'Audiobook of Shakespeare\'s most famous sonnets.',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'old books',
        },
      ],
      documents: [
        {
          title: 'Analysis of "1984"',
          description: 'An in-depth literary analysis of Orwell\'s novel.',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'dystopian city',
        },
        {
          title: 'Guide to Literary Devices',
          description: 'A handy guide to understanding literary techniques.',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'writing feather',
        },
      ],
    },
  },
  {
    name: 'Computer Science',
    icon: Code,
    resources: {
      media: [
        {
          title: 'Intro to Python',
          description: 'A beginner-friendly video course on Python.',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'code editor',
        },
        {
          title: 'How Do CPUs Work?',
          description: 'An animated explanation of computer processors.',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'computer chip',
        },
      ],
      documents: [
        {
          title: 'Data Structures & Algorithms',
          description: 'A complete guide to common DS&A.',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'network diagram',
        },
      ],
    },
  },
  {
    name: 'Biology',
    icon: Dna,
    resources: {
      media: [
        {
          title: 'The Magic of Photosynthesis',
          description: 'A visual guide to how plants create energy.',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'green leaves',
        },
      ],
      documents: [
        {
          title: 'Human Anatomy Atlas',
          description: 'A detailed PDF of the human body.',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'anatomy chart',
        },
        {
          title: 'Cellular Respiration',
          description: 'The process of energy creation in cells.',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'microscope view',
        },
      ],
    },
  },
];

export default function ResourcesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
          Resources Library
        </h1>
        <p className="mt-2 text-muted-foreground">
          Explore curated learning materials for your subjects.
        </p>
      </div>

      <Accordion
        type="single"
        collapsible
        defaultValue="item-0"
        className="w-full"
      >
        {subjects.map((subject, index) => (
          <AccordionItem key={subject.name} value={`item-${index}`}>
            <AccordionTrigger className="text-xl font-headline hover:no-underline">
              <div className="flex items-center gap-3">
                <subject.icon className="h-6 w-6 text-accent" />
                {subject.name}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Tabs defaultValue="media" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:w-96">
                  <TabsTrigger value="media">
                    <Film className="mr-2 h-4 w-4" /> Media
                  </TabsTrigger>
                  <TabsTrigger value="documents">
                    <FileText className="mr-2 h-4 w-4" /> Documents
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="media" className="mt-4">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {subject.resources.media.map((resource) => (
                      <ResourceCard key={resource.title} {...resource} />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="documents" className="mt-4">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {subject.resources.documents.map((resource) => (
                      <ResourceCard key={resource.title} {...resource} />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
