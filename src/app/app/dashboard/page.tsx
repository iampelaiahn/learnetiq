import { SubjectProgressCard } from '@/components/dashboard/SubjectProgressCard';
import { AiTutorAssistant } from '@/components/dashboard/AiTutorAssistant';
import { UpcomingClassCard } from '@/components/dashboard/UpcomingClassCard';
import { BookOpen, Percent, Target } from 'lucide-react';

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

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <SubjectProgressCard
          subject="Mathematics"
          progress={75}
          icon={BookOpen}
          color="text-blue-500"
        />
        <SubjectProgressCard
          subject="Physics"
          progress={60}
          icon={Percent}
          color="text-green-500"
        />
        <SubjectProgressCard
          subject="History"
          progress={88}
          icon={Target}
          color="text-purple-500"
        />
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
