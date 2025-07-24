import { Button } from '../ui/button';
import { Logo } from '../Logo';
import { AuthModal } from './AuthModal';

export function LandingFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-3">
          <div className="space-y-4">
            <Logo />
            <p className="text-muted-foreground">
              Empowering the next generation of learners.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-4">
            <div>
              <h4 className="font-headline font-semibold">Platform</h4>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Features</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Pricing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Tutors</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-headline font-semibold">Company</h4>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">About Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-headline font-semibold">Resources</h4>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Help Center</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Contact Us</a></li>
              </ul>
            </div>
             <div className="space-y-4">
                <h4 className="font-headline font-semibold">Join LearnetIQ</h4>
                <p className="text-muted-foreground">
                  Start your learning journey today.
                </p>
                <AuthModal mode="signup">
                    <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Sign Up Now</Button>
                </AuthModal>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between border-t py-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} LearnetIQ. All rights reserved.
          </p>
          <div className="mt-4 flex gap-4 sm:mt-0">
             <a href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</a>
             <a href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
