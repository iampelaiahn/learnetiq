'use client';

import { GraduationCap } from 'lucide-react';
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
  { subject: 'Mathematics', rate: 95 },
  { subject: 'Physics', rate: 88 },
  { subject: 'History', rate: 92 },
  { subject: 'Literature', rate: 98 },
  { subject: 'Science', rate: 91 },
  { subject: 'Computer Science', rate: 96 },
];

const chartConfig = {
  rate: {
    label: 'Pass Rate',
    color: 'hsl(var(--primary))',
  },
} satisfies ChartConfig;

export function StudentPassRateChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-accent" />
          Student Pass Rate by Subject
        </CardTitle>
        <CardDescription>
          Average pass rate for students across different subjects.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-auto aspect-[16/9]">
          <ChartContainer
            config={chartConfig}
            className="min-h-[200px] w-full"
          >
            <BarChart
              accessibilityLayer
              data={chartData}
              layout="vertical"
              margin={{
                left: 10,
                right: 20,
              }}
            >
              <CartesianGrid horizontal={false} />
              <YAxis
                dataKey="subject"
                type="category"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                width={120}
              />
              <XAxis
                type="number"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => `${value}%`}
                domain={[0, 100]}
              />
              <Tooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" />}
              />
              <Bar dataKey="rate" fill="var(--color-rate)" radius={4} />
            </BarChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
