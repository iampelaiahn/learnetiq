
'use client';

import { useParams } from 'next/navigation';

export default function EditCoursePage() {
    const params = useParams();
    const courseId = params.courseId as string;

    return (
        <div className="space-y-8">
            <div>
                <h1 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
                    Manage Course
                </h1>
                <p className="mt-2 text-muted-foreground">
                    Editing course: <span className="font-semibold text-foreground">{decodeURIComponent(courseId)}</span>
                </p>
            </div>
            <div className="border-2 border-dashed border-muted-foreground/30 rounded-xl flex items-center justify-center h-96">
                <p className="text-muted-foreground">Course management interface coming soon...</p>
            </div>
        </div>
    );
}
