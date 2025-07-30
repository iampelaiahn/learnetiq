'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
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
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { signupAction } from '@/actions/auth';
import { useRouter } from 'next/navigation';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Terminal } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

const signupSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email(),
  password: z.string().min(8, { message: 'Password must be at least 8 characters.' }),
  role: z.string({ required_error: 'Please select a role.' }),
});

type AuthModalProps = {
  mode: 'login' | 'signup';
  children: React.ReactNode;
};

export function AuthModal({ mode, children }: AuthModalProps) {
  const [open, setOpen] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isGoogleSubmitting, setIsGoogleSubmitting] = React.useState(false);
  const [authError, setAuthError] = React.useState<string | null>(null);
  const { toast } = useToast();
  const router = useRouter();
  
  const isLogin = mode === 'login';
  const schema = isLogin ? loginSchema : signupSchema;

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: isLogin
      ? { email: '', password: '' }
      : { name: '', email: '', password: '' },
  });

  const handleGoogleSignIn = async () => {
    setIsGoogleSubmitting(true);
    setAuthError(null);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (isLogin) {
        toast({ title: 'Login Successful', description: 'Redirecting to your dashboard...' });
        router.push('/app/dashboard');
        setOpen(false);
      } else {
        form.setValue('name', user.displayName || '');
        form.setValue('email', user.email || '');
        toast({ title: 'Success!', description: 'Please complete your registration below.' });
      }
    } catch (error: any) {
      if (error.code === 'auth/configuration-not-found') {
         setAuthError(
          'Google Sign-In is not enabled. Please go to the Firebase Console > Authentication > Sign-in method, and enable the Google provider.'
        );
      } else {
        console.error("Google Sign-In Error:", error);
        toast({ title: 'Google Sign-In Failed', description: 'Please try again.', variant: 'destructive' });
      }
    }
    setIsGoogleSubmitting(false);
  };


  const onSubmit = async (values: z.infer<typeof schema>) => {
    setIsSubmitting(true);
    if (isLogin) {
      setTimeout(() => {
        toast({ title: 'Login Successful', description: 'Redirecting to your dashboard...' });
        router.push('/app/dashboard');
        setOpen(false);
        setIsSubmitting(false);
      }, 1000);
    } else {
      const result = await signupAction(values as z.infer<typeof signupSchema>);
      if (result.success && result.email) {
        toast({
          title: 'Signup Successful! ✨',
          description: (
            <div className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <p className="text-white text-sm">A personalized welcome email has been generated for you:</p>
              <pre className="text-xs text-white/80 whitespace-pre-wrap mt-2">{result.email}</pre>
            </div>
          ),
          duration: 9000,
        });
        setTimeout(() => {
          router.push('/app/dashboard');
          setOpen(false);
        }, 2000);
      } else {
        toast({ title: 'Signup Failed', description: result.error, variant: 'destructive' });
      }
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => { setOpen(isOpen); if (!isOpen) setAuthError(null); }}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">
            {isLogin ? 'Welcome Back!' : 'Create an Account'}
          </DialogTitle>
          <DialogDescription>
            {isLogin
              ? 'Log in to continue your learning journey.'
              : 'Sign up to start learning with LearnetIQ.'}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {authError && (
            <Alert variant="destructive">
              <Terminal className="h-4 w-4" />
              <AlertTitle>Configuration Required</AlertTitle>
              <AlertDescription>{authError}</AlertDescription>
            </Alert>
          )}
          <Button variant="outline" onClick={handleGoogleSignIn} disabled={isGoogleSubmitting}>
             <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 126 23.4 172.9 61.9l-69.5 69.5c-24.3-23.6-58.3-38.6-99.8-38.6-84.3 0-152.4 68.6-152.4 153.2s68.1 153.2 152.4 153.2c97.2 0 134.1-65.1 140.8-99.2H248v-85.3h236.1c2.3 12.7 3.9 26.9 3.9 41.4z"></path></svg>
            {isGoogleSubmitting ? "Signing in..." : isLogin ? 'Log in with Google' : 'Sign up with Google'}
          </Button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {!isLogin && (
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
              )}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {!isLogin && (
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Role</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a role" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="student">Student</SelectItem>
                            <SelectItem value="tutor">Tutor</SelectItem>
                            <SelectItem value="parent">Parent</SelectItem>
                            <SelectItem value="admin">Admin</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
              )}
              <Button type="submit" className="w-full" disabled={isSubmitting || isGoogleSubmitting}>
                {isSubmitting ? 'Submitting...' : isLogin ? 'Log In' : 'Create Account'}
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
