
'use client';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltipContent,
} from '@/components/ui/chart';

const chartData = [
  { subject: 'Calculus I', score: 88 },
  { subject: 'Quantum Physics', score: 72 },
  { subject: 'Shakespeare', score: 95 },
  { subject: 'Renaissance', score: 81 },
  { subject: 'Statistics', score: 78 },
];

const chartConfig = {
  score: {
    label: 'Average Score',
    color: 'hsl(var(--accent))',
  },
} satisfies ChartConfig;

export function ClassPerformanceChart() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="font-headline">Class Performance</CardTitle>
        <CardDescription>Average student scores across your classes.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ChartContainer config={chartConfig}>
            <BarChart 
              accessibilityLayer 
              data={chartData}
              layout="vertical"
              margin={{ left: 20, right: 20 }}
            >
              <CartesianGrid horizontal={false} />
              <YAxis
                dataKey="subject"
                type="category"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                width={100}
                className="text-xs"
              />
              <XAxis 
                type="number"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                domain={[0,100]}
              />
              <Tooltip cursor={true} content={<ChartTooltipContent indicator="dot"/>} />
              <Bar dataKey="score" fill="var(--color-score)" radius={4} />
            </BarChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
