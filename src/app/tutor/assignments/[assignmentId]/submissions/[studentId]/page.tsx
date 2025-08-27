
'use client';
import { useParams } from 'next/navigation';
import { students } from '@/components/tutor/StudentRoster';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Send, FileText, Download, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Bot, Pencil } from 'lucide-react';
import Link from 'next/link';

function DocumentViewer() {
    
    const handleDownload = () => {
        // In a real app, this would trigger a download of the actual document file.
        // For this demo, we'll open a placeholder link.
        window.open('https://placehold.co/800x1100.png', '_blank');
    }

    return (
        <div className="border rounded-xl overflow-hidden bg-muted/30">
            <div className="bg-background/80 backdrop-blur-sm border-b p-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-sm">Calculus_Assignment_5_Alex_Johnson.pdf</span>
                </div>
                <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ZoomOut className="h-4 w-4" />
                    </Button>
                    <span className="text-sm font-semibold text-muted-foreground">100%</span>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ZoomIn className="h-4 w-4" />
                    </Button>
                    <div className="w-px h-6 bg-border mx-2"></div>
                     <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <span className="text-sm text-muted-foreground">1 / 5</span>
                     <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                     <div className="w-px h-6 bg-border mx-2"></div>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleDownload}>
                        <Download className="h-4 w-4" />
                    </Button>
                </div>
            </div>
            <div className="p-4 h-[600px] overflow-auto bg-white dark:bg-zinc-800">
                {/* Simulated Document Content */}
                <div className="max-w-2xl mx-auto bg-white dark:bg-zinc-900 shadow-lg p-8">
                    <h2 className="text-2xl font-bold mb-4 border-b pb-2">Calculus Assignment 5</h2>
                    <div className="space-y-6">
                        <div>
                            <p className="font-semibold">1. Find the derivative of f(x) = 3x² + 2x - 5.</p>
                            <div className="w-full h-16 bg-muted rounded-md mt-2"></div>
                        </div>
                         <div>
                            <p className="font-semibold">2. Calculate the area under the curve y = x² from x=0 to x=2.</p>
                            <div className="w-full h-24 bg-muted rounded-md mt-2"></div>
                        </div>
                         <div>
                            <p className="font-semibold">3. Solve the following limit: lim (x→∞) (2x² - 3x + 1) / (x² + 5x - 2).</p>
                             <div className="w-full h-12 bg-muted rounded-md mt-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


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
                     <DocumentViewer />
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Grading & Feedback</CardTitle>
                    <CardDescription>Provide a grade and comments for this submission.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="score">Score</Label>
                            <Input id="score" type="number" placeholder="e.g., 85" />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="total-marks">Total Marks</Label>
                            <Input id="total-marks" type="number" placeholder="e.g., 100" />
                        </div>
                        <div className="space-y-2">
                             <Label>Percentage</Label>
                             <div className="h-10 flex items-center px-3 rounded-md border border-input bg-muted/50">
                                <span className="text-sm font-semibold text-primary">85%</span>
                             </div>
                        </div>
                     </div>
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <Label htmlFor="feedback">Feedback Comments</Label>
                             <Button variant="outline" size="sm">
                                <Bot className="mr-2 h-4 w-4 text-accent" />
                                Generate with AI
                            </Button>
                        </div>
                        <Textarea id="feedback" placeholder="Provide constructive feedback for the student..." rows={6}/>
                    </div>
                    <div className="flex justify-end">
                         <Button>
                            <Send className="mr-2 h-4 w-4" />
                            Submit Grade & Feedback
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
