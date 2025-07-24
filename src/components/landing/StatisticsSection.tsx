'use client';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Users, CheckCircle, BarChart3, TrendingUp, GraduationCap } from 'lucide-react';
import { StudentGrowthChart } from './StudentGrowthChart';
import { StudentPassRateChart } from './StudentPassRateChart';

const stats = [
  {
    icon: Users,
    label: 'Active Students',
    value: '10,000+',
  },
  {
    icon: CheckCircle,
    label: 'Completion Rate',
    value: '92%',
  },
  {
    icon: GraduationCap,
    label: 'Pass Rate',
    value: '98%',
  },
  {
    icon: BarChart3,
    label: 'Courses Available',
    value: '500+',
  },
];

export function StatisticsSection() {
  return (
    <section id="stats" className="py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
            Trusted by Thousands of Learners
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our platform empowers students to achieve their academic goals.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.label}
                </CardTitle>
                <stat.icon className="h-5 w-5 text-accent" />
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <StudentGrowthChart />
          <StudentPassRateChart />
        </div>
      </div>
    </section>
  );
}
