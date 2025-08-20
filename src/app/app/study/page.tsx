'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
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
  Map,
  Briefcase,
  Calculator,
  Laptop,
  Bike,
  FlaskConical,
  BookOpen,
  Users,
  Tractor,
  DraftingCompass,
  Camera,
  Languages,
} from 'lucide-react';

const subjects = [
  { name: 'Mathematics', icon: Calculator, description: 'Explore numbers, structures, and space.' },
  { name: 'Geography', icon: Map, description: 'Discover the world and its features.' },
  { name: 'History', icon: Landmark, description: 'Learn from the events of the past.' },
  { name: 'Accounting', icon: Briefcase, description: 'Understand financial information.' },
  { name: 'Science', icon: Atom, description: 'Investigate the natural and physical world.' },
  { name: 'Biology', icon: Dna, description: 'Study life and living organisms.' },
  { name: 'Business studies', icon: Briefcase, description: 'Learn the principles of business.' },
  { name: 'Physics', icon: Globe, description: 'Explore matter, energy, and forces.' },
  { name: 'ICT', icon: Laptop, description: 'Dive into information and communication.' },
  { name: 'Physical Education', icon: Bike, description: 'Engage in physical activity and sport.' },
  { name: 'Chemistry', icon: FlaskConical, description: 'Study substances and their properties.' },
  { name: 'Economics', icon: DollarSign, description: 'Analyze production, distribution, and consumption.' },
  { name: 'English Literature', icon: BookOpen, description: 'Explore classic and modern literary works.' },
  { name: 'Commerce', icon: DollarSign, description: 'Learn about trade and business activities.' },
  { name: 'Computer Science', icon: Code, description: 'Delve into computation and information.' },
  { name: 'Performing arts', icon: Music, description: 'Express creativity through performance.' },
  { name: 'Religious studies', icon: Book, description: 'Examine different beliefs and religions.' },
  { name: 'Sociology', icon: Users, description: 'Study social behavior and society.' },
  { name: 'Agriculture', icon: Tractor, description: 'Learn about farming and cultivation.' },
  { name: 'Design and Technology', icon: DraftingCompass, description: 'Create and innovate with technology.' },
  { name: 'Visual Arts', icon: Palette, description: 'Express ideas through visual mediums.' },
  { name: 'Business English', icon: Briefcase, description: 'Master English for the professional world.' },
  { name: 'Shona', icon: Languages, description: 'Learn the language and culture of the Shona people.' },
];

export default function StudyPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
          Study Panel
        </h1>
        <p className="mt-2 text-muted-foreground">
          Select a subject to start your learning journey.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {subjects.map((subject) => (
          <Link href={`/app/courses/${encodeURIComponent(subject.name)}`} key={subject.name}>
            <Card className="flex h-full flex-col justify-between transition-transform duration-200 hover:scale-105 hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex justify-center">
                  <subject.icon className="h-12 w-12 text-accent" />
                </div>
                <CardTitle className="text-center">{subject.name}</CardTitle>
                <CardDescription className="text-center text-xs">
                  {subject.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
