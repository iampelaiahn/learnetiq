
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
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { useRouter } from 'next/navigation';
import * as React from 'react';

type LoginDialogProps = {
  children: React.ReactNode;
  role: string;
  href: string;
  onOpenChange: (open: boolean) => void;
};

export function LoginDialog({ children, role, href, onOpenChange }: LoginDialogProps) {
  const router = useRouter();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    // In a real app, you would handle authentication here.
    // For this demo, we'll just navigate to the dashboard.
    onOpenChange(false);
    router.push(href);
  };

  return (
    <Dialog onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Login as {role}</DialogTitle>
          <DialogDescription>
            Enter your credentials to access the {role.toLowerCase()} dashboard.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <Label htmlFor="password">Password</Label>
                    <Button variant="link" size="sm" className="p-0 h-auto text-xs">
                        Forgot password?
                    </Button>
                </div>
                <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
        </div>
        <DialogFooter>
            <DialogClose asChild>
                <Button type="button" variant="outline">
                    Cancel
                </Button>
            </DialogClose>
            <Button type="button" onClick={handleLogin}>
                Login
            </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
