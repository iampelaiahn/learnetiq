
'use client';
import { TrendingUp } from "lucide-react"
import { PolarGrid, PolarAngleAxis, Radar, RadarChart } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
} from "@/components/ui/chart"

type SubjectBreakdownChartProps = {
    data: {
        subject: string;
        score: number;
    }[];
}

export function SubjectBreakdownChart({ data }: SubjectBreakdownChartProps) {
  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>Subject Performance Breakdown</CardTitle>
        <CardDescription>
          Student scores across different topics.
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <div className="h-[400px]">
          <ChartContainer
            config={{
                score: {
                    label: "Score",
                    color: "hsl(var(--primary))",
                },
            }}
            className="mx-auto aspect-square max-h-[400px]"
          >
            <RadarChart data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <Radar
                name="Score"
                dataKey="score"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}
