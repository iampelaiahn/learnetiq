
import { CourseCard } from '@/components/tutor/courses/CourseCard';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import Link from 'next/link';

const tutorCourses = [
    {
      id: 'calculus-i',
      title: 'Calculus I',
      studentCount: 45,
      progress: 82,
      image: 'https://placehold.co/600x400.png',
      aiHint: 'calculus graph',
    },
    {
      id: 'quantum-physics',
      title: 'Quantum Physics',
      studentCount: 32,
      progress: 68,
      image: 'https://placehold.co/600x400.png',
      aiHint: 'atom structure',
    },
    {
      id: 'world-of-shakespeare',
      title: 'The World of Shakespeare',
      studentCount: 28,
      progress: 91,
      image: 'https://placehold.co/600x400.png',
      aiHint: 'shakespeare portrait',
    },
    {
        id: 'renaissance-history',
        title: 'Renaissance History',
        studentCount: 35,
        progress: 75,
        image: 'https://placehold.co/600x400.png',
        aiHint: 'renaissance painting',
    }
  ];

export default function TutorCoursesPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
            <h1 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
            My Courses
            </h1>
            <p className="mt-2 text-muted-foreground">
            Manage your courses and learning materials.
            </p>
        </div>
        <Button asChild>
            <Link href="/tutor/courses/new">
                <PlusCircle className="mr-2 h-4 w-4" />
                Create New Course
            </Link>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutorCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
        ))}
      </div>

    </div>
  );
}
