'use client';

import { TrendingUp } from 'lucide-react';
import {
  Line,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

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

type ChartData = {
    date: string;
    completion: number;
}[];

const chartConfig = {
  completion: {
    label: 'Completion',
    color: 'hsl(var(--primary))',
  },
} satisfies ChartConfig;

export function OverallProgressChart({ data }: { data: ChartData }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Overall Progress</CardTitle>
        <CardDescription>Learning completion over the last 6 months</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 0,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip content={<ChartTooltipContent />} />
            <Line
              dataKey="completion"
              type="monotone"
              stroke="var(--color-completion)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
