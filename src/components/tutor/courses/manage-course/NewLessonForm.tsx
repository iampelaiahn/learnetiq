
'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { PlusCircle } from 'lucide-react';

const formSchema = z.object({
  title: z.string().min(3, { message: 'Title must be at least 3 characters.' }),
  duration: z.string().regex(/^\d{2}:\d{2}$/, { message: 'Duration must be in MM:SS format.' }),
});

type NewLessonFormProps = {
    onAddLesson: (lesson: { title: string; duration: string }) => void;
};

export function NewLessonForm({ onAddLesson }: NewLessonFormProps) {
    const { toast } = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { title: '', duration: '' },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        onAddLesson({
            title: values.title,
            duration: `${values.duration} min`
        });
        toast({
            title: "Lesson Added!",
            description: `"${values.title}" has been added to the curriculum.`,
        });
        form.reset();
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                     <div className="md:col-span-2">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Lesson Title</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g., Introduction to Calculus" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                     <div>
                        <FormField
                            control={form.control}
                            name="duration"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Duration</FormLabel>
                                    <FormControl>
                                        <Input placeholder="MM:SS" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                <div className="flex justify-end">
                    <Button type="submit">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Add Lesson
                    </Button>
                </div>
            </form>
        </Form>
    );
}
