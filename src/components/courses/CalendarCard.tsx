
'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import * as React from 'react';

export function CalendarCard() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    
    return (
        <Card>
            <CardContent className="p-0">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="w-full"
                />
            </CardContent>
        </Card>
    );
}
