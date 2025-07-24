import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { AuthModal } from './AuthModal';

export function HeroSection() {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full">
      <div className="absolute inset-0 bg-primary/10 -z-10" />
      <div className="container grid h-full grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            Unlock Your Potential with LearnetIQ
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            The all-in-one learning platform designed for students, tutors, and
            parents. Personalized, collaborative, and engaging education at your
            fingertips.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row md:justify-start">
            <AuthModal mode="signup">
              <Button
                size="lg"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto"
              >
                Get Started for Free
              </Button>
            </AuthModal>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Learn More
            </Button>
          </div>
        </div>
        <div className="relative h-64 w-full md:h-full">
          <Image
            src="https://placehold.co/800x600.png"
            alt="Students learning online"
            layout="fill"
            objectFit="contain"
            className="rounded-xl"
            data-ai-hint="online learning"
          />
        </div>
      </div>
    </section>
  );
}
