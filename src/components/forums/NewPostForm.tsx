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
import { Bot, Code, Quote, Send } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader } from '../ui/card';

const formSchema = z.object({
  content: z.string().min(10, {
    message: 'Your post must be at least 10 characters.',
  }),
});

const IqPlusIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2a10 10 0 0 0-10 10c0 5 3.5 9.1 8.2 9.9" />
      <path d="M12 2a10 10 0 0 1 10 10c0 5-3.5 9.1-8.2 9.9" />
      <path d="M12 12h8" />
      <path d="M16 8v8" />
      <path d="M4 12h4" />
      <path d="M6 10v4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M12 12v-2m0 4v-2" />
      <path d="M10 12h4" />
      <path d="M8 9.5a2.5 2.5 0 0 1 0 5" />
      <path d="M16 9.5a2.5 2.5 0 0 0 0 5" />
    </svg>
  );

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
                                    <Bot className="h-5 w-5" />
                                </Button>
                                <Button variant="ghost" size="icon" type="button" className="text-muted-foreground">
                                    <Quote className="h-5 w-5" />
                                </Button>
                                <Button variant="ghost" size="icon" type="button" className="text-muted-foreground">
                                    <IqPlusIcon className="h-5 w-5" />
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
