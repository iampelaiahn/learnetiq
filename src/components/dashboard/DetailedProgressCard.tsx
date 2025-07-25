import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Badge } from '../ui/badge';
import { BookOpen } from 'lucide-react';

type Topic = {
  name: string;
  progress: number;
};

type DetailedProgressCardProps = {
  subject: string;
  overallProgress: number;
  topics: Topic[];
};

export function DetailedProgressCard({
  subject,
  overallProgress,
  topics,
}: DetailedProgressCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="font-headline text-xl">{subject}</CardTitle>
            <CardDescription>Overall Progress</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">{overallProgress}%</span>
            <BookOpen className="h-6 w-6 text-accent" />
          </div>
        </div>
        <Progress value={overallProgress} className="mt-2 h-2" />
      </CardHeader>
      <CardContent>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {topics.map((topic, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="bg-muted/50">
                    <CardContent className="flex items-center justify-between p-3">
                      <p className="text-sm font-medium truncate">{topic.name}</p>
                      <Badge variant={topic.progress > 70 ? 'default' : 'secondary'}>
                        {topic.progress}%
                      </Badge>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="h-6 w-6 -left-2" />
          <CarouselNext className="h-6 w-6 -right-2" />
        </Carousel>
      </CardContent>
    </Card>
  );
}
