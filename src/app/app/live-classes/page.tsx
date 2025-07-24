import { ClassCard } from '@/components/live-classes/ClassCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const classes = [
  {
    title: 'Advanced Calculus',
    tutor: 'Dr. Evelyn Reed',
    status: 'On going',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'mathematics classroom',
  },
  {
    title: 'Intro to Quantum Physics',
    tutor: 'Prof. Alistair Finch',
    status: 'Upcoming',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'physics blackboard',
  },
  {
    title: 'The World of Shakespeare',
    tutor: 'Dr. Eleanor Vance',
    status: 'Upcoming',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'literature books',
  },
  {
    title: 'Renaissance History',
    tutor: 'Mr. David Chen',
    status: 'Completed',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'history lecture',
  },
];

export default function LiveClassesPage() {
  const ongoingClasses = classes.filter((c) => c.status === 'On going');
  const upcomingClasses = classes.filter((c) => c.status === 'Upcoming');
  const completedClasses = classes.filter((c) => c.status === 'Completed');

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
          Live Classes
        </h1>
        <p className="mt-2 text-muted-foreground">
          Join live sessions with expert tutors.
        </p>
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
