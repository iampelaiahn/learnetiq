import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

type MetricCardProps = {
  label: string;
  value: string;
  icon: LucideIcon;
  color: string;
};

export function MetricCard({ label, value, icon: Icon, color }: MetricCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{label}</CardTitle>
        <Icon className={`h-5 w-5 ${color}`} />
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold text-primary">{value}</div>
      </CardContent>
    </Card>
  );
}
