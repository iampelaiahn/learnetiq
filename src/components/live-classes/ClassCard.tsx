import Image from 'next/image';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import Link from 'next/link';

type ClassCardProps = {
  title: string;
  tutor: string;
  status: 'On going' | 'Upcoming' | 'Completed';
  image: string;
  aiHint: string;
  classId: string;
};

export function ClassCard({ title, tutor, status, image, aiHint, classId }: ClassCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={image} alt={title} layout="fill" objectFit="cover" data-ai-hint={aiHint}/>
        <Badge
          className="absolute top-2 right-2"
          variant={
            status === 'On going'
              ? 'destructive'
              : status === 'Upcoming'
              ? 'default'
              : 'secondary'
          }
        >
          {status}
        </Badge>
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>By {tutor}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow" />
      <CardFooter>
        <Button asChild className="w-full" disabled={status === 'Completed'}>
           <Link href={`/app/live-classes/${classId}`}>
            {status === 'On going' ? 'Join Class' : status === 'Upcoming' ? 'View Details' : 'View Recording'}
           </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
