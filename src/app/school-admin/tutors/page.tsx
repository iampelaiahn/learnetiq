
'use client';
import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from '@/components/ui/button';

const allTutors = [
    { id: '1', name: 'Dr. Evelyn Reed', email: 'e.reed@example.com', courses: 4, students: 120, status: 'Active' },
    { id: '2', name: 'Prof. Alistair Finch', email: 'a.finch@example.com', courses: 2, students: 85, status: 'Active' },
    { id: '3', name: 'Dr. Eleanor Vance', email: 'e.vance@example.com', courses: 3, students: 95, status: 'Inactive' },
    { id: '4', name: 'Mr. David Chen', email: 'd.chen@example.com', courses: 1, students: 45, status: 'Active' },
    { id: '5', name: 'Ms. Maria Garcia', email: 'm.garcia@example.com', courses: 5, students: 150, status: 'Active' },
    { id: '6', name: 'Dr. Samuel Jones', email: 's.jones@example.com', courses: 2, students: 70, status: 'Onboarding' },
];

export default function TutorsManagementPage() {
    const [searchTerm, setSearchTerm] = React.useState('');
    const filteredTutors = allTutors.filter(tutor => 
        tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tutor.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-8">
            <div>
                <h1 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
                    Tutor Management
                </h1>
                <p className="mt-2 text-muted-foreground">
                    View, search, and manage all tutors in your school.
                </p>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>All Tutors</CardTitle>
                    <div className="flex items-center justify-between">
                        <CardDescription>A list of all tutors registered at your institution.</CardDescription>
                        <div className="relative w-full max-w-sm">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input 
                                placeholder="Search tutors..." 
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
                                <TableHead>Tutor</TableHead>
                                <TableHead>Courses Assigned</TableHead>
                                <TableHead>Total Students</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredTutors.map(tutor => (
                                <TableRow key={tutor.id}>
                                    <TableCell className="font-medium">
                                        <p>{tutor.name}</p>
                                        <p className="text-xs text-muted-foreground">{tutor.email}</p>
                                    </TableCell>
                                    <TableCell>{tutor.courses}</TableCell>
                                    <TableCell>{tutor.students}</TableCell>
                                    <TableCell>
                                        <Badge variant={tutor.status === 'Active' ? 'default' : 'secondary'}>{tutor.status}</Badge>
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
