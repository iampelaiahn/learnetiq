import { Button } from '@/components/ui/button';
import { Logo } from '@/components/Logo';
import { AuthModal } from './AuthModal';
import Link from 'next/link';

export function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Features</Link>
          <Link href="#stats" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Statistics</Link>
          <Link href="#testimonials" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Testimonials</Link>
        </nav>
        <div className="flex items-center gap-2">
          <AuthModal mode="login">
            <Button variant="ghost">Log In</Button>
          </AuthModal>
          <AuthModal mode="signup">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
              Sign Up
            </Button>
          </AuthModal>
        </div>
      </div>
    </header>
  );
}
