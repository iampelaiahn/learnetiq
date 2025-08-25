'use client';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { useRouter } from 'next/navigation';
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
    subject: string;
    score: number;
    link?: string;
}[];


const chartConfig = {
  score: {
    label: 'Score',
    color: 'hsl(var(--accent))',
  },
} satisfies ChartConfig;

export function SubjectPerformanceChart({ data }: { data: ChartData }) {
  const router = useRouter();

  const handleBarClick = (payload: any) => {
    if (payload && payload.activePayload && payload.activePayload.length > 0) {
      const link = payload.activePayload[0].payload.link;
      if (link) {
        router.push(link);
      }
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Subject Performance</CardTitle>
        <CardDescription>Average scores across subjects. Click a bar to see courses.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ChartContainer config={chartConfig}>
            <BarChart 
              accessibilityLayer 
              data={data}
              onClick={handleBarClick}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="subject"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />
              <YAxis 
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <Tooltip cursor={true} content={<ChartTooltipContent indicator="dot"/>} />
              <Bar dataKey="score" fill="var(--color-score)" radius={4} className="cursor-pointer" />
            </BarChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
