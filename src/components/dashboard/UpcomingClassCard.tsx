import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';
import { Calendar, Clock, Video } from 'lucide-react';
import Link from 'next/link';

export function UpcomingClassCard() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Video className="h-8 w-8 text-accent" />
          <div>
            <CardTitle className="font-headline text-xl">
              Upcoming Live Class
            </CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="relative mb-4 h-40 w-full overflow-hidden rounded-lg">
          <Image
            src="https://placehold.co/600x400.png"
            alt="Intro to Quantum Physics"
            fill
            className="object-cover"
            data-ai-hint="physics lecture"
          />
        </div>
        <h3 className="text-lg font-semibold">Intro to Quantum Physics</h3>
        <p className="text-sm text-muted-foreground">with Prof. Alistair Finch</p>
        <div className="mt-4 space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>Today</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>3:00 PM - 4:00 PM</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href="/app/live-classes/1">Join Class</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
