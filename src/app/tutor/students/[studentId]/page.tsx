
'use client';

import { useParams } from 'next/navigation';
import { students } from '@/components/tutor/StudentRoster';
import { StudentHeader } from '@/components/tutor/student-report/StudentHeader';
import { PerformanceMetrics } from '@/components/tutor/student-report/PerformanceMetrics';
import { SubjectBreakdownChart } from '@/components/tutor/student-report/SubjectBreakdownChart';
import { RecentActivity } from '@/components/tutor/student-report/RecentActivity';
import { TutorNotes } from '@/components/tutor/student-report/TutorNotes';

export default function StudentReportPage() {
    const params = useParams();
    const studentId = params.studentId as string;
    const student = students.find((s) => s.id === studentId);

    if (!student) {
        return (
            <div className="container mx-auto py-8 text-center">
                <h1 className="text-2xl font-bold">Student Not Found</h1>
                <p className="text-muted-foreground">Could not find a report for the specified student.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto max-w-6xl space-y-8 py-8">
            <StudentHeader student={student} />
            <PerformanceMetrics student={student} />
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <SubjectBreakdownChart data={student.subjectScores} />
                </div>
                <div className="lg:col-span-1">
                    <RecentActivity activities={student.recentActivity} />
                </div>
            </div>
            <TutorNotes />
        </div>
    );
}
