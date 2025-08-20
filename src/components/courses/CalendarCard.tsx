
'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import * as React from 'react';

const studySchedule = [
    { date: new Date(2025, 7, 4), subject: 'Mathematics' },
    { date: new Date(2025, 7, 5), subject: 'Mathematics' },
    { date: new Date(2025, 7, 6), subject: 'Physics' },
    { date: new Date(2025, 7, 11), subject: 'History' },
    { date: new Date(2025, 7, 12), subject: 'History' },
    { date: new Date(2025, 7, 13), subject: 'Chemistry' },
    { date: new Date(2025, 7, 18), subject: 'Biology' },
    { date: new Date(2025, 7, 19), subject: 'English Literature' },
    { date: new Date(2025, 7, 20), subject: 'English Literature' },
    { date: new Date(2025, 7, 25), subject: 'Computer Science' },
    { date: new Date(2025, 7, 26), subject: 'Computer Science' },
];

const subjectColors: Record<string, string> = {
    Mathematics: 'bg-blue-200',
    Physics: 'bg-green-200',
    History: 'bg-yellow-200',
    Chemistry: 'bg-purple-200',
    Biology: 'bg-pink-200',
    'English Literature': 'bg-indigo-200',
    'Computer Science': 'bg-red-200',
};

const darkSubjectColors: Record<string, string> = {
    Mathematics: 'bg-blue-800',
    Physics: 'bg-green-800',
    History: 'bg-yellow-800',
    Chemistry: 'bg-purple-800',
    Biology: 'bg-pink-800',
    'English Literature': 'bg-indigo-800',
    'Computer Science': 'bg-red-800',
}

const modifiers = studySchedule.reduce((acc, item) => {
    if (!acc[item.subject]) {
        acc[item.subject] = [];
    }
    acc[item.subject].push(item.date);
    return acc;
}, {} as Record<string, Date[]>);


export function CalendarCard() {
    const [date, setDate] = React.useState<Date | undefined>(new Date(2025, 7, 15));
    const [theme, setTheme] = React.useState('light');

    React.useEffect(() => {
        // Function to run on mount and when theme changes
        const handleThemeChange = () => {
            const isDark = document.documentElement.classList.contains('dark');
            setTheme(isDark ? 'dark' : 'light');
        };

        // Run on initial mount
        handleThemeChange(); 

        // Set up a MutationObserver to watch for class changes on the root element
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    handleThemeChange();
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true, 
        });

        // Cleanup observer on component unmount
        return () => observer.disconnect();
    }, []);

    const modifierClassNames = React.useMemo(() => {
         return Object.keys(subjectColors).reduce((acc, subject) => {
            acc[subject] = `text-foreground ${theme === 'dark' ? darkSubjectColors[subject] : subjectColors[subject]}`;
            return acc;
        }, {} as Record<string, string>);
    }, [theme])

    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-lg">Study Schedule</CardTitle>
            </CardHeader>
            <CardContent className="p-2">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="w-full"
                    month={new Date(2025, 7, 1)}
                    modifiers={modifiers}
                    modifiersClassNames={modifierClassNames}
                />
                 <div className="mt-4 px-2 space-y-2">
                    <h4 className="font-semibold text-sm">Legend</h4>
                    <div className="flex flex-wrap gap-2">
                        {Object.entries(subjectColors).map(([subject, colorClass]) => (
                            <div key={subject} className="flex items-center gap-2 text-xs">
                                <span className={`h-3 w-3 rounded-full ${theme === 'dark' ? darkSubjectColors[subject] : colorClass}`}></span>
                                <span>{subject}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
