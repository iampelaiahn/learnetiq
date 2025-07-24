'use client';

import { TrendingUp } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltipContent,
} from '@/components/ui/chart';

const chartData = [
  { month: 'January', students: 1860 },
  { month: 'February', students: 3050 },
  { month: 'March', students: 2370 },
  { month: 'April', students: 7300 },
  { month: 'May', students: 5090 },
  { month: 'June', students: 9340 },
];

const chartConfig = {
  students: {
    label: 'Students',
    color: 'hsl(var(--accent))',
    icon: TrendingUp,
  },
} satisfies ChartConfig;

export function StudentGrowthChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => `${value / 1000}k`}
        />
        <Tooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dot" />}
        />
        <defs>
          <linearGradient id="fillStudents" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-students)"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="var(--color-students)"
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>
        <Area
          dataKey="students"
          type="natural"
          fill="url(#fillStudents)"
          fillOpacity={0.4}
          stroke="var(--color-students)"
          stackId="a"
        />
      </AreaChart>
    </ChartContainer>
  );
}
