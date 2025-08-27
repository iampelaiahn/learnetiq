
'use client';
import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, X, ShieldAlert } from 'lucide-react';

const coursesForValidation = [
    { id: 'c1', title: 'The World of Shakespeare', tutor: 'Dr. Eleanor Vance', submitted: '2024-07-28', status: 'Pending Review' },
    { id: 'c2', title: 'Intro to Organic Chemistry', tutor: 'Dr. Samuel Jones', submitted: '2024-07-27', status: 'Pending Review' },
];

const assignmentsForValidation = [
    { id: 'a1', title: 'Essay: Thematic Analysis of Hamlet', course: 'The World of Shakespeare', tutor: 'Dr. Eleanor Vance', submitted: '2024-07-29', status: 'Pending Review' },
    { id: 'a2', title: 'Lab Report: Titration Experiment', course: 'Intro to Organic Chemistry', tutor: 'Dr. Samuel Jones', submitted: '2024-07-28', status: 'Pending Review' },
];

export default function ValidationsPage() {
    
    // In a real app, these handlers would call server actions
    const handleApprove = (id: string, type: 'course' | 'assignment') => {
        console.log(`Approved ${type} with id: ${id}`);
        // Here you would remove the item from the list or update its status
    };

    const handleReject = (id: string, type: 'course' | 'assignment') => {
        console.log(`Rejected ${type} with id: ${id}`);
        // Here you would likely open a dialog to provide a reason for rejection
    };

    return (
        <div className="space-y-8">
            <div>
                <h1 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
                    Content Validation
                </h1>
                <p className="mt-2 text-muted-foreground">
                    Review and approve courses and assignments submitted by tutors.
                </p>
            </div>

            <Tabs defaultValue="courses">
                <TabsList>
                    <TabsTrigger value="courses">Courses ({coursesForValidation.length})</TabsTrigger>
                    <TabsTrigger value="assignments">Assignments ({assignmentsForValidation.length})</TabsTrigger>
                </TabsList>

                <TabsContent value="courses" className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Courses Pending Review</CardTitle>
                            <CardDescription>Validate these courses to make them available to students.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Course Title</TableHead>
                                        <TableHead>Tutor</TableHead>
                                        <TableHead>Submitted On</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {coursesForValidation.map(course => (
                                        <TableRow key={course.id}>
                                            <TableCell className="font-medium">{course.title}</TableCell>
                                            <TableCell>{course.tutor}</TableCell>
                                            <TableCell>{course.submitted}</TableCell>
                                            <TableCell>
                                                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                                                    <ShieldAlert className="mr-1 h-3 w-3" />
                                                    {course.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="text-right space-x-2">
                                                <Button variant="outline" size="sm">Review Content</Button>
                                                <Button variant="outline" size="icon" className="text-green-600 hover:text-green-600 hover:bg-green-50" onClick={() => handleApprove(course.id, 'course')}>
                                                    <Check className="h-4 w-4" />
                                                </Button>
                                                <Button variant="outline" size="icon" className="text-red-600 hover:text-red-600 hover:bg-red-50" onClick={() => handleReject(course.id, 'course')}>
                                                    <X className="h-4 w-4" />
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="assignments" className="mt-6">
                     <Card>
                        <CardHeader>
                            <CardTitle>Assignments Pending Review</CardTitle>
                            <CardDescription>Validate these assignments before they are assigned to students.</CardDescription>
                        </CardHeader>
                        <CardContent>
                             <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Assignment Title</TableHead>
                                        <TableHead>Course</TableHead>
                                        <TableHead>Tutor</TableHead>
                                        <TableHead>Submitted On</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {assignmentsForValidation.map(item => (
                                        <TableRow key={item.id}>
                                            <TableCell className="font-medium">{item.title}</TableCell>
                                            <TableCell>{item.course}</TableCell>
                                            <TableCell>{item.tutor}</TableCell>
                                            <TableCell>{item.submitted}</TableCell>
                                            <TableCell>
                                                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                                                    <ShieldAlert className="mr-1 h-3 w-3" />
                                                    {item.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="text-right space-x-2">
                                                <Button variant="outline" size="sm">Review Content</Button>
                                                <Button variant="outline" size="icon" className="text-green-600 hover:text-green-600 hover:bg-green-50" onClick={() => handleApprove(item.id, 'assignment')}>
                                                    <Check className="h-4 w-4" />
                                                </Button>
                                                <Button variant="outline" size="icon" className="text-red-600 hover:text-red-600 hover:bg-red-50" onClick={() => handleReject(item.id, 'assignment')}>
                                                    <X className="h-4 w-4" />
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
