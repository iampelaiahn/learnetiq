
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FilePlus2, MoreHorizontal } from 'lucide-react';
import Link from 'next/link';

const assignments = [
    { id: 'A1', title: 'Calculus Assignment 5', course: 'Calculus I', dueDate: '2024-07-30', submissions: '40/45', status: 'Grading' },
    { id: 'A2', title: 'Quantum Mechanics Lab 3', course: 'Quantum Physics', dueDate: '2024-07-28', submissions: '32/32', status: 'Graded' },
    { id: 'A3', title: 'Essay: Thematic Analysis of Hamlet', course: 'The World of Shakespeare', dueDate: '2024-08-05', submissions: '15/28', status: 'Pending' },
    { id: 'A4', title: 'Research Paper: The Medici Family', course: 'Renaissance History', dueDate: '2024-08-10', submissions: '5/35', status: 'Pending' },
    { id: 'A5', title: 'Calculus Final Exam', course: 'Calculus I', dueDate: '2024-08-15', submissions: '0/45', status: 'Upcoming' },
];


export default function TutorAssignmentsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
            <h1 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Assignments
            </h1>
            <p className="mt-2 text-muted-foreground">
            Create, manage, and grade student assignments.
            </p>
        </div>
        <Button asChild>
            <Link href="/tutor/assignments/new">
                <FilePlus2 className="mr-2 h-4 w-4" />
                Create New Assignment
            </Link>
        </Button>
      </div>
      
      <Card>
        <CardHeader>
            <CardTitle>Assignment Overview</CardTitle>
            <CardDescription>A list of all assignments for your courses.</CardDescription>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Course</TableHead>
                        <TableHead>Due Date</TableHead>
                        <TableHead className="text-center">Submissions</TableHead>
                        <TableHead className="text-center">Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {assignments.map((assignment) => (
                        <TableRow key={assignment.id}>
                            <TableCell className="font-medium">
                                <Link href={`/tutor/assignments/${assignment.id}`} className="hover:underline">
                                    {assignment.title}
                                </Link>
                            </TableCell>
                            <TableCell>{assignment.course}</TableCell>
                            <TableCell>{assignment.dueDate}</TableCell>
                            <TableCell className="text-center">{assignment.submissions}</TableCell>
                            <TableCell className="text-center">
                                <Badge 
                                    variant={
                                        assignment.status === 'Graded' ? 'default' :
                                        assignment.status === 'Grading' ? 'secondary' :
                                        'outline'
                                    }
                                    className={
                                        assignment.status === 'Grading' ? 'bg-yellow-200 text-yellow-800' : ''
                                    }
                                >
                                    {assignment.status}
                                </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                                <Button variant="ghost" size="icon">
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">More options</span>
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
      </Card>
    </div>
  );
}
