
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Users, BookOpen, Settings } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type CourseCardProps = {
    id: string;
    title: string;
    studentCount: number;
    progress: number;
    image: string;
    aiHint: string;
}

export function CourseCard({ id, title, studentCount, progress, image, aiHint }: CourseCardProps) {
    return (
        <Card className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
            <div className="relative h-48 w-full">
                <Image src={image} alt={title} fill className="object-cover" data-ai-hint={aiHint}/>
            </div>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <div className="flex items-center text-sm text-muted-foreground gap-4 pt-1">
                    <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>{studentCount} Students</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        <span>12 Lessons</span>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="flex-grow">
                <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                        <span className="font-medium">Course Progress</span>
                        <span className="text-primary font-semibold">{progress}%</span>
                    </div>
                    <Progress value={progress} />
                </div>
            </CardContent>
            <CardFooter className="grid grid-cols-2 gap-2">
                <Button asChild variant="default">
                    <Link href={`/app/courses/${id}`}>View Course</Link>
                </Button>
                 <Button asChild variant="outline">
                    <Link href={`/tutor/courses/${id}/edit`}>
                        <Settings className="mr-2 h-4 w-4" />
                        Manage
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
}
