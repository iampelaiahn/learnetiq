
'use client';

import { useParams } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CourseCurriculum } from '@/components/tutor/courses/manage-course/CourseCurriculum';
import { StudentRoster } from '@/components/tutor/StudentRoster';
import { FileText, BarChart, Users, Settings } from 'lucide-react';

const courseData = {
    'calculus-i': {
        title: 'Calculus I',
        description: 'An introductory course to the fundamental concepts of calculus, including limits, derivatives, and integrals.',
        lessons: [
            { id: 'lec-1', title: 'Introduction to Limits', duration: '15:20 min', isPublished: true },
            { id: 'lec-2', title: 'Understanding Derivatives', duration: '25:10 min', isPublished: true },
            { id: 'lec-3', title: 'The Chain Rule', duration: '18:45 min', isPublished: true },
            { id: 'lec-4', title: 'Introduction to Integrals', duration: '22:00 min', isPublished: false },
            { id: 'lec-5', title: 'The Fundamental Theorem of Calculus', duration: '30:00 min', isPublished: false },
        ]
    }
}


export default function EditCoursePage() {
    const params = useParams();
    const courseId = params.courseId as string;
    const data = courseData[courseId as keyof typeof courseData] || courseData['calculus-i'];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
                    Manage Course: {data.title}
                </h1>
                <p className="mt-2 text-muted-foreground">
                    {data.description}
                </p>
            </div>

            <Tabs defaultValue="content" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="content"><FileText className="mr-2 h-4 w-4"/>Content</TabsTrigger>
                    <TabsTrigger value="students"><Users className="mr-2 h-4 w-4"/>Students</TabsTrigger>
                    <TabsTrigger value="settings"><Settings className="mr-2 h-4 w-4"/>Settings</TabsTrigger>
                    <TabsTrigger value="analytics"><BarChart className="mr-2 h-4 w-4"/>Analytics</TabsTrigger>
                </TabsList>
                <TabsContent value="content" className="mt-6">
                    <CourseCurriculum lessons={data.lessons} />
                </TabsContent>
                <TabsContent value="students" className="mt-6">
                    <StudentRoster />
                </TabsContent>
                <TabsContent value="settings" className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Course Settings</CardTitle>
                            <CardDescription>Manage your course details and publication status.</CardDescription>
                        </CardHeader>
                        <div className="border-2 border-dashed border-muted-foreground/30 rounded-xl flex items-center justify-center h-96 m-6 mt-0">
                            <p className="text-muted-foreground">Course settings form coming soon...</p>
                        </div>
                    </Card>
                </TabsContent>
                <TabsContent value="analytics" className="mt-6">
                     <Card>
                        <CardHeader>
                            <CardTitle>Course Analytics</CardTitle>
                            <CardDescription>View insights into student engagement and performance.</CardDescription>
                        </CardHeader>
                        <div className="border-2 border-dashed border-muted-foreground/30 rounded-xl flex items-center justify-center h-96 m-6 mt-0">
                            <p className="text-muted-foreground">Analytics dashboard coming soon...</p>
                        </div>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}

