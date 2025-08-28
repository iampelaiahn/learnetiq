
'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, ArrowLeft, Check, Copy, Loader2, Upload } from 'lucide-react';
import { createSchoolAction } from '@/actions/school';
import { useToast } from '@/hooks/use-toast';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { Textarea } from '@/components/ui/textarea';

const step1AdminSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z.string().min(10, 'Please enter a valid phone number.'),
  password: z.string().min(8, 'Password must be at least 8 characters.'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});


const step2SchoolSchema = z.object({
  schoolName: z.string().min(3, 'School name must be at least 3 characters.'),
  missionStatement: z.string().optional(),
  logo: z.any().optional(),
});

const formSchema = step1AdminSchema.merge(step2SchoolSchema);

export default function CreateSchoolPage() {
  const [step, setStep] = React.useState(1);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [inviteLink, setInviteLink] = React.useState('');
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(step === 1 ? step1AdminSchema : formSchema),
    mode: 'onChange',
    defaultValues: {
      username: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      schoolName: '',
      missionStatement: '',
    },
  });

  const handleNextStep = async () => {
    const isValid = await form.trigger(['username', 'email', 'phone', 'password', 'confirmPassword']);
    if (isValid) {
      setStep(2);
    }
  };

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    // In a real app, you'd handle file upload for the logo
    const result = await createSchoolAction(data);
    setIsSubmitting(false);

    if (result.success) {
      setInviteLink(result.inviteLink);
      setStep(3);
    } else {
      toast({
        title: 'Error',
        description: result.error,
        variant: 'destructive',
      });
    }
  };
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(inviteLink);
    toast({
      title: 'Copied!',
      description: 'The invitation link has been copied to your clipboard.',
    });
  };

  return (
    <div className="mx-auto max-w-xl">
      <Card className="shadow-2xl">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Create a School Account</CardTitle>
          <CardDescription>
            {step === 1 && 'Step 1 of 2: Create your administrator account.'}
            {step === 2 && 'Step 2 of 2: Tell us about your school.'}
            {step === 3 && 'Your school account is ready!'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <FormField control={form.control} name="username" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl><Input placeholder="e.g., janedoe" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                     <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Your Email Address</FormLabel>
                            <FormControl><Input type="email" placeholder="e.g., admin@northwood.edu" {...field} /></FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                     <FormField control={form.control} name="phone" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl><Input type="tel" placeholder="e.g., (555) 123-4567" {...field} /></FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <FormField control={form.control} name="password" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl><Input type="password" placeholder="••••••••" {...field} /></FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <FormField control={form.control} name="confirmPassword" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl><Input type="password" placeholder="••••••••" {...field} /></FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                  </motion.div>
                )}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <FormField control={form.control} name="schoolName" render={({ field }) => (
                        <FormItem>
                            <FormLabel>School Name</FormLabel>
                            <FormControl><Input placeholder="e.g., Northwood High School" {...field} /></FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                     <FormField control={form.control} name="missionStatement" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Mission Statement</FormLabel>
                            <FormControl><Textarea placeholder="Tell us about your school's mission (optional)" {...field} /></FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <FormField control={form.control} name="logo" render={({ field }) => (
                        <FormItem>
                            <FormLabel>School Logo</FormLabel>
                            <FormControl>
                                 <div className="flex items-center gap-4">
                                    <Button type="button" variant="outline">
                                        <Upload className="mr-2 h-4 w-4" />
                                        Upload Logo
                                    </Button>
                                    <p className="text-sm text-muted-foreground">Optional</p>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                  </motion.div>
                )}
                {step === 3 && (
                    <motion.div
                        key="step3"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="text-center"
                    >
                        <div className="flex justify-center mb-4">
                            <Check className="h-16 w-16 text-green-500 bg-green-100 rounded-full p-2" />
                        </div>
                        <h3 className="text-xl font-bold">Registration Successful!</h3>
                        <p className="text-muted-foreground mt-2">Here is the unique invitation link for your tutors. Please copy and share it with them.</p>
                        <div className="mt-6 flex items-center gap-2 rounded-lg border bg-muted p-3">
                            <Input value={inviteLink} readOnly className="text-sm bg-background"/>
                            <Button type="button" size="icon" onClick={copyToClipboard}>
                                <Copy className="h-4 w-4" />
                            </Button>
                        </div>
                         <Button asChild className="mt-6 w-full">
                            <Link href={`/school-admin/dashboard?invite_link=${encodeURIComponent(inviteLink)}`}>
                                Go to Dashboard
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </motion.div>
                )}
              </AnimatePresence>

              <div className="flex justify-between items-center pt-4">
                {step === 2 && (
                  <Button type="button" variant="outline" onClick={() => setStep(1)}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                )}
                
                {step !== 1 && <div />}

                {step === 1 && (
                  <Button type="button" onClick={handleNextStep} className="ml-auto">
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
                 {step === 2 && (
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Create Account'}
                    </Button>
                 )}
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
