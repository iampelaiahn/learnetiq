
'use client';
import * as React from 'react';
import { ListFilter } from 'lucide-react';
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
import type { CheckedState } from '@radix-ui/react-checkbox';
import { CourseCombobox } from '@/components/courses/CourseCombobox';


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
        id: 'calculus-101',
        title: 'Calculus 101',
        description: 'An introductory course to the fundamental concepts of calculus, including limits, derivatives, and integrals.',
        image: 'https://placehold.co/400x300.png',
        aiHint: 'mathematical equations',
        rating: 4,
        reviewCount: 350,
        level: 'Intermediate',
        category: 'Mathematics',
        status: 'active',
    },
    {
        id: 'physics-fundamentals',
        title: 'Fundamentals of Physics',
        description: 'Explore the basic principles of mechanics, electricity, and magnetism that govern the physical world.',
        image: 'https://placehold.co/400x300.png',
        aiHint: 'physics experiment',
        rating: 5,
        reviewCount: 480,
        level: 'Beginner',
        category: 'Physics',
        status: 'active',
    },
    {
        id: 'world-history',
        title: 'World History: Ancient Civilizations',
        description: 'A journey through time exploring the great civilizations of the ancient world.',
        image: 'https://placehold.co/400x300.png',
        aiHint: 'historical map',
        rating: 4,
        reviewCount: 210,
        level: 'All levels',
        category: 'History',
        status: 'active',
    },
    {
        id: 'intro-chemistry',
        title: 'Introduction to Chemistry',
        description: 'Learn about the building blocks of matter, chemical reactions, and the periodic table.',
        image: 'https://placehold.co/400x300.png',
        aiHint: 'chemistry lab',
        rating: 3,
        reviewCount: 150,
        level: 'Beginner',
        category: 'Chemistry',
        status: 'active',
    },
    {
        id: 'cellular-biology',
        title: 'Cellular Biology',
        description: 'Dive into the microscopic world of cells, their structures, and their functions.',
        image: 'https://placehold.co/400x300.png',
        aiHint: 'microscope view',
        rating: 5,
        reviewCount: 600,
        level: 'Advanced',
        category: 'Biology',
        status: 'completed',
    },
    {
        id: 'beginner-shona',
        title: 'Beginner Shona',
        description: 'Learn the basics of the Shona language, including greetings, common phrases, and sentence structure.',
        image: 'https://placehold.co/400x300.png',
        aiHint: 'african language',
        rating: 4,
        reviewCount: 80,
        level: 'Beginner',
        category: 'Shona',
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
    },
    {
        id: 'accounting-principles',
        title: 'Principles of Accounting',
        description: 'Master the fundamentals of financial accounting, including bookkeeping, financial statements, and analysis.',
        image: 'https://placehold.co/400x300.png',
        aiHint: 'financial ledger',
        rating: 4,
        reviewCount: 320,
        level: 'Intermediate',
        category: 'Accounts',
        status: 'active',
    },
    {
        id: 'intro-commerce',
        title: 'Introduction to Commerce',
        description: 'An overview of business, trade, and the economic principles that drive the world of commerce.',
        image: 'https://placehold.co/400x300.png',
        aiHint: 'business meeting',
        rating: 4,
        reviewCount: 190,
        level: 'Beginner',
        category: 'Commerce',
        status: 'active',
    }
  ];
  
type Category = 'English' | 'Mathematics' | 'Physics' | 'History' | 'Chemistry' | 'Biology' | 'Shona' | 'French' | 'Accounts' | 'Commerce';
const categories: Category[] = ['English', 'Mathematics', 'Physics', 'History', 'Chemistry', 'Biology', 'Shona', 'French', 'Accounts', 'Commerce'];

export default function CoursesPage() {
    const [selectedCategories, setSelectedCategories] = React.useState<Record<Category, boolean>>({
        English: true,
        Mathematics: true,
        Physics: true,
        History: true,
        Chemistry: true,
        Biology: true,
        Shona: true,
        French: true,
        Accounts: true,
        Commerce: true,
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
          return activeCategories.includes(course.category);
        });
      }, [selectedCategories]);


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
                <div className="flex items-center gap-2">
                    <CourseCombobox courses={coursesData.map(c => ({ id: c.id, title: c.title }))} />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="shrink-0">
                                <ListFilter className="mr-2 h-4 w-4" />
                                Filter
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Filter by Subject</DropdownMenuLabel>
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
