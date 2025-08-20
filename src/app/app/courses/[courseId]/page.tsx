
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
          color: 'bg-blue-500',
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
          color: 'bg-blue-500',
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
          color: 'bg-blue-500',
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
          color: 'bg-blue-500',
        },
    ],
    Geography: [
      {
        id: 'world-geography',
        title: 'Introduction to World Geography',
        description: 'Explore continents, oceans, and cultural landscapes of our planet.',
        image: 'https://placehold.co/300x200.png',
        aiHint: 'world map',
        rating: 4,
        reviewCount: 350,
        level: 'Beginner',
        category: 'Geography',
        status: 'active' as const,
        color: 'bg-teal-500',
      },
      {
        id: 'physical-geography',
        title: 'Physical Geography: The Earth\'s Surface',
        description: 'Understand the processes that shape the Earth, from mountains to rivers.',
        image: 'https://placehold.co/300x200.png',
        aiHint: 'mountain river',
        rating: 5,
        reviewCount: 480,
        level: 'Intermediate',
        category: 'Geography',
        status: 'active' as const,
        color: 'bg-teal-500',
      }
    ],
    History: [
      {
        id: 'ancient-civilizations',
        title: 'Ancient Civilizations',
        description: 'A journey through the great empires of the ancient world, from Egypt to Rome.',
        image: 'https://placehold.co/300x200.png',
        aiHint: 'ancient ruins',
        rating: 5,
        reviewCount: 620,
        level: 'Beginner',
        category: 'History',
        status: 'active' as const,
        color: 'bg-yellow-500',
      },
      {
        id: 'modern-history',
        title: 'Modern World History',
        description: 'Explore the major events and transformations from the 19th century to today.',
        image: 'https://placehold.co/300x200.png',
        aiHint: 'historical documents',
        rating: 4,
        reviewCount: 410,
        level: 'Intermediate',
        category: 'History',
        status: 'completed' as const,
        color: 'bg-yellow-500',
      },
    ],
    Accounting: [
      {
        id: 'financial-accounting-basics',
        title: 'Financial Accounting Basics',
        description: 'Learn the core principles of financial accounting, including debits, credits, and financial statements.',
        image: 'https://placehold.co/300x200.png',
        aiHint: 'financial ledger',
        rating: 4,
        reviewCount: 550,
        level: 'Beginner',
        category: 'Accounting',
        status: 'active' as const,
        color: 'bg-cyan-500',
      },
      {
        id: 'managerial-accounting',
        title: 'Introduction to Managerial Accounting',
        description: 'Understand how accounting information is used for internal decision-making.',
        image: 'https://placehold.co/300x200.png',
        aiHint: 'business meeting',
        rating: 5,
        reviewCount: 490,
        level: 'Intermediate',
        category: 'Accounting',
        status: 'active' as const,
        color: 'bg-cyan-500',
      }
    ],
    Science: [
      {
        id: 'scientific-method',
        title: 'The Scientific Method',
        description: 'Learn the systematic process of inquiry that scientists use to explore observations and answer questions.',
        image: 'https://placehold.co/300x200.png',
        aiHint: 'science experiment',
        rating: 4,
        reviewCount: 320,
        level: 'Beginner',
        category: 'Science',
        status: 'active' as const,
        color: 'bg-emerald-500',
      },
      {
        id: 'environmental-science',
        title: 'Introduction to Environmental Science',
        description: 'Explore the interactions between humans and the environment.',
        image: 'https://placehold.co/300x200.png',
        aiHint: 'lush forest',
        rating: 5,
        reviewCount: 450,
        level: 'Beginner',
        category: 'Science',
        status: 'completed' as const,
        color: 'bg-emerald-500',
      }
    ],
    Biology: [
      {
        id: 'intro-to-biology',
        title: 'Introduction to Biology',
        description: 'Explore the fundamental concepts of life, from cells to ecosystems.',
        image: 'https://placehold.co/300x200.png',
        aiHint: 'cell diagram',
        rating: 4,
        reviewCount: 510,
        level: 'Beginner',
        category: 'Biology',
        status: 'active' as const,
        color: 'bg-pink-500',
      },
      {
        id: 'genetics-dna',
        title: 'Genetics and DNA',
        description: 'Unlock the secrets of heredity and the building blocks of life.',
        image: 'https://placehold.co/300x200.png',
        aiHint: 'dna helix',
        rating: 5,
        reviewCount: 680,
        level: 'Advanced',
        category: 'Biology',
        status: 'active' as const,
        color: 'bg-pink-500',
      }
    ],
    'Business studies': [
      {
        id: 'intro-business',
        title: 'Introduction to Business',
        description: 'Learn the basics of business, including management, marketing, and finance.',
        image: 'https://placehold.co/300x200.png',
        aiHint: 'business people',
        rating: 4,
        reviewCount: 430,
        level: 'Beginner',
        category: 'Business studies',
        status: 'active' as const,
        color: 'bg-orange-500',
      },
      {
        id: 'entrepreneurship-101',
        title: 'Entrepreneurship 101',
        description: 'From idea to launch, learn how to start your own business.',
        image: 'https://placehold.co/300x200.png',
        aiHint: 'startup office',
        rating: 5,
        reviewCount: 590,
        level: 'Intermediate',
        category: 'Business studies',
        status: 'completed' as const,
        color: 'bg-orange-500',
      }
    ],
    Physics: [
       {
        id: 'newtonian-mechanics',
        title: 'Newtonian Mechanics',
        description: 'Understand the laws of motion and gravity as described by Sir Isaac Newton.',
        image: 'https://placehold.co/300x200.png',
        aiHint: 'apple falling',
        rating: 5,
        reviewCount: 710,
        level: 'Intermediate',
        category: 'Physics',
        status: 'active' as const,
        color: 'bg-green-500',
      },
       {
        id: 'intro-quantum',
        title: 'Introduction to Quantum Mechanics',
        description: 'A beginner\'s guide to the weird and wonderful world of quantum physics.',
        image: 'https://placehold.co/300x200.png',
        aiHint: 'quantum particles',
        rating: 4,
        reviewCount: 490,
        level: 'Advanced',
        category: 'Physics',
        status: 'active' as const,
        color: 'bg-green-500',
      },
    ],
    ICT: [
       {
        id: 'computer-hardware',
        title: 'Understanding Computer Hardware',
        description: 'Learn about the components that make up a computer system.',
        image: 'https://placehold.co/300x200.png',
        aiHint: 'computer motherboard',
        rating: 4,
        reviewCount: 380,
        level: 'Beginner',
        category: 'ICT',
        status: 'active' as const,
        color: 'bg-sky-500',
      },
       {
        id: 'networking-basics',
        title: 'Networking Basics',
        description: 'An introduction to computer networks, protocols, and the internet.',
        image: 'https://placehold.co/300x200.png',
        aiHint: 'network servers',
        rating: 5,
        reviewCount: 520,
        level: 'Intermediate',
        category: 'ICT',
        status: 'active' as const,
        color: 'bg-sky-500',
      },
    ],
    'Physical Education': [
      {
        id: 'health-fitness',
        title: 'Foundations of Health and Fitness',
        description: 'Learn about the importance of physical activity, nutrition, and overall well-being.',
        image: 'https://placehold.co/300x200.png',
        aiHint: 'person running',
        rating: 4,
        reviewCount: 280,
        level: 'Beginner',
        category: 'Physical Education',
        status: 'active' as const,
        color: 'bg-lime-500',
      },
      {
        id: 'sports-science',
        title: 'Introduction to Sports Science',
        description: 'Explore the scientific principles behind athletic performance.',
        image: 'https://placehold.co/300x200.png',
        aiHint: 'sports stadium',
        rating: 5,
        reviewCount: 390,
        level: 'Intermediate',
        category: 'Physical Education',
        status: 'completed' as const,
        color: 'bg-lime-500',
      }
    ],
    Chemistry: [
      {
        id: 'intro-chemistry',
        title: 'Introduction to Chemistry',
        description: 'Explore the fundamental principles of matter and its interactions.',
        image: 'https://placehold.co/300x200.png',
        aiHint: 'chemistry beakers',
        rating: 4,
        reviewCount: 460,
        level: 'Beginner',
        category: 'Chemistry',
        status: 'active' as const,
        color: 'bg-purple-500',
      },
      {
        id: 'organic-chemistry',
        title: 'Organic Chemistry I',
        description: 'A deep dive into the structure, properties, and reactions of organic compounds.',
        image: 'https://placehold.co/300x200.png',
        aiHint: 'molecular structures',
        rating: 5,
        reviewCount: 610,
        level: 'Advanced',
        category: 'Chemistry',
        status: 'active' as const,
        color: 'bg-purple-500',
      }
    ],
    Economics: [
      {
        id: 'microeconomics',
        title: 'Principles of Microeconomics',
        description: 'Learn how individuals and firms make decisions and interact in markets.',
        image: 'https://placehold.co/300x200.png',
        aiHint: 'supply demand graph',
        rating: 5,
        reviewCount: 580,
        level: 'Intermediate',
        category: 'Economics',
        status: 'active' as const,
        color: 'bg-amber-500',
      },
      {
        id: 'macroeconomics',
        title: 'Principles of Macroeconomics',
        description: 'Study the economy as a whole, including inflation, unemployment, and economic growth.',
        image: 'https://placehold.co/300x200.png',
        aiHint: 'global economy chart',
        rating: 4,
        reviewCount: 470,
        level: 'Intermediate',
        category: 'Economics',
        status: 'completed' as const,
        color: 'bg-amber-500',
      }
    ],
    'English Literature': [
      {
        id: 'shakespeare-intro',
        title: 'Introduction to Shakespeare',
        description: 'Explore the timeless plays and sonnets of the world\'s most famous playwright.',
        image: 'https://placehold.co/300x200.png',
        aiHint: 'shakespeare portrait',
        rating: 5,
        reviewCount: 530,
        level: 'Intermediate',
        category: 'English Literature',
        status: 'active' as const,
        color: 'bg-indigo-500',
      },
      {
        id: 'modernist-literature',
        title: 'Modernist Literature',
        description: 'Analyze the groundbreaking works of authors like Woolf, Joyce, and Eliot.',
        image: 'https://placehold.co/300x200.png',
        aiHint: 'vintage typewriter',
        rating: 4,
        reviewCount: 390,
        level: 'Advanced',
        category: 'English Literature',
        status: 'active' as const,
        color: 'bg-indigo-500',
      }
    ],
    Commerce: [
      {
        id: 'e-commerce-basics',
        title: 'E-Commerce Basics',
        description: 'Learn how to set up and run a successful online store.',
        image: 'https://placehold.co/300x200.png',
        aiHint: 'online shopping',
        rating: 4,
        reviewCount: 420,
        level: 'Beginner',
        category: 'Commerce',
        status: 'active' as const,
        color: 'bg-stone-500',
      },
      {
        id: 'international-trade',
        title: 'Introduction to International Trade',
        description: 'Explore the principles and practices of trade between countries.',
        image: 'https://placehold.co/300x200.png',
        aiHint: 'cargo ship',
        rating: 5,
        reviewCount: 510,
        level: 'Intermediate',
        category: 'Commerce',
        status: 'active' as const,
        color: 'bg-stone-500',
      }
    ],
    'Computer Science': [
      {
        id: 'python-programming',
        title: 'Python for Beginners',
        description: 'A comprehensive introduction to programming using the Python language.',
        image: 'https://placehold.co/300x200.png',
        aiHint: 'python code',
        rating: 5,
        reviewCount: 890,
        level: 'Beginner',
        category: 'Computer Science',
        status: 'active' as const,
        color: 'bg-red-500',
      },
      {
        id: 'data-structures-algorithms',
        title: 'Data Structures & Algorithms',
        description: 'Master the fundamental concepts essential for efficient coding and problem-solving.',
        image: 'https://placehold.co/300x200.png',
        aiHint: 'flow chart',
        rating: 5,
        reviewCount: 1100,
        level: 'Advanced',
        category: 'Computer Science',
        status: 'completed' as const,
        color: 'bg-red-500',
      }
    ],
    'Performing arts': [
      {
        id: 'acting-fundamentals',
        title: 'Acting Fundamentals',
        description: 'Learn the basic techniques of acting for stage and screen.',
        image: 'https://placehold.co/300x200.png',
        aiHint: 'theater masks',
        rating: 4,
        reviewCount: 310,
        level: 'Beginner',
        category: 'Performing arts',
        status: 'active' as const,
        color: 'bg-fuchsia-500',
      },
      {
        id: 'music-theory-intro',
        title: 'Introduction to Music Theory',
        description: 'Understand the building blocks of music, from scales to chords.',
        image: 'https://placehold.co/300x200.png',
        aiHint: 'sheet music',
        rating: 5,
        reviewCount: 450,
        level: 'Beginner',
        category: 'Performing arts',
        status: 'active' as const,
        color: 'bg-fuchsia-500',
      }
    ],
    'Religious studies': [
      {
        id: 'world-religions',
        title: 'Introduction to World Religions',
        description: 'An overview of the major religious traditions around the globe.',
        image: 'https://placehold.co/300x200.png',
        aiHint: 'religious symbols',
        rating: 4,
        reviewCount: 330,
        level: 'Beginner',
        category: 'Religious studies',
        status: 'active' as const,
        color: 'bg-rose-500',
      }
    ],
    Sociology: [
      {
        id: 'intro-sociology',
        title: 'Introduction to Sociology',
        description: 'Explore the study of social life, social change, and the social causes and consequences of human behavior.',
        image: 'https://placehold.co/300x200.png',
        aiHint: 'diverse group people',
        rating: 4,
        reviewCount: 390,
        level: 'Beginner',
        category: 'Sociology',
        status: 'active' as const,
        color: 'bg-neutral-500',
      }
    ],
    Agriculture: [
      {
        id: 'sustainable-agriculture',
        title: 'Sustainable Agriculture',
        description: 'Learn about farming systems that are environmentally sound, profitable, and socially responsible.',
        image: 'https://placehold.co/300x200.png',
        aiHint: 'green farm',
        rating: 5,
        reviewCount: 410,
        level: 'Intermediate',
        category: 'Agriculture',
        status: 'active' as const,
        color: 'bg-green-700',
      }
    ],
    'Design and Technology': [
      {
        id: 'product-design-intro',
        title: 'Introduction to Product Design',
        description: 'Learn the process of designing products from concept to creation.',
        image: 'https://placehold.co/300x200.png',
        aiHint: 'design sketch',
        rating: 4,
        reviewCount: 440,
        level: 'Beginner',
        category: 'Design and Technology',
        status: 'active' as const,
        color: 'bg-slate-500',
      }
    ],
    'Visual Arts': [
      {
        id: 'drawing-basics',
        title: 'Drawing for Beginners',
        description: 'Master the fundamental skills of drawing, from line and shape to shading and perspective.',
        image: 'https://placehold.co/300x200.png',
        aiHint: 'drawing hand',
        rating: 5,
        reviewCount: 650,
        level: 'Beginner',
        category: 'Visual Arts',
        status: 'active' as const,
        color: 'bg-violet-500',
      }
    ],
    'Business English': [
      {
        id: 'professional-communication',
        title: 'Professional Communication',
        description: 'Enhance your business English skills for emails, presentations, and meetings.',
        image: 'https://placehold.co/300x200.png',
        aiHint: 'business presentation',
        rating: 5,
        reviewCount: 520,
        level: 'Intermediate',
        category: 'Business English',
        status: 'active' as const,
        color: 'bg-zinc-500',
      }
    ],
    Shona: [
      {
        id: 'shona-for-beginners',
        title: 'Shona for Beginners',
        description: 'Learn essential vocabulary, grammar, and conversational skills in the Shona language.',
        image: 'https://placehold.co/300x200.png',
        aiHint: 'zimbabwean art',
        rating: 5,
        reviewCount: 120,
        level: 'Beginner',
        category: 'Shona',
        status: 'active' as const,
        color: 'bg-yellow-700',
      }
    ],
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

    