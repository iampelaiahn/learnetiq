
'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Copy, Users, GraduationCap, Settings } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function SchoolAdminDashboard() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const { toast } = useToast();
    const inviteLink = searchParams.get('invite_link');

    // In a real app, these values would come from your database
    const totalTutors = 25;
    const currentTutors = 8;
    const showInviteCard = currentTutors < totalTutors;
    
    React.useEffect(() => {
        if (!inviteLink && showInviteCard) {
            // In a real app, you'd fetch this from the user's school data if they are already logged in.
            // For this demo, we'll redirect if the link is missing and it should be shown.
            // router.push('/'); // You might want a different logic here.
        }
    }, [inviteLink, router, showInviteCard]);

    const displayLink = inviteLink || "http://localhost:3000/invite/d3f4a1b2c3d4e5f6a7b8c9d0e1f2a3b4";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(displayLink);
        toast({
          title: 'Copied!',
          description: 'The invitation link has been copied to your clipboard.',
        });
      };
      
    const schoolAdminStats = [
        { label: 'Total Tutors', value: `${currentTutors}/${totalTutors}`, icon: GraduationCap, href: '/school-admin/tutors' },
        { label: 'Total Students', value: '150', icon: Users, href: '/school-admin/students' },
        { label: 'Subscription Plan', value: 'Pro', icon: Settings, href: '/school-admin/billing' },
    ];


    return (
        <div className="space-y-8">
            <div>
                <h1 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
                    School Admin Dashboard
                </h1>
                <p className="mt-2 text-muted-foreground">
                    Welcome, Jane Doe! Manage your school, tutors, and students.
                </p>
            </div>

            {showInviteCard && (
                <Card className="bg-accent/10 border-accent">
                    <CardHeader>
                        <CardTitle>Your Tutor Invitation Link</CardTitle>
                        <CardDescription>Share this unique link with your tutors to have them join your school on LearnetIQ. This card will disappear once all {totalTutors} tutor slots are filled.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center gap-2">
                            <Input value={displayLink} readOnly className="bg-background"/>
                            <Button onClick={copyToClipboard} size="icon" variant="outline">
                                <Copy className="h-4 w-4" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            )}

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {schoolAdminStats.map((stat) => (
                    <Link href={stat.href} key={stat.label}>
                        <Card className="hover:bg-muted/50 transition-colors h-full">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                            <stat.icon className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>

        </div>
    )
}
