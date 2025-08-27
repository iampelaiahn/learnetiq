
'use client';
import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from '@/components/ui/button';

const allAdmins = [
    { id: '1', name: 'Jane Doe', email: 'jane.doe@northwood.edu', role: 'Super Admin', status: 'Active' },
    { id: '2', name: 'John Smith', email: 'j.smith@northwood.edu', role: 'Admin', status: 'Active' },
    { id: '3', name: 'Unassigned Seat', email: '---', role: 'Admin', status: 'Invite Pending' },
];

export default function AdminsManagementPage() {
    const [searchTerm, setSearchTerm] = React.useState('');
    const filteredAdmins = allAdmins.filter(admin => 
        admin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        admin.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-8">
            <div>
                <h1 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
                    Admin Management
                </h1>
                <p className="mt-2 text-muted-foreground">
                    View and manage all administrators for your school.
                </p>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>All Administrators</CardTitle>
                     <div className="flex items-center justify-between">
                        <CardDescription>A list of all administrators for your institution.</CardDescription>
                        <div className="relative w-full max-w-sm">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input 
                                placeholder="Search admins..." 
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
                                <TableHead>Administrator</TableHead>
                                <TableHead>Role</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredAdmins.map(admin => (
                                <TableRow key={admin.id}>
                                    <TableCell className="font-medium">
                                        <p>{admin.name}</p>
                                        <p className="text-xs text-muted-foreground">{admin.email}</p>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant={admin.role === 'Super Admin' ? 'default' : 'secondary'}>{admin.role}</Badge>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant={admin.status === 'Active' ? 'default' : 'outline'}>{admin.status}</Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                         {admin.status !== 'Invite Pending' && <Button variant="outline" size="sm">Edit</Button>}
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
