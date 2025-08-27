
'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Mail, Phone } from 'lucide-react';

type Student = {
    id: string;
    name: string;
    avatar: string;
    aiHint: string;
    course: string;
    email: string;
}

type StudentHeaderProps = {
    student: Student;
};

export function StudentHeader({ student }: StudentHeaderProps) {
    return (
        <div className="flex flex-col items-center gap-6 rounded-xl border bg-card p-6 sm:flex-row">
            <Avatar className="h-24 w-24">
                <AvatarImage src={student.avatar} data-ai-hint={student.aiHint} />
                <AvatarFallback className="text-3xl">{student.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-grow text-center sm:text-left">
                <h1 className="font-headline text-3xl font-bold text-primary md:text-4xl">{student.name}</h1>
                <p className="text-muted-foreground">Enrolled in: <span className="font-semibold text-foreground">{student.course}</span></p>
            </div>
            <div className="flex gap-2">
                <Button variant="outline" size="icon">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                </Button>
                <Button variant="outline" size="icon">
                    <Phone className="h-5 w-5" />
                    <span className="sr-only">Call</span>
                </Button>
            </div>
        </div>
    )
}
