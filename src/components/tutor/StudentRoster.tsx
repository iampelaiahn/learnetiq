
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from '@/components/ui/avatar';
  import { Button } from '@/components/ui/button';
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from '@/components/ui/table';
import { Badge } from '../ui/badge';
import { MoreHorizontal } from 'lucide-react';
  
  const students = [
    {
      name: 'Alex Johnson',
      avatar: 'https://placehold.co/40x40.png',
      aiHint: 'male student',
      course: 'Calculus I',
      progress: 85,
      lastActive: '2 hours ago',
    },
    {
      name: 'Brenda Smith',
      avatar: 'https://placehold.co/40x40.png',
      aiHint: 'female student',
      course: 'Quantum Physics',
      progress: 72,
      lastActive: '5 hours ago',
    },
    {
      name: 'Charlie Brown',
      avatar: 'https://placehold.co/40x40.png',
      aiHint: 'boy portrait',
      course: 'Calculus I',
      progress: 91,
      lastActive: '1 day ago',
    },
    {
        name: 'Diana Prince',
        avatar: 'https://placehold.co/40x40.png',
        aiHint: 'woman smiling',
        course: 'World of Shakespeare',
        progress: 65,
        lastActive: '3 days ago',
    },
    {
        name: 'Ethan Hunt',
        avatar: 'https://placehold.co/40x40.png',
        aiHint: 'man portrait',
        course: 'Renaissance History',
        progress: 78,
        lastActive: '1 week ago',
    },
  ];
  
  export function StudentRoster() {
    return (
      <Card className="h-full">
        <CardHeader>
          <CardTitle>My Students</CardTitle>
          <CardDescription>
            An overview of the students you are currently teaching.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Course</TableHead>
                <TableHead className="text-center">Progress</TableHead>
                <TableHead className="text-right">Last Active</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.name}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={student.avatar} data-ai-hint={student.aiHint}/>
                        <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{student.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{student.course}</TableCell>
                  <TableCell className="text-center">
                    <Badge variant={student.progress > 80 ? "default" : student.progress > 60 ? "secondary" : "destructive"}>
                        {student.progress}%
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right text-muted-foreground">{student.lastActive}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    );
  }
  