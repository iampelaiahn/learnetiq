import { MetricCard } from '@/components/progress/MetricCard';
import { OverallProgressChart } from '@/components/progress/OverallProgressChart';
import { SubjectPerformanceChart } from '@/components/progress/SubjectPerformanceChart';
import { Award, BookCheck, Clock } from 'lucide-react';
import Link from 'next/link';

const overallProgressData = [
  { date: 'Jan', completion: 10 },
  { date: 'Feb', completion: 20 },
  { date: 'Mar', completion: 35 },
  { date: 'Apr', completion: 50 },
  { date: 'May', completion: 60 },
  { date: 'Jun', completion: 75 },
];

const subjectPerformanceData = [
  { subject: 'Mathematics', score: 88, link: '/app/courses/Mathematics' },
  { subject: 'Physics', score: 72, link: '/app/courses/Physics' },
  { subject: 'History', score: 95, link: '/app/courses/History' },
  { subject: 'English Literature', score: 81, link: '/app/courses/English%20Literature' },
  { subject: 'Chemistry', score: 65, link: '/app/courses/Chemistry' },
  { subject: 'Biology', score: 78, link: '/app/courses/Biology' },
];

export default function ProgressPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
          Your Progress
        </h1>
        <p className="mt-2 text-muted-foreground">
          Track your performance and learning journey.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Link href="/app/courses">
            <MetricCard
              label="Courses Completed"
              value="12"
              icon={BookCheck}
              color="text-green-500"
            />
        </Link>
        <Link href="#">
             <MetricCard
              label="Average Score"
              value="85%"
              icon={Award}
              color="text-blue-500"
            />
        </Link>
        <Link href="/app/courses">
            <MetricCard
              label="Study Time (Weekly)"
              value="14 hours"
              icon={Clock}
              color="text-purple-500"
            />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <OverallProgressChart data={overallProgressData} />
        <SubjectPerformanceChart data={subjectPerformanceData} />
      </div>
    </div>
  );
}
