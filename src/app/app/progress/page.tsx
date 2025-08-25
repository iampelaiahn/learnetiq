import { MetricCard } from '@/components/progress/MetricCard';
import { OverallProgressChart } from '@/components/progress/OverallProgressChart';
import { SubjectPerformanceChart } from '@/components/progress/SubjectPerformanceChart';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Award, BookCheck, Clock, FileCheck2, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const overallProgressData = [
  { date: 'Jan', completion: 10 },
  { date: 'Feb', completion: 20 },
  { date: 'Mar', completion: 35 },
  { date: 'Apr', completion: 50 },
  { date: 'May', completion: 60 },
  { date: 'Jun', completion: 75 },
];

const subjectPerformanceData = [
  { subject: 'Mathematics', score: 88, link: '/app/courses/Mathematics' },
  { subject: 'Physics', score: 72, link: '/app/courses/Physics' },
  { subject: 'History', score: 95, link: '/app/courses/History' },
  { subject: 'English Literature', score: 81, link: '/app/courses/English%20Literature' },
  { subject: 'Chemistry', score: 65, link: '/app/courses/Chemistry' },
  { subject: 'Biology', score: 78, link: '/app/courses/Biology' },
];

const completedCoursesData = [
    { name: 'Algebra Basics', date: '2024-05-20', passMark: '85%', hours: 10, plagiarism: '5%', aiScore: '98%' },
    { name: 'Probability & Statistics', date: '2024-05-15', passMark: '90%', hours: 12, plagiarism: '3%', aiScore: '99%' },
    { name: 'Modern World History', date: '2024-04-30', passMark: '92%', hours: 8, plagiarism: '8%', aiScore: '95%' },
    { name: 'Intro to Environmental Science', date: '2024-04-22', passMark: '88%', hours: 9, plagiarism: '4%', aiScore: '97%' },
    { name: 'Entrepreneurship 101', date: '2024-03-18', passMark: '95%', hours: 15, plagiarism: '2%', aiScore: '99%' },
    { name: 'Data Structures & Algorithms', date: '2024-02-28', passMark: '98%', hours: 25, plagiarism: '6%', aiScore: '96%' },
]

export default function ProgressPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
          Your Progress
        </h1>
        <p className="mt-2 text-muted-foreground">
          Track your performance and learning journey.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Link href="#">
             <MetricCard
              label="Average Score"
              value="85%"
              icon={Award}
              color="text-blue-500"
            />
        </Link>
        <Link href="/app/courses">
            <MetricCard
              label="Study Time (Weekly)"
              value="14 hours"
              icon={Clock}
              color="text-purple-500"
            />
        </Link>
      </div>

      <Card>
        <CardHeader>
            <div className="flex items-center gap-3">
                 <BookCheck className="h-6 w-6 text-accent" />
                 <div>
                    <CardTitle className="font-headline">Courses Completed</CardTitle>
                    <CardDescription>A summary of all the courses you have completed.</CardDescription>
                </div>
            </div>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead>Course Name</TableHead>
                    <TableHead>Completion Date</TableHead>
                    <TableHead className="text-center">Pass Mark</TableHead>
                    <TableHead className="text-center">Hours Spent</TableHead>
                    <TableHead className="text-center flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4" /> AI Checker
                    </TableHead>
                    <TableHead className="text-center flex items-center gap-2">
                        <FileCheck2 className="h-4 w-4" /> Plagiarism
                    </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {completedCoursesData.map((course) => (
                        <TableRow key={course.name}>
                            <TableCell className="font-medium">{course.name}</TableCell>
                            <TableCell>{course.date}</TableCell>
                            <TableCell className="text-center font-semibold text-green-600">{course.passMark}</TableCell>
                            <TableCell className="text-center">{course.hours}</TableCell>
                            <TableCell className="text-center text-blue-600 font-medium">{course.aiScore}</TableCell>
                            <TableCell className="text-center text-yellow-600 font-medium">{course.plagiarism}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
      </Card>


      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <OverallProgressChart data={overallProgressData} />
        <SubjectPerformanceChart data={subjectPerformanceData} />
      </div>
    </div>
  );
}
