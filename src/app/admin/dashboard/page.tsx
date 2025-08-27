
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MoreHorizontal, UserPlus, Users, GraduationCap, BarChart, FileCheck, Edit, Trash2 } from "lucide-react";
import Link from "next/link";

const adminStats = [
    { label: 'Total Students', value: '12,405', icon: Users },
    { label: 'Total Tutors', value: '1,250', icon: GraduationCap },
    { label: 'Courses Published', value: '890', icon: FileCheck },
    { label: 'Monthly Active Users', value: '8,980', icon: BarChart },
];

const tutors = [
    { id: '1', name: 'Dr. Evelyn Reed', email: 'e.reed@example.com', courses: 4, students: 120, status: 'Active' },
    { id: '2', name: 'Prof. Alistair Finch', email: 'a.finch@example.com', courses: 2, students: 85, status: 'Active' },
    { id: '3', name: 'Dr. Eleanor Vance', email: 'e.vance@example.com', courses: 3, students: 95, status: 'Inactive' },
    { id: '4', name: 'Mr. David Chen', email: 'd.chen@example.com', courses: 1, students: 45, status: 'Active' },
];

const students = [
    { id: 'S1', name: 'Alex Johnson', email: 'alex.j@example.com', coursesEnrolled: 5, lastActive: '2 hours ago', status: 'Active' },
    { id: 'S2', name: 'Brenda Smith', email: 'brenda.s@example.com', coursesEnrolled: 3, lastActive: '5 hours ago', status: 'Active' },
    { id: 'S3', name: 'Charlie Brown', email: 'charlie.b@example.com', coursesEnrolled: 8, lastActive: '1 day ago', status: 'Suspended' },
    { id: 'S4', name: 'Diana Prince', email: 'diana.p@example.com', coursesEnrolled: 4, lastActive: '3 days ago', status: 'Active' },
];

export default function AdminDashboardPage() {
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
                        <Button>
                            <UserPlus className="mr-2 h-4 w-4" /> Add Tutor
                        </Button>
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
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
                                        <Button variant="ghost" size="icon" className="text-destructive"><Trash2 className="h-4 w-4" /></Button>
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
                        <Button>
                            <UserPlus className="mr-2 h-4 w-4" /> Add Student
                        </Button>
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
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
                                        <Button variant="ghost" size="icon" className="text-destructive"><Trash2 className="h-4 w-4" /></Button>
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
