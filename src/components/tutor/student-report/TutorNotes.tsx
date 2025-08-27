
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Plus } from 'lucide-react';

export function TutorNotes() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Tutor Notes</CardTitle>
                <CardDescription>Private notes about this student. Only visible to you.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <Textarea placeholder="Add a new note... (e.g., student is struggling with derivatives, excels at historical analysis)" />
                 <div className="flex justify-between">
                    <p className="text-xs text-muted-foreground">Notes are automatically saved.</p>
                    <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        Add Note
                    </Button>
                 </div>
            </CardContent>
        </Card>
    )
}
