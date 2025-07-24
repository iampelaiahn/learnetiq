'use client';

import { TrendingUp, GraduationCap } from 'lucide-react';
import {
  Area,
  AreaChart,
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

const chartData = [
  { month: 'January', rate: 85 },
  { month: 'February', rate: 88 },
  { month: 'March', rate: 90 },
  { month: 'April', rate: 92 },
  { month: 'May', rate: 95 },
  { month: 'June', rate: 98 },
];

const chartConfig = {
  rate: {
    label: 'Pass Rate',
    color: 'hsl(var(--primary))',
    icon: GraduationCap,
  },
} satisfies ChartConfig;

export function StudentPassRateChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-accent" />
          Student Pass Rate
        </CardTitle>
         <CardDescription>
            Pass rate for students across all courses.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-auto aspect-[16/9]">
          <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
            <AreaChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 0,
                right: 20,
                top: 5,
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
                tickFormatter={(value) => `${value}%`}
                domain={[80, 100]}
              />
              <Tooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" />}
              />
              <defs>
                <linearGradient id="fillPassRate" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-rate)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-rate)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <Area
                dataKey="rate"
                type="natural"
                fill="url(#fillPassRate)"
                fillOpacity={0.4}
                stroke="var(--color-rate)"
                stackId="a"
              />
            </AreaChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
