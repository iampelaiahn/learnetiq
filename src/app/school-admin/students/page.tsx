
'use client';
import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from '@/components/ui/button';

const allStudents = [
    { id: 'S1', name: 'Alex Johnson', email: 'alex.j@example.com', coursesEnrolled: 5, lastActive: '2 hours ago', status: 'Active' },
    { id: 'S2', name: 'Brenda Smith', email: 'brenda.s@example.com', coursesEnrolled: 3, lastActive: '5 hours ago', status: 'Active' },
    { id: 'S3', name: 'Charlie Brown', email: 'charlie.b@example.com', coursesEnrolled: 8, lastActive: '1 day ago', status: 'Suspended' },
    { id: 'S4', name: 'Diana Prince', email: 'diana.p@example.com', coursesEnrolled: 4, lastActive: '3 days ago', status: 'Active' },
    { id: 'S5', name: 'Ethan Hunt', email: 'ethan.h@example.com', coursesEnrolled: 2, lastActive: '1 week ago', status: 'Inactive' },
    { id: 'S6', name: 'Fiona Glenanne', email: 'fiona.g@example.com', coursesEnrolled: 6, lastActive: 'Just now', status: 'Active' },
];

export default function StudentsManagementPage() {
    const [searchTerm, setSearchTerm] = React.useState('');
    const filteredStudents = allStudents.filter(student => 
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-8">
            <div>
                <h1 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
                    Student Management
                </h1>
                <p className="mt-2 text-muted-foreground">
                    View, search, and manage all students in your school.
                </p>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>All Students</CardTitle>
                     <div className="flex items-center justify-between">
                        <CardDescription>A list of all students registered at your institution.</CardDescription>
                        <div className="relative w-full max-w-sm">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input 
                                placeholder="Search students..." 
                                className="pl-8" 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Student</TableHead>
                                <TableHead>Courses Enrolled</TableHead>
                                <TableHead>Last Active</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredStudents.map(student => (
                                <TableRow key={student.id}>
                                    <TableCell className="font-medium">
                                        <p>{student.name}</p>
                                        <p className="text-xs text-muted-foreground">{student.email}</p>
                                    </TableCell>
                                    <TableCell>{student.coursesEnrolled}</TableCell>
                                    <TableCell>{student.lastActive}</TableCell>
                                    <TableCell>
                                        <Badge variant={student.status === 'Active' ? 'default' : 'destructive'}>{student.status}</Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="outline" size="sm">View</Button>
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
