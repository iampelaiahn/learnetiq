'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '../ui/badge';

type Course = {
  id: string;
  title: string;
  description: string;
  image: string;
  aiHint: string;
  rating: number;
  reviewCount: number;
  level: string;
  category: string;
  status: 'active' | 'completed';
};

function StarRating({ rating, reviewCount }: { rating: number, reviewCount: number }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? 'text-accent fill-accent' : 'text-muted-foreground/50'
          }`}
        />
      ))}
       <span className="text-xs text-muted-foreground ml-1">({reviewCount})</span>
    </div>
  );
}

export function CourseListItem({ course }: { course: Course }) {
  return (
    <Link href={`/app/courses/${course.id}`}>
      <Card className="overflow-hidden transition-shadow hover:shadow-md">
        <CardContent className="p-0">
          <div className="grid grid-cols-1 md:grid-cols-4">
            <div className="relative h-48 md:h-full">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
                data-ai-hint={course.aiHint}
              />
            </div>
            <div className="p-4 md:col-span-3 space-y-2">
              <h3 className="font-headline text-lg font-bold">{course.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {course.description}
              </p>
              <div className="flex items-center gap-2 pt-2">
                <StarRating rating={course.rating} reviewCount={course.reviewCount}/>
                <Badge variant="outline">{course.level}</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
