
'use client';
import { useParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText } from 'lucide-react';
import { ValidationProgress } from '@/components/tutor/assignments/ValidationProgress';

const assignmentDetails = {
    id: 'A1',
    title: 'Calculus Assignment 5',
    course: 'Calculus I',
    dueDate: '2024-07-30',
    instructions: 'Please complete all questions in the attached document. Show all your work for full credit. The submission should be in PDF format.'
};

const submissions = [
    { studentId: '1', name: 'Alex Johnson', avatar: 'https://placehold.co/100x100.png', aiHint: 'male student', submittedAt: '2024-07-29', status: 'Comments' as const },
    { studentId: '2', name: 'Brenda Smith', avatar: 'https://placehold.co/100x100.png', aiHint: 'female student', submittedAt: '2024-07-29', status: 'Validated' as const },
    { studentId: '3', name: 'Charlie Brown', avatar: 'https://placehold.co/100x100.png', aiHint: 'boy portrait', submittedAt: '2024-07-28', status: 'Read' as const },
    { studentId: '4', name: 'Diana Prince', avatar: 'https://placehold.co/100x100.png', aiHint: 'woman smiling', submittedAt: '2024-07-30', status: 'Delivered' as const },
    { studentId: '5', name: 'Ethan Hunt', avatar: 'https://placehold.co/100x100.png', aiHint: 'man portrait', submittedAt: '2024-07-30', status: 'Delivered' as const },
];

export default function AssignmentDetailsPage() {
    const params = useParams();
    const assignmentId = params.assignmentId as string;

    // In a real app, you would fetch assignment details and submissions based on the ID.

    return (
        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <div className="flex items-start gap-4">
                        <FileText className="h-8 w-8 text-primary" />
                        <div>
                            <CardTitle className="font-headline text-2xl">{assignmentDetails.title}</CardTitle>
                            <CardDescription>
                                {assignmentDetails.course} | Due: {assignmentDetails.dueDate}
                            </CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{assignmentDetails.instructions}</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Student Submissions</CardTitle>
                    <CardDescription>Review and grade the submissions for this assignment.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Student</TableHead>
                                <TableHead>Submitted At</TableHead>
                                <TableHead>Validation Progress</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {submissions.map((sub) => (
                                <TableRow key={sub.studentId}>
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <Avatar>
                                                <AvatarImage src={sub.avatar} data-ai-hint={sub.aiHint} />
                                                <AvatarFallback>{sub.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <span className="font-medium">{sub.name}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>{sub.submittedAt}</TableCell>
                                    <TableCell>
                                        <ValidationProgress currentStep={sub.status} />
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="outline" size="sm">
                                            Grade Submission
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
