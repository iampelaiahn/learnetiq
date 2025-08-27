
'use client';
import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GripVertical, Pencil, Trash2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { NewLessonForm } from './NewLessonForm';

type Lesson = {
    id: string;
    title: string;
    duration: string;
    isPublished: boolean;
};

type CourseCurriculumProps = {
    lessons: Lesson[];
}

export function CourseCurriculum({ lessons: initialLessons }: CourseCurriculumProps) {
    const [lessons, setLessons] = React.useState(initialLessons);

    const handleAddLesson = (lesson: Omit<Lesson, 'id' | 'isPublished'>) => {
        const newLesson = {
            ...lesson,
            id: `lec-${lessons.length + 1}`,
            isPublished: false,
        };
        setLessons([...lessons, newLesson]);
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Course Curriculum</CardTitle>
                <CardDescription>Organize your course content here. Drag and drop to reorder lessons.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {lessons.map((lesson, index) => (
                        <div key={lesson.id} className="flex items-center gap-4 rounded-md border p-4">
                            <GripVertical className="h-5 w-5 text-muted-foreground cursor-grab" />
                            <div className="flex-grow">
                                <p className="font-semibold">{lesson.title}</p>
                                <p className="text-sm text-muted-foreground">{lesson.duration}</p>
                            </div>
                            <Badge variant={lesson.isPublished ? 'default' : 'secondary'}>
                                {lesson.isPublished ? 'Published' : 'Draft'}
                            </Badge>
                            <Button variant="ghost" size="icon">
                                <Pencil className="h-4 w-4" />
                            </Button>
                             <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                                <Trash2 className="h-4 w-4" />
                            </Button>
                        </div>
                    ))}
                </div>
                <Separator className="my-6" />
                <div>
                    <h3 className="text-lg font-semibold mb-2">Add New Lesson</h3>
                    <NewLessonForm onAddLesson={handleAddLesson} />
                </div>
            </CardContent>
        </Card>
    );
}

