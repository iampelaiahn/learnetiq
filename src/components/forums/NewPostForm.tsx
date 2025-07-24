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
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { AtSign, Code, Quote, Send } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader } from '../ui/card';

const formSchema = z.object({
  content: z.string().min(10, {
    message: 'Your post must be at least 10 characters.',
  }),
});

export function NewPostForm() {
    const { toast } = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { content: '' },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        toast({
            title: "Comment Submitted!",
            description: "Your comment has been added to the discussion.",
        })
        form.reset();
    }

    return (
        <Card className="bg-transparent border-0 shadow-none">
            <CardHeader className="p-0 mb-2">
                <CardDescription>
                    Comment as <span className="text-primary font-semibold">Alex</span>
                </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                        <FormField
                            control={form.control}
                            name="content"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Join the discussion..."
                                            className="resize-none"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-1">
                                <Button variant="ghost" size="icon" type="button" className="text-muted-foreground">
                                    <AtSign className="h-5 w-5" />
                                </Button>
                                <Button variant="ghost" size="icon" type="button" className="text-muted-foreground">
                                    <Quote className="h-5 w-5" />
                                </Button>
                                <Button variant="ghost" size="icon" type="button" className="text-muted-foreground">
                                    <Code className="h-5 w-5" />
                                </Button>
                            </div>
                            <Button type="submit">
                                <Send className="h-4 w-4" />
                                <span className="sr-only">Comment</span>
                            </Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
