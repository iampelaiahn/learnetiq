import { DetailedProgressCard } from '@/components/dashboard/DetailedProgressCard';
import { AiTutorAssistant } from '@/components/dashboard/AiTutorAssistant';
import { UpcomingClassCard } from '@/components/dashboard/UpcomingClassCard';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Brain } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const subjectsData = [
  {
    subject: 'Mathematics',
    overallProgress: 75,
    topics: [
      { name: 'Algebra', progress: 90 },
      { name: 'Calculus', progress: 60 },
      { name: 'Geometry', progress: 75 },
    ],
    autoplayDelay: 2000,
  },
  {
    subject: 'Physics',
    overallProgress: 60,
    topics: [
      { name: 'Mechanics', progress: 70 },
      { name: 'E & M', progress: 50 },
      { name: 'Thermodynamics', progress: 60 },
    ],
    autoplayDelay: 3000,
  },
  {
    subject: 'History',
    overallProgress: 88,
    topics: [
      { name: 'Ancient Rome', progress: 95 },
      { name: 'World War II', progress: 80 },
      { name: 'Silk Road', progress: 90 },
    ],
    autoplayDelay: 4000,
  },
];


export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="text-center md:text-left">
        <h1 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
          Welcome back, Alex!
        </h1>
        <p className="mt-2 text-muted-foreground">
          Here's your learning snapshot for today. Keep up the great work!
        </p>
      </div>

      <Card className="bg-primary/5">
        <CardHeader className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
          <Brain className="h-12 w-12 text-accent" />
          <div>
            <CardTitle className="font-headline text-2xl">
              AI-Powered Study Panel
            </CardTitle>
            <CardDescription>
              Choose a subject to get key concepts, resources, and answers from your AI Study Buddy.
            </CardDescription>
          </div>
          <Button asChild size="lg" className="md:ml-auto">
            <Link href="/app/study">Go to Study Panel</Link>
          </Button>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {subjectsData.map((subject) => (
            <Link href={`/app/forums/${encodeURIComponent(subject.subject)}`} key={subject.subject} className="block hover:scale-[1.02] transition-transform duration-200">
                <DetailedProgressCard {...subject} />
            </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <AiTutorAssistant />
        </div>
        <div className="lg:col-span-1">
          <UpcomingClassCard />
        </div>
      </div>
    </div>
  );
}
