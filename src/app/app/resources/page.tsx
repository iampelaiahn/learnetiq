import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ResourceCard } from '@/components/resources/ResourceCard';
import { Book, Film, FileText } from 'lucide-react';

const subjects = [
  {
    name: 'Mathematics',
    icon: Book,
    resources: {
      media: [
        {
          title: 'Calculus Explained',
          description: 'An engaging video series on the fundamentals of calculus.',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'mathematics education',
        },
        {
          title: 'Algebra Basics',
          description: 'Master the core concepts of algebra with this animated playlist.',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'algebra book',
        },
      ],
      documents: [
        {
          title: 'Geometry Formulas',
          description: 'A comprehensive PDF guide to all essential geometry formulas.',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'geometry diagrams',
        },
      ],
    },
  },
  {
    name: 'Physics',
    icon: Film,
    resources: {
      media: [
        {
          title: 'Quantum Mechanics Intro',
          description: 'A documentary exploring the strange world of quantum physics.',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'quantum physics',
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

      <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
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
