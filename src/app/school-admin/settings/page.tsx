
'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Upload } from 'lucide-react';

export default function SchoolSettingsPage() {
    return (
        <div className="space-y-8 max-w-4xl mx-auto">
            <div>
                <h1 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
                    Settings
                </h1>
                <p className="mt-2 text-muted-foreground">
                    Manage your school profile and personal account settings.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>School Profile</CardTitle>
                    <CardDescription>Update your school's public information.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex items-center gap-6">
                        <Avatar className="h-20 w-20">
                            <AvatarImage src="https://placehold.co/100x100.png" data-ai-hint="school logo"/>
                            <AvatarFallback>SH</AvatarFallback>
                        </Avatar>
                        <div className="space-y-2">
                             <Button variant="outline">
                                <Upload className="mr-2 h-4 w-4" />
                                Upload new logo
                            </Button>
                            <p className="text-xs text-muted-foreground">Optional. JPG, GIF or PNG. 2MB max.</p>
                        </div>
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="mission">Mission Statement</Label>
                        <Textarea id="mission" defaultValue='"Our mission is to foster a community of lifelong learners and critical thinkers."' />
                        <p className="text-xs text-muted-foreground">Optional. A brief, inspiring statement about your school's purpose.</p>
                    </div>
                </CardContent>
                 <CardContent>
                     <div className="flex justify-end">
                        <Button>Save School Profile</Button>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Your Profile</CardTitle>
                    <CardDescription>Update your personal administrator information.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex items-center gap-6">
                        <Avatar className="h-20 w-20">
                            <AvatarImage src="https://placehold.co/100x100.png" data-ai-hint="woman portrait"/>
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div className="space-y-2">
                             <Button variant="outline">
                                <Upload className="mr-2 h-4 w-4" />
                                Upload new picture
                            </Button>
                            <p className="text-xs text-muted-foreground">JPG, GIF or PNG. 1MB max.</p>
                        </div>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" defaultValue="Jane Doe" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" defaultValue="jane.doe@northwood.edu" />
                        </div>
                     </div>
                </CardContent>
                <CardContent>
                     <div className="flex justify-end">
                        <Button>Save Admin Profile</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
