import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Book,
  Globe,
  Landmark,
  Code,
  Dna,
  Atom,
  Bot,
  DollarSign,
  Paintbrush,
  Music,
  Scale,
} from 'lucide-react';
import Link from 'next/link';

const subjects = [
  {
    name: 'Mathematics',
    icon: Atom,
    description: 'Explore concepts from Algebra to Calculus.',
    href: '/app/study/Mathematics',
  },
  {
    name: 'History',
    icon: Landmark,
    description: 'Journey through the annals of time.',
    href: '/app/study/History',
  },
  {
    name: 'Physics',
    icon: Globe,
    description: 'Understand the fundamental laws of the universe.',
    href: '/app/study/Physics',
  },
  {
    name: 'Literature',
    icon: Book,
    description: 'Analyze the greatest works of human imagination.',
    href: '/app/study/Literature',
  },
  {
    name: 'Computer Science',
    icon: Code,
    description: 'Dive into the world of algorithms, data, and computation.',
    href: '/app/study/Computer%20Science',
  },
  {
    name: 'Biology',
    icon: Dna,
    description: 'Uncover the secrets of life and living organisms.',
    href: '/app/study/Biology',
  },
  {
    name: 'AI & Robotics',
    icon: Bot,
    description: 'Explore the cutting-edge of artificial intelligence.',
    href: '/app/study/AI%20&%20Robotics',
  },
  {
    name: 'Economics',
    icon: DollarSign,
    description: 'Study the systems of production and consumption.',
    href: '/app/study/Economics',
  },
  {
    name: 'Philosophy',
    icon: Scale,
    description: 'Ponder the big questions of existence and knowledge.',
    href: '/app/study/Philosophy',
  },
  {
    name: 'Art History',
    icon: Paintbrush,
    description: 'Discover the stories behind the world\'s greatest art.',
    href: '/app/study/Art%20History',
  },
  {
    name: 'Music Theory',
    icon: Music,
    description: 'Learn the language of melodies and harmonies.',
    href: '/app/study/Music%20Theory',
  },
];

export default function StudyPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
          Choose a Subject to Study
        </h1>
        <p className="mt-2 text-muted-foreground">
          Select a subject to access a personalized study panel.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {subjects.map((subject) => (
          <Link href={subject.href} key={subject.name}>
            <Card className="h-full transform transition-transform duration-200 hover:scale-[1.03] hover:bg-muted/50">
              <CardHeader className="flex flex-row items-center gap-4">
                <subject.icon className="h-10 w-10 text-accent" />
                <div>
                  <CardTitle className="font-headline text-xl">
                    {subject.name}
                  </CardTitle>
                  <CardDescription>{subject.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
