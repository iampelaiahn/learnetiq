
'use client';
import * as React from 'react';
import { Search, ListFilter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CourseListItem } from '@/components/courses/CourseListItem';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { CheckedState } from '@radix-ui/react-checkbox';


const coursesData = [
    {
      id: 'career-dev',
      title: 'English for career development',
      description: 'This course discusses the main units and principles of the human nervous system that underly our language.',
      image: 'https://placehold.co/400x300.png',
      aiHint: 'people talking',
      rating: 4,
      reviewCount: 294,
      level: 'All levels',
      category: 'English',
      status: 'active',
    },
    {
      id: 'adv-english',
      title: 'English for career advancement',
      description: 'This course is designed for non-native English speakers who are interested in advancing their career.',
      image: 'https://placehold.co/400x300.png',
      aiHint: 'person climbing stairs',
      rating: 5,
      reviewCount: 312,
      level: 'Intermediate',
      category: 'English',
      status: 'active',
    },
    {
      id: 'first-steps-chinese',
      title: 'First steps in Chinese',
      description: 'This is an elementary-level Korean language course, consisting of 5 lessons, and covers 4 skills: reading.',
      image: 'https://placehold.co/400x300.png',
      aiHint: 'chinese characters',
      rating: 3,
      reviewCount: 110,
      level: 'Beginner',
      category: 'Chinese',
      status: 'active',
    },
    {
      id: 'managing-class',
      title: 'English Teaching: managing the class',
      description: 'The course will introduce students to important aspects of classroom management: class size and...',
      image: 'https://placehold.co/400x300.png',
      aiHint: 'teacher classroom',
      rating: 4,
      reviewCount: 189,
      level: 'Intermediate',
      category: 'English',
      status: 'completed',
    },
    {
      id: 'american-english',
      title: 'Pronunciation of American English',
      description: 'Learners will improve their pronunciation by practicing realistic dialogues and other interactive exercises.',
      image: 'https://placehold.co/400x300.png',
      aiHint: 'speaking person',
      rating: 5,
      reviewCount: 450,
      level: 'All levels',
      category: 'English',
      status: 'active',
    },
    {
        id: 'basic-spanish',
        title: 'Basic Spanish for Travelers',
        description: 'Learn essential Spanish phrases and vocabulary for your next trip to a Spanish-speaking country.',
        image: 'https://placehold.co/400x300.png',
        aiHint: 'travel map',
        rating: 4,
        reviewCount: 250,
        level: 'Beginner',
        category: 'Spanish',
        status: 'active',
    },
    {
        id: 'french-pastry',
        title: 'Introduction to French Pastry',
        description: 'Discover the art of making classic French pastries like croissants and macarons in this delicious course.',
        image: 'https://placehold.co/400x300.png',
        aiHint: 'french pastries',
        rating: 5,
        reviewCount: 520,
        level: 'All levels',
        category: 'French',
        status: 'completed',
    }
  ];
  
type Category = 'English' | 'Spanish' | 'French' | 'Chinese';
const categories: Category[] = ['English', 'Spanish', 'French', 'Chinese'];

export default function CoursesPage() {
    const [statusFilter, setStatusFilter] = React.useState('all');
    const [selectedCategories, setSelectedCategories] = React.useState<Record<Category, boolean>>({
        English: true,
        Spanish: false,
        French: false,
        Chinese: false,
    });
    
    const handleCategoryChange = (category: Category) => (checked: CheckedState) => {
        setSelectedCategories(prev => ({...prev, [category]: !!checked}));
    };

    const filteredCourses = React.useMemo(() => {
        const activeCategories = Object.entries(selectedCategories)
          .filter(([, isSelected]) => isSelected)
          .map(([category]) => category);
    
        if (activeCategories.length === 0) {
          return [];
        }
    
        return coursesData.filter(course => {
          const statusMatch = statusFilter === 'all' || course.status === statusFilter;
          const categoryMatch = activeCategories.includes(course.category);
          return statusMatch && categoryMatch;
        });
      }, [statusFilter, selectedCategories]);


    return (
        <div className="space-y-6">
             <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
                    Courses
                    </h1>
                    <p className="mt-2 text-muted-foreground">
                        Browse and enroll in courses to expand your knowledge.
                    </p>
                </div>
                <div className="relative w-full md:w-64">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search courses..." className="pl-8" />
                </div>
            </div>

            <div className="flex items-center justify-between">
                <Tabs defaultValue="all" onValueChange={setStatusFilter}>
                    <TabsList>
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="active">Active</TabsTrigger>
                        <TabsTrigger value="completed">Completed</TabsTrigger>
                    </TabsList>
                </Tabs>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            <ListFilter className="mr-2 h-4 w-4" />
                            Filter
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Filter by Language</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {categories.map(category => (
                            <DropdownMenuCheckboxItem
                                key={category}
                                checked={selectedCategories[category]}
                                onCheckedChange={handleCategoryChange(category)}
                            >
                                {category}
                            </DropdownMenuCheckboxItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            
            <div className="space-y-4">
                {filteredCourses.map(course => (
                    <CourseListItem key={course.id} course={course} />
                ))}
                 {filteredCourses.length === 0 && (
                    <div className="text-center text-muted-foreground py-12">
                        <p className="text-lg font-semibold">No courses found</p>
                        <p>Try adjusting your filters to find more courses.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

