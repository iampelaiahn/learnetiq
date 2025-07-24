import Image from 'next/image';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';

type ResourceCardProps = {
  title: string;
  description: string;
  image: string;
  aiHint: string;
};

export function ResourceCard({ title, description, image, aiHint }: ResourceCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden">
      <div className="relative h-40 w-full">
        <Image src={image} alt={title} layout="fill" objectFit="cover" data-ai-hint={aiHint}/>
      </div>
      <CardHeader className="flex-grow">
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">View Resource</Button>
      </CardFooter>
    </Card>
  );
}
