
'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell } from 'lucide-react';
import { format } from 'date-fns';

type Activity = {
    activity: string;
    date: string;
}

type RecentActivityProps = {
    activities: Activity[];
}

export function RecentActivity({ activities }: RecentActivityProps) {
    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-4">
                    {activities.map((item, index) => (
                        <li key={index} className="flex items-start gap-4">
                            <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Bell className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="font-semibold">{item.activity}</p>
                                <p className="text-sm text-muted-foreground">{format(new Date(item.date), 'PPP')}</p>
                            </div>
                        </li>
                    ))}
                </ul>
                <Button variant="link" className="mt-4 px-0">View all activity</Button>
            </CardContent>
        </Card>
    )
}
