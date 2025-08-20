'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlayCircle, Clock, Star, Users } from 'lucide-react';
import Image from 'next/image';
import { redirect } from 'next/navigation';

const courseData = {
  'career-dev': {
    title: 'English for career development',
    description:
      'In this course, you will learn about the job search, application, and interview process in the United States, while comparing and contrasting the same process in your home country. This course will also give you the opportunity to explore your global career path, while building your vocabulary and improving your language skills to achieve your professional goals.',
    instructor: {
      name: 'Cortney McGregor',
      title: 'Professional English Teacher',
      avatar: 'https://placehold.co/100x100.png',
      aiHint: 'woman teacher',
    },
    videoUrl: 'https://placehold.co/1920x1080.png',
    videoAiHint: 'professional woman waving',
    lectures: 12,
    hours: 2,
    content: [
      {
        title: 'Intro',
        duration: '01:29 min',
        description: 'Meet your teacher and see what you are going to learn in this course.',
      },
      {
        title: 'The Job Search',
        duration: '10:45 min',
        description: 'Learn how to effectively search for jobs online and through networking.',
      },
      {
        title: 'Resume and Cover Letter',
        duration: '15:30 min',
        description: 'Craft a compelling resume and cover letter that stands out.',
      },
      {
        title: 'Interview Skills',
        duration: '20:10 min',
        description: 'Master common interview questions and techniques.',
      },
    ],
  },
};


export default function CourseDetailPage({ params }: { params: { courseId: string } }) {
    if (params.courseId === 'Mathematics') {
        // For now, redirect to a generic courses page or show a list of math courses
        // This can be built out later.
        // For demonstration, we'll just show a placeholder message.
         return (
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold">Mathematics Courses</h1>
            <p className="text-muted-foreground">This section is under construction. Check back soon for math courses!</p>
          </div>
        );
    }
    
    // Fallback to the original logic for other courses
    const data = courseData[params.courseId as keyof typeof courseData];

    if (!data) {
        return (
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold">Course not found</h1>
            <p className="text-muted-foreground">This course does not exist or has been removed.</p>
          </div>
        );
      }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative aspect-video w-full">
              <Image
                src={data.videoUrl}
                alt={data.title}
                fill
                className="object-cover"
                data-ai-hint={data.videoAiHint}
              />
               <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <PlayCircle className="h-20 w-20 text-white/80 hover:text-white transition-colors cursor-pointer" />
                </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-2">
        <h1 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
          {data.title}
        </h1>
        <p className="text-lg text-muted-foreground">{data.description}</p>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={data.instructor.avatar} data-ai-hint={data.instructor.aiHint}/>
            <AvatarFallback>{data.instructor.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{data.instructor.name}</p>
            <p className="text-sm text-muted-foreground">{data.instructor.title}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Star className="h-4 w-4 text-accent fill-accent"/>
            <span>4.8 (2.1k reviews)</span>
        </div>
      </div>
      
      <div>
        <h2 className="font-headline text-2xl font-bold mb-4">Course's content</h2>
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
            <span>{data.lectures} lectures</span>
            <span>{data.hours} hours</span>
        </div>
        <Accordion type="single" collapsible className="w-full" defaultValue='item-0'>
          {data.content.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>
                <div className='flex items-center gap-4 text-left'>
                    <span className="text-accent font-bold">{String(index + 1).padStart(2, '0')}</span>
                    <div>
                        <p className='font-semibold'>{item.title}</p>
                        <p className='text-sm text-muted-foreground'>{item.duration}</p>
                    </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className='pl-12'>
                {item.description}
                <Button variant="ghost" className="mt-2 text-accent hover:text-accent">
                    <PlayCircle className="mr-2 h-4 w-4" />
                    Watch lecture
                </Button>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
