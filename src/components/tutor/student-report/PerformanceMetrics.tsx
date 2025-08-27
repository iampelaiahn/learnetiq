
'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, CheckCircle, Percent } from 'lucide-react';

type Student = {
    overallScore: number;
    attendance: string;
    assignmentsCompleted: string;
}

type PerformanceMetricsProps = {
    student: Student;
};

export function PerformanceMetrics({ student }: PerformanceMetricsProps) {
    const metrics = [
        { title: 'Overall Score', value: `${student.overallScore}%`, icon: Award, color: "text-amber-500" },
        { title: 'Attendance', value: student.attendance, icon: CheckCircle, color: "text-green-500" },
        { title: 'Assignments', value: student.assignmentsCompleted, icon: Percent, color: "text-blue-500" },
    ]

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {metrics.map((metric) => (
                <Card key={metric.title}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                        <metric.icon className={`h-5 w-5 ${metric.color}`} />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold">{metric.value}</div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
