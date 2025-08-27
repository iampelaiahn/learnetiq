
import { ClassCard } from '@/components/live-classes/ClassCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarPlus } from 'lucide-react';
import Link from 'next/link';


const tutorClasses = [
    {
      title: 'Advanced Calculus',
      tutor: 'You',
      status: 'On going',
      image: 'https://placehold.co/600x400.png',
      aiHint: 'mathematics classroom',
      classId: '1',
    },
    {
      title: 'Intro to Quantum Physics',
      tutor: 'You',
      status: 'Upcoming',
      image: 'https://placehold.co/600x400.png',
      aiHint: 'physics blackboard',
      classId: '2',
    },
    {
      title: 'The World of Shakespeare',
      tutor: 'You',
      status: 'Upcoming',
      image: 'https://placehold.co/600x400.png',
      aiHint: 'literature books',
      classId: '3',
    },
    {
      title: 'Renaissance History',
      tutor: 'You',
      status: 'Completed',
      image: 'https://placehold.co/600x400.png',
      aiHint: 'history lecture',
      classId: '4',
    },
  ];

export default function TutorLiveClassesPage() {
    const ongoingClasses = tutorClasses.filter((c) => c.status === 'On going');
    const upcomingClasses = tutorClasses.filter((c) => c.status === 'Upcoming');
    const completedClasses = tutorClasses.filter((c) => c.status === 'Completed');

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
                    Live Classes
                    </h1>
                    <p className="mt-2 text-muted-foreground">
                    Schedule and manage your live classes.
                    </p>
                </div>
                <Button asChild>
                    <Link href="/tutor/classes/new">
                        <CalendarPlus className="mr-2 h-4 w-4" />
                        Schedule New Class
                    </Link>
                </Button>
            </div>

            <Tabs defaultValue="upcoming" className="w-full">
                <TabsList className="grid w-full grid-cols-3 md:w-[400px]">
                <TabsTrigger value="ongoing">On going</TabsTrigger>
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>
                <TabsContent value="ongoing" className="mt-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {ongoingClasses.length > 0 ? (
                    ongoingClasses.map((c, i) => <ClassCard key={i} {...c} classId={`${i+1}`}/>)
                    ) : (
                    <p>No ongoing classes right now.</p>
                    )}
                </div>
                </TabsContent>
                <TabsContent value="upcoming" className="mt-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {upcomingClasses.length > 0 ? (
                    upcomingClasses.map((c, i) => <ClassCard key={i} {...c} classId={`${i+1}`} />)
                    ) : (
                    <p>No upcoming classes scheduled.</p>
                    )}
                </div>
                </TabsContent>
                <TabsContent value="completed" className="mt-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {completedClasses.length > 0 ? (
                    completedClasses.map((c, i) => <ClassCard key={i} {...c} classId={`${i+1}`} />)
                    ) : (
                    <p>You haven't completed any classes yet.</p>
                    )}
                </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
