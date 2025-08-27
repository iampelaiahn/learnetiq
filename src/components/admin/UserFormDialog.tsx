
'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import * as React from 'react';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  role: z.enum(['tutor', 'student']),
});

export type UserFormData = z.infer<typeof formSchema>;

type UserFormDialogProps = {
  children: React.ReactNode;
  role: 'tutor' | 'student';
  user?: UserFormData & { id?: string };
  onSave: (data: UserFormData, userId?: string) => Promise<boolean>;
};

export function UserFormDialog({
  children,
  role,
  user,
  onSave,
}: UserFormDialogProps) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isSaving, setIsSaving] = React.useState(false);

    const form = useForm<UserFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: user?.name || '',
            email: user?.email || '',
            role: user?.role || role,
        },
    });

    React.useEffect(() => {
        if(user) {
            form.reset({
                name: user.name,
                email: user.email,
                role: user.role,
            })
        }
    }, [user, form])

    const onSubmit = async (data: UserFormData) => {
        setIsSaving(true);
        const success = await onSave(data, user?.id);
        setIsSaving(false);
        if (success) {
            setIsOpen(false);
            form.reset();
        }
    };

    const dialogTitle = user ? `Edit ${role}` : `Add New ${role}`;
    const dialogDescription = user ? `Update the details for this ${role}.` : `Fill out the form to add a new ${role}.`;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>{dialogDescription}</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., john.doe@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <DialogFooter>
                <DialogClose asChild>
                    <Button type="button" variant="outline">
                    Cancel
                    </Button>
                </DialogClose>
                <Button type="submit" disabled={isSaving}>
                    {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Save
                </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
