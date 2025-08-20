import { Button } from '@/components/ui/button';
import { Logo } from '@/components/Logo';
import Link from 'next/link';

export function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Features</Link>
            <Link href="#stats" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Statistics</Link>
            <Link href="#testimonials" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Testimonials</Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/app/dashboard">
                    Go to App
                </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
