
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
  BookOpen,
  Map,
  Briefcase,
  Atom,
  Dna,
  Globe,
  Laptop,
  Bike,
  DollarSign,
  Code,
  Music,
  Book,
  Users,
  Tractor,
  DraftingCompass,
  Palette,
  Languages,
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
  Geography: {
    icon: Map,
    topics: {
      'World Geography': [
        {
          title: 'Continents and Oceans Map',
          type: 'PDF',
          size: '8.1 MB',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'world map illustration',
        },
      ],
      'Physical Geography': [
        {
          title: 'Volcanoes Explained',
          type: 'Video',
          size: '180 MB',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'erupting volcano',
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
  Accounting: {
    icon: Briefcase,
    topics: {
      'Financial Accounting': [
        {
          title: 'Balance Sheet Template',
          type: 'XLSX',
          size: '50 KB',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'spreadsheet data',
        },
      ],
    },
  },
  Science: {
    icon: Atom,
    topics: {
      'Scientific Method': [
        {
          title: 'Lab Report Guide',
          type: 'PDF',
          size: '1.2 MB',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'science laboratory',
        },
      ],
    },
  },
  Biology: {
    icon: Dna,
    topics: {
      Genetics: [
        {
          title: 'DNA Replication Animation',
          type: 'Video',
          size: '95 MB',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'dna animation',
        },
      ],
    },
  },
  'Business studies': {
    icon: Briefcase,
    topics: {
      Marketing: [
        {
          title: 'Marketing Plan Template',
          type: 'DOCX',
          size: '120 KB',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'business plan',
        },
      ],
    },
  },
  Physics: {
    icon: Globe,
    topics: {
      'Newtonian Mechanics': [
        {
          title: "Newton's Laws of Motion",
          type: 'Video',
          size: '150 MB',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'physics diagram',
        },
      ],
    },
  },
  ICT: {
    icon: Laptop,
    topics: {
      Networking: [
        {
          title: 'OSI Model Explained',
          type: 'PDF',
          size: '2.5 MB',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'network diagram',
        },
      ],
    },
  },
  'Physical Education': {
    icon: Bike,
    topics: {
      'Health & Fitness': [
        {
          title: 'Workout Plan',
          type: 'PDF',
          size: '800 KB',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'person exercising',
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
  Economics: {
    icon: DollarSign,
    topics: {
      Microeconomics: [
        {
          title: 'Supply and Demand Curves',
          type: 'eBook',
          size: '12 MB',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'economic graph',
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
  Commerce: {
    icon: DollarSign,
    topics: {
      'E-Commerce': [
        {
          title: 'Building an Online Store',
          type: 'Video',
          size: '350 MB',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'online shopping cart',
        },
      ],
    },
  },
  'Computer Science': {
    icon: Code,
    topics: {
      'Data Structures': [
        {
          title: 'Big O Notation Cheat Sheet',
          type: 'PDF',
          size: '750 KB',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'code on screen',
        },
      ],
    },
  },
  'Performing arts': {
    icon: Music,
    topics: {
      'Music Theory': [
        {
          title: 'Circle of Fifths Interactive',
          type: 'WebApp',
          size: 'N/A',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'music notes',
        },
      ],
    },
  },
  'Religious studies': {
    icon: Book,
    topics: {
      'World Religions': [
        {
          title: 'Comparative Religions Chart',
          type: 'PDF',
          size: '3.1 MB',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'religious symbols',
        },
      ],
    },
  },
  Sociology: {
    icon: Users,
    topics: {
      'Social Theories': [
        {
          title: 'Introduction to Sociology',
          type: 'eBook',
          size: '18 MB',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'diverse group people',
        },
      ],
    },
  },
  Agriculture: {
    icon: Tractor,
    topics: {
      'Sustainable Farming': [
        {
          title: 'Crop Rotation Guide',
          type: 'PDF',
          size: '4.5 MB',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'green farm field',
        },
      ],
    },
  },
  'Design and Technology': {
    icon: DraftingCompass,
    topics: {
      'Product Design': [
        {
          title: '3D Modeling Basics',
          type: 'Video',
          size: '450 MB',
          image: 'https://placehold.co/600x400.png',
          aiHint: '3d model design',
        },
      ],
    },
  },
  'Visual Arts': {
    icon: Palette,
    topics: {
      'Drawing Techniques': [
        {
          title: 'Perspective Drawing Tutorial',
          type: 'Video',
          size: '220 MB',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'artist drawing sketch',
        },
      ],
    },
  },
  'Business English': {
    icon: Briefcase,
    topics: {
      'Professional Communication': [
        {
          title: 'Email Etiquette Guide',
          type: 'PDF',
          size: '950 KB',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'business meeting',
        },
      ],
    },
  },
  Shona: {
    icon: Languages,
    topics: {
      'Beginner Shona': [
        {
          title: 'Basic Shona Phrases',
          type: 'Audio',
          size: '10 MB',
          image: 'https://placehold.co/600x400.png',
          aiHint: 'language learning',
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
