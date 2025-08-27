
'use client';
import { useParams } from 'next/navigation';
import { students } from '@/components/tutor/StudentRoster';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Send } from 'lucide-react';
import Link from 'next/link';

export default function GradeSubmissionPage() {
    const params = useParams();
    const { studentId, assignmentId } = params;

    const student = students.find((s) => s.id === studentId);

    if (!student) {
        return (
            <div className="text-center">
                <p>Student not found.</p>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto space-y-6">
             <div>
                <Button asChild variant="outline" size="sm">
                    <Link href={`/tutor/assignments/${assignmentId}`}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Submissions
                    </Link>
                </Button>
            </div>

            <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                    <AvatarImage src={student.avatar} data-ai-hint={student.aiHint}/>
                    <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                    <h1 className="text-2xl font-bold font-headline">{student.name}</h1>
                    <p className="text-muted-foreground">Submission for Calculus Assignment 5</p>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Submitted Document</CardTitle>
                </CardHeader>
                <CardContent>
                     <div className="border-2 border-dashed border-muted-foreground/30 rounded-xl flex items-center justify-center h-96">
                        <p className="text-muted-foreground">PDF viewer coming soon...</p>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Grading & Feedback</CardTitle>
                    <CardDescription>Provide a grade and comments for this submission.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="grade">Grade</Label>
                            <Input id="grade" placeholder="e.g., 85%" />
                        </div>
                     </div>
                    <div className="space-y-2">
                        <Label htmlFor="feedback">Feedback Comments</Label>
                        <Textarea id="feedback" placeholder="Provide constructive feedback for the student..." rows={6}/>
                    </div>
                    <div className="flex justify-end">
                         <Button>
                            <Send className="mr-2 h-4 w-4" />
                            Submit Grade
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
