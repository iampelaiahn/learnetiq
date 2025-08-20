
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
import { PlayCircle, Star } from 'lucide-react';
import Image from 'next/image';
import { CourseListItem } from '@/components/courses/CourseListItem';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarCard } from '@/components/courses/CalendarCard';
import { OnlineUsers } from '@/components/courses/OnlineUsers';
import { useParams } from 'next/navigation';

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

const allSubjectsCourses = {
    Mathematics: [
        {
          id: 'algebra-basics',
          title: 'Algebra Basics',
          description: 'Master the fundamentals of algebraic expressions, equations, and functions. Perfect for beginners.',
          image: 'https://placehold.co/300x200.png',
          aiHint: 'algebra equations',
          rating: 4,
          reviewCount: 412,
          level: 'Beginner',
          category: 'Mathematics',
          status: 'active' as const,
        },
        {
          id: 'geometry-foundations',
          title: 'Geometry Foundations',
          description: 'Explore the world of shapes, angles, and spatial reasoning. Learn key theorems and proofs.',
          image: 'https://placehold.co/300x200.png',
          aiHint: 'geometric shapes',
          rating: 5,
          reviewCount: 580,
          level: 'Beginner',
          category: 'Mathematics',
          status: 'active' as const,
        },
        {
          id: 'calculus-i',
          title: 'Calculus I',
          description: 'An introduction to differential calculus, including limits, derivatives, and their applications.',
          image: 'https://placehold.co/300x200.png',
          aiHint: 'calculus graphs',
          rating: 5,
          reviewCount: 720,
          level: 'Intermediate',
          category: 'Mathematics',
          status: 'active' as const,
        },
         {
          id: 'probability-stats',
          title: 'Probability & Statistics',
          description: 'Learn to analyze data, understand probability distributions, and perform statistical tests.',
          image: 'https://placehold.co/300x200.png',
          aiHint: 'data charts',
          rating: 4,
          reviewCount: 380,
          level: 'Intermediate',
          category: 'Mathematics',
          status: 'completed' as const,
        },
    ],
    Geography: [],
    History: [],
    Accounting: [],
    Science: [],
    Biology: [],
    'Business studies': [],
    Physics: [],
    ICT: [],
    'Physical Education': [],
    Chemistry: [],
    Economics: [],
    'English Literature': [],
    Commerce: [],
    'Computer Science': [],
    'Performing arts': [],
    'Religious studies': [],
    Sociology: [],
    Agriculture: [],
    'Design and Technology': [],
    'Visual Arts': [],
    'Business English': [],
    Shona: [],
}

const subjectSlugs = Object.keys(allSubjectsCourses);


function SubjectCoursesPage({ subject }: { subject: string }) {
    const courses = allSubjectsCourses[subject as keyof typeof allSubjectsCourses] || [];
    
    if (courses.length === 0) {
        return (
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2 space-y-6">
                    <div>
                        <h1 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
                        My Courses
                        </h1>
                        <p className="mt-2 text-muted-foreground">
                            Continue your learning journey in {subject}.
                        </p>
                    </div>
                    <div className="text-center py-12 border rounded-lg">
                        <h2 className="text-xl font-semibold">No Courses Yet</h2>
                        <p className="text-muted-foreground mt-2">Courses for {subject} are coming soon. Check back later!</p>
                    </div>
                </div>
                 <div className="lg:col-span-1 space-y-6">
                    <CalendarCard />
                    <OnlineUsers />
                </div>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-6">
                 <div>
                    <h1 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
                    My Courses
                    </h1>
                    <p className="mt-2 text-muted-foreground">
                        Continue your learning journey in {subject}.
                    </p>
                </div>
                 <Tabs defaultValue="all" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 md:w-[400px]">
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="active">Active</TabsTrigger>
                        <TabsTrigger value="completed">Completed</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all" className="mt-6 space-y-4">
                        {courses.map(course => <CourseListItem key={course.id} course={course} />)}
                    </TabsContent>
                    <TabsContent value="active" className="mt-6 space-y-4">
                         {courses.filter(c => c.status === 'active').map(course => <CourseListItem key={course.id} course={course} />)}
                    </TabsContent>
                    <TabsContent value="completed" className="mt-6 space-y-4">
                        {courses.filter(c => c.status === 'completed').map(course => <CourseListItem key={course.id} course={course} />)}
                    </TabsContent>
                </Tabs>
            </div>
             <div className="lg:col-span-1 space-y-6">
                <CalendarCard />
                <OnlineUsers />
            </div>
        </div>
    )
}


export default function CourseDetailPage() {
    const params = useParams();
    const courseId = params.courseId as string;
    const subject = decodeURIComponent(courseId);

    if (subjectSlugs.includes(subject)) {
        return <SubjectCoursesPage subject={subject} />;
    }
    
    // Fallback to the original logic for a specific course
    const data = courseData[courseId as keyof typeof courseData];

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
