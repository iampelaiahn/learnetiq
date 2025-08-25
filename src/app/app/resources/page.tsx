
'use client';

import * as React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ResourceCard } from '@/components/resources/ResourceCard';
import {
  Calculator,
  FlaskConical,
  Landmark,
  FileText,
  Video,
  BookOpen,
} from 'lucide-react';
import { Card } from '@/components/ui/card';

const resourcesData = {
  Mathematics: {
    icon: Calculator,
    topics: {
      Algebra: [
        {
          title: 'Algebra I Workbook',
          type: 'PDF',
          size: '5.2 MB',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'algebra equations',
        },
        {
          title: 'Introduction to Polynomials',
          type: 'Video',
          size: '120 MB',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'math lecture',
        },
      ],
      Geometry: [
        {
          title: 'Euclidean Geometry Basics',
          type: 'eBook',
          size: '15 MB',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'geometric shapes',
        },
      ],
    },
  },
  Chemistry: {
    icon: FlaskConical,
    topics: {
      'Organic Chemistry': [
        {
          title: 'Functional Groups Chart',
          type: 'PDF',
          size: '1.5 MB',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'molecular structure',
        },
      ],
      'Physical Chemistry': [
        {
          title: 'Thermodynamics Lecture',
          type: 'Video',
          size: '250 MB',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'chemistry experiment',
        },
      ],
    },
  },
  History: {
    icon: Landmark,
    topics: {
      'Ancient Rome': [
        {
          title: 'The Roman Republic',
          type: 'eBook',
          size: '25 MB',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'roman colosseum',
        },
        {
          title: 'Primary Sources: Letters of Cicero',
          type: 'DOCX',
          size: '300 KB',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'ancient scroll',
        },
      ],
    },
  },
  'English Literature': {
    icon: BookOpen,
    topics: {
      Shakespeare: [
        {
          title: 'Hamlet: Full Text',
          type: 'PDF',
          size: '2.1 MB',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'shakespeare play',
        },
        {
          title: 'Understanding Sonnets',
          type: 'Audio',
          size: '15 MB',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'audio waves',
        },
      ],
    },
  },
};

const SubjectAccordion = ({
  subject,
  data,
}: {
  subject: string;
  data: (typeof resourcesData)[keyof typeof resourcesData];
}) => {
  const Icon = data.icon;
  return (
    <AccordionItem value={subject} className="border-none">
       <Card className="overflow-hidden">
        <AccordionTrigger className="text-xl font-headline hover:no-underline px-6 py-4">
          <div className="flex items-center gap-3">
            <Icon className="h-6 w-6 text-accent" />
            <span>{subject}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="bg-muted/50 p-4 md:p-6">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {Object.entries(data.topics).map(([topic, resources]) => (
              <AccordionItem value={topic} key={topic} className="border-none">
                 <Card className="overflow-hidden">
                    <AccordionTrigger className="text-lg font-semibold px-6 hover:no-underline">
                        {topic}
                    </AccordionTrigger>
                    <AccordionContent className="p-4 md:p-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                            {resources.map((resource, index) => (
                                <ResourceCard key={index} {...resource} />
                            ))}
                        </div>
                    </AccordionContent>
                 </Card>
              </AccordionItem>
            ))}
          </Accordion>
        </AccordionContent>
      </Card>
    </AccordionItem>
  );
};

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

      <Accordion type="multiple" className="space-y-4">
        {Object.entries(resourcesData).map(([subject, data]) => (
          <SubjectAccordion key={subject} subject={subject} data={data} />
        ))}
      </Accordion>
    </div>
  );
}
