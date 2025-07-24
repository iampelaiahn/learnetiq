import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import type { LucideIcon } from 'lucide-react';

type SubjectProgressCardProps = {
  subject: string;
  progress: number;
  icon: LucideIcon;
  color: string;
};

export function SubjectProgressCard({
  subject,
  progress,
  icon: Icon,
  color,
}: SubjectProgressCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{subject}</CardTitle>
        <Icon className={`h-5 w-5 ${color}`} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{progress}%</div>
        <p className="text-xs text-muted-foreground">Completed</p>
        <Progress value={progress} className="mt-4 h-2" />
      </CardContent>
    </Card>
  );
}
