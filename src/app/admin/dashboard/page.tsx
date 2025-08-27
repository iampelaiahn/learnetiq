
'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MoreHorizontal, UserPlus, Users, GraduationCap, BarChart, FileCheck, Edit, Trash2 } from "lucide-react";
import Link from "next/link";
import * as React from 'react';
import { UserFormDialog, UserFormData } from "@/components/admin/UserFormDialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { toast } from "@/hooks/use-toast";
import { createUser, updateUser, deleteUser } from "@/actions/user";


const adminStats = [
    { label: 'Total Students', value: '12,405', icon: Users },
    { label: 'Total Tutors', value: '1,250', icon: GraduationCap },
    { label: 'Courses Published', value: '890', icon: FileCheck },
    { label: 'Monthly Active Users', value: '8,980', icon: BarChart },
];

const initialTutors = [
    { id: '1', name: 'Dr. Evelyn Reed', email: 'e.reed@example.com', courses: 4, students: 120, status: 'Active', role: 'tutor' as const },
    { id: '2', name: 'Prof. Alistair Finch', email: 'a.finch@example.com', courses: 2, students: 85, status: 'Active', role: 'tutor' as const },
    { id: '3', name: 'Dr. Eleanor Vance', email: 'e.vance@example.com', courses: 3, students: 95, status: 'Inactive', role: 'tutor' as const },
    { id: '4', name: 'Mr. David Chen', email: 'd.chen@example.com', courses: 1, students: 45, status: 'Active', role: 'tutor' as const },
];

const initialStudents = [
    { id: 'S1', name: 'Alex Johnson', email: 'alex.j@example.com', coursesEnrolled: 5, lastActive: '2 hours ago', status: 'Active', role: 'student' as const },
    { id: 'S2', name: 'Brenda Smith', email: 'brenda.s@example.com', coursesEnrolled: 3, lastActive: '5 hours ago', status: 'Active', role: 'student' as const },
    { id: 'S3', name: 'Charlie Brown', email: 'charlie.b@example.com', coursesEnrolled: 8, lastActive: '1 day ago', status: 'Suspended', role: 'student' as const },
    { id: 'S4', name: 'Diana Prince', email: 'diana.p@example.com', coursesEnrolled: 4, lastActive: '3 days ago', status: 'Active', role: 'student' as const },
];

export default function AdminDashboardPage() {
    const [tutors, setTutors] = React.useState(initialTutors);
    const [students, setStudents] = React.useState(initialStudents);

    const handleSaveUser = async (data: UserFormData, userId?: string) => {
        if (userId) {
            // Update
            const result = await updateUser(userId, data);
            if(result.success) {
                if(data.role === 'tutor') {
                    setTutors(tutors.map(t => t.id === userId ? { ...t, ...data } : t));
                } else {
                    setStudents(students.map(s => s.id === userId ? { ...s, ...data } : s));
                }
                toast({ title: "User Updated", description: `${data.name} has been updated.` });
                return true;
            }
        } else {
            // Create
            const result = await createUser(data);
             if (result.success && result.user) {
                const newUser = { ...result.user, courses: 0, students: 0, status: 'Active', coursesEnrolled: 0, lastActive: 'Just now' };
                if (data.role === 'tutor') {
                    // @ts-ignore
                    setTutors([...tutors, newUser]);
                } else {
                    // @ts-ignore
                    setStudents([...students, newUser]);
                }
                toast({ title: "User Created", description: `${data.name} has been added.` });
                return true;
            }
        }
        toast({ title: "Error", description: "An error occurred.", variant: "destructive" });
        return false;
    };

    const handleDeleteUser = async (userId: string, role: 'tutor' | 'student') => {
        const result = await deleteUser(userId);
        if(result.success) {
            if(role === 'tutor') {
                setTutors(tutors.filter(t => t.id !== userId));
            } else {
                setStudents(students.filter(s => s.id !== userId));
            }
            toast({ title: "User Deleted", description: "The user has been removed." });
        } else {
            toast({ title: "Error", description: "Failed to delete user.", variant: "destructive" });
        }
    }


    return (
        <div className="space-y-8">
            <div>
                <h1 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
                Admin Dashboard
                </h1>
                <p className="mt-2 text-muted-foreground">
                Platform overview and management tools.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {adminStats.map((stat) => (
                    <Card key={stat.label}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                        <stat.icon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle>Tutor Management</CardTitle>
                            <CardDescription>Manage tutor accounts and course assignments.</CardDescription>
                        </div>
                        <UserFormDialog role="tutor" onSave={handleSaveUser}>
                            <Button>
                                <UserPlus className="mr-2 h-4 w-4" /> Add Tutor
                            </Button>
                        </UserFormDialog>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Tutor</TableHead>
                                <TableHead>Courses</TableHead>
                                <TableHead>Total Students</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {tutors.map(tutor => (
                                <TableRow key={tutor.id}>
                                    <TableCell className="font-medium">
                                        <p>{tutor.name}</p>
                                        <p className="text-xs text-muted-foreground">{tutor.email}</p>
                                    </TableCell>
                                    <TableCell>{tutor.courses}</TableCell>
                                    <TableCell>{tutor.students}</TableCell>
                                    <TableCell>
                                        <Badge variant={tutor.status === 'Active' ? 'default' : 'destructive'}>{tutor.status}</Badge>
                                    </TableCell>
                                    <TableCell className="text-right space-x-1">
                                         <UserFormDialog role="tutor" onSave={(data) => handleSaveUser(data, tutor.id)} user={tutor}>
                                            <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
                                         </UserFormDialog>
                                        <AlertDialog>
                                            <AlertDialogTrigger asChild>
                                                <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </AlertDialogTrigger>
                                            <AlertDialogContent>
                                                <AlertDialogHeader>
                                                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    This action cannot be undone. This will permanently delete the tutor account for {tutor.name}.
                                                </AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>
                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                <AlertDialogAction onClick={() => handleDeleteUser(tutor.id, 'tutor')} className="bg-destructive hover:bg-destructive/90">Delete</AlertDialogAction>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                     <div className="flex items-center justify-between">
                        <div>
                            <CardTitle>Student Management</CardTitle>
                            <CardDescription>Oversee student accounts and activity.</CardDescription>
                        </div>
                        <UserFormDialog role="student" onSave={handleSaveUser}>
                            <Button>
                                <UserPlus className="mr-2 h-4 w-4" /> Add Student
                            </Button>
                        </UserFormDialog>
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
                             {students.map(student => (
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
                                    <TableCell className="text-right space-x-1">
                                        <UserFormDialog role="student" onSave={(data) => handleSaveUser(data, student.id)} user={student}>
                                            <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
                                        </UserFormDialog>
                                         <AlertDialog>
                                            <AlertDialogTrigger asChild>
                                                <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </AlertDialogTrigger>
                                            <AlertDialogContent>
                                                <AlertDialogHeader>
                                                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    This action cannot be undone. This will permanently delete the student account for {student.name}.
                                                </AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>
                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                <AlertDialogAction onClick={() => handleDeleteUser(student.id, 'student')} className="bg-destructive hover:bg-destructive/90">Delete</AlertDialogAction>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>
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
