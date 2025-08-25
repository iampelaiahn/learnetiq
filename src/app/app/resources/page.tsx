import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ResourceCard } from '@/components/resources/ResourceCard';
import {
  Calculator,
  Map,
  Landmark,
  Briefcase,
  Atom,
  Dna,
  Globe,
  Laptop,
  Bike,
  FlaskConical,
  BookOpen,
  Users,
  Tractor,
  DraftingCompass,
  Palette,
  Languages,
  Code,
  Music,
  Book,
  DollarSign,
  Camera,
} from 'lucide-react';

const subjects = [
    { name: 'Mathematics', icon: Calculator, topics: [
        { name: 'Algebra', resources: [
            { title: 'Algebraic Expressions', type: 'PDF', size: '1.2 MB', image: 'https://placehold.co/600x400.png', aiHint: 'algebra equations' },
            { title: 'Solving Linear Equations', type: 'Video', size: '15.4 MB', image: 'https://placehold.co/600x400.png', aiHint: 'math tutorial' },
        ]},
        { name: 'Geometry', resources: [
            { title: 'Euclidean Geometry', type: 'PDF', size: '2.5 MB', image: 'https://placehold.co/600x400.png', aiHint: 'geometric shapes' },
        ]}
    ]},
    { name: 'Geography', icon: Map, topics: [] },
    { name: 'History', icon: Landmark, topics: [
        { name: 'Ancient Rome', resources: [
            { title: 'The Roman Republic', type: 'PDF', size: '3.1 MB', image: 'https://placehold.co/600x400.png', aiHint: 'roman history' },
            { title: 'Fall of the Empire', type: 'Video', size: '25 MB', image: 'https://placehold.co/600x400.png', aiHint: 'ancient ruins' },
        ]}
    ]},
    { name: 'Accounting', icon: Briefcase, topics: [] },
    { name: 'Science', icon: Atom, topics: [] },
    { name: 'Biology', icon: Dna, topics: [
        { name: 'Cellular Biology', resources: [
            { title: 'The Animal Cell', type: 'Interactive', size: '5.2 MB', image: 'https://placehold.co/600x400.png', aiHint: 'cell diagram' },
        ]}
    ]},
    { name: 'Business studies', icon: Briefcase, topics: [] },
    { name: 'Physics', icon: Globe, topics: [] },
    { name: 'ICT', icon: Laptop, topics: [] },
    { name: 'Physical Education', icon: Bike, topics: [] },
    { name: 'Chemistry', icon: FlaskConical, topics: [] },
    { name: 'Economics', icon: DollarSign, topics: [] },
    { name: 'English Literature', icon: BookOpen, topics: [] },
    { name: 'Commerce', icon: DollarSign, topics: [] },
    { name: 'Computer Science', icon: Code, topics: [
      { name: 'Programming', resources: [
          { title: 'Intro to Python', type: 'eBook', size: '4.8 MB', image: 'https://placehold.co/600x400.png', aiHint: 'python code' },
          { title: 'Data Structures', type: 'PDF', size: '2.1 MB', image: 'https://placehold.co/600x400.png', aiHint: 'flow chart' },
      ]}
    ]},
    { name: 'Performing arts', icon: Music, topics: [] },
    { name: 'Religious studies', icon: Book, topics: [] },
    { name: 'Sociology', icon: Users, topics: [] },
    { name: 'Agriculture', icon: Tractor, topics: [] },
    { name: 'Design and Technology', icon: DraftingCompass, topics: [] },
    { name: 'Visual Arts', icon: Palette, topics: [] },
    { name: 'Business English', icon: Briefcase, topics: [] },
    { name: 'Shona', icon: Languages, topics: [] },
];

export default function ResourcesPage() {
  return (
    <div className="w-full space-y-8">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
          Resources Library
        </h1>
        <p className="mt-2 text-muted-foreground">
          Explore curated learning materials for your subjects.
        </p>
      </div>

      <Accordion
        type="multiple"
        defaultValue={['item-0']}
        className="w-full space-y-4"
      >
        {subjects.map((subject, index) => (
          <AccordionItem key={subject.name} value={`item-${index}`} className="border rounded-lg bg-card overflow-hidden">
            <AccordionTrigger className="text-xl font-headline hover:no-underline px-6 py-4">
              <div className="flex items-center gap-3">
                <subject.icon className="h-6 w-6 text-accent" />
                {subject.name}
              </div>
            </AccordionTrigger>
            <AccordionContent className="bg-muted/50">
                {subject.topics.length > 0 ? (
                    <div className="p-6">
                        <Accordion type="multiple" className="space-y-4">
                        {subject.topics.map((topic, topicIndex) => (
                            <AccordionItem key={topic.name} value={`topic-${index}-${topicIndex}`} className="border rounded-lg bg-background overflow-hidden">
                                <AccordionTrigger className="font-semibold hover:no-underline px-4 py-3">
                                    {topic.name}
                                </AccordionTrigger>
                                <AccordionContent className="p-4 border-t">
                                     <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                        {topic.resources.map((resource) => (
                                            <ResourceCard key={resource.title} {...resource} />
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                        </Accordion>
                    </div>
                ): (
                    <div className="p-6 text-center text-muted-foreground">
                        No resources available for this subject yet.
                    </div>
                )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
