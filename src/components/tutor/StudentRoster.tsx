
'use client';

import { useRouter } from 'next/navigation';
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
import { MoreHorizontal, ArrowRight } from 'lucide-react';
  
  export const students = [
    {
      id: '1',
      name: 'Alex Johnson',
      avatar: 'https://placehold.co/100x100.png',
      aiHint: 'male student',
      course: 'Calculus I',
      progress: 85,
      lastActive: '2 hours ago',
      email: 'alex.j@example.com',
      attendance: '98%',
      assignmentsCompleted: '18/20',
      overallScore: 88,
      subjectScores: [
        { subject: 'Limits', score: 92 },
        { subject: 'Derivatives', score: 85 },
        { subject: 'Integrals', score: 88 },
        { subject: 'Sequences', score: 80 },
        { subject: 'Series', score: 95 },
      ],
      recentActivity: [
        { activity: 'Submitted Assignment 5', date: '2024-07-20' },
        { activity: 'Attended Live Class: Advanced Integrals', date: '2024-07-18' },
        { activity: 'Scored 95% on Quiz 4', date: '2024-07-17' },
      ]
    },
    {
      id: '2',
      name: 'Brenda Smith',
      avatar: 'https://placehold.co/100x100.png',
      aiHint: 'female student',
      course: 'Quantum Physics',
      progress: 72,
      lastActive: '5 hours ago',
      email: 'brenda.s@example.com',
      attendance: '92%',
      assignmentsCompleted: '15/20',
      overallScore: 78,
       subjectScores: [
        { subject: 'Wave-particle duality', score: 75 },
        { subject: 'Quantum states', score: 80 },
        { subject: 'Heisenberg Principle', score: 68 },
        { subject: 'Schrödinger Equation', score: 70 },
        { subject: 'Quantum Entanglement', score: 82 },
      ],
      recentActivity: [
        { activity: 'Submitted Lab Report 3', date: '2024-07-19' },
        { activity: 'Asked a question in the forum', date: '2024-07-18' },
        { activity: 'Scored 70% on Midterm Exam', date: '2024-07-15' },
      ]
    },
    {
      id: '3',
      name: 'Charlie Brown',
      avatar: 'https://placehold.co/100x100.png',
      aiHint: 'boy portrait',
      course: 'Calculus I',
      progress: 91,
      lastActive: '1 day ago',
       email: 'charlie.b@example.com',
      attendance: '100%',
      assignmentsCompleted: '20/20',
      overallScore: 94,
       subjectScores: [
        { subject: 'Limits', score: 98 },
        { subject: 'Derivatives', score: 95 },
        { subject: 'Integrals', score: 92 },
        { subject: 'Sequences', score: 90 },
        { subject: 'Series', score: 96 },
      ],
      recentActivity: [
        { activity: 'Completed "Calculus I" course', date: '2024-07-21' },
        { activity: 'Submitted Final Project', date: '2024-07-20' },
        { activity: 'Scored 98% on Final Exam', date: '2024-07-19' },
      ]
    },
    {
        id: '4',
        name: 'Diana Prince',
        avatar: 'https://placehold.co/100x100.png',
        aiHint: 'woman smiling',
        course: 'World of Shakespeare',
        progress: 65,
        lastActive: '3 days ago',
        email: 'diana.p@example.com',
        attendance: '85%',
        assignmentsCompleted: '12/20',
        overallScore: 71,
         subjectScores: [
            { subject: 'Comedies', score: 75 },
            { subject: 'Tragedies', score: 80 },
            { subject: 'Histories', score: 65 },
            { subject: 'Sonnets', score: 70 },
            { subject: 'Language', score: 68 },
        ],
        recentActivity: [
            { activity: 'Submitted Essay on Hamlet', date: '2024-07-18' },
            { activity: 'Missed Live Class: Macbeth Analysis', date: '2024-07-16' },
            { activity: 'Scored 65% on Sonnet Quiz', date: '2024-07-14' },
        ]
    },
    {
        id: '5',
        name: 'Ethan Hunt',
        avatar: 'https://placehold.co/100x100.png',
        aiHint: 'man portrait',
        course: 'Renaissance History',
        progress: 78,
        lastActive: '1 week ago',
        email: 'ethan.h@example.com',
        attendance: '95%',
        assignmentsCompleted: '17/20',
        overallScore: 82,
        subjectScores: [
            { subject: 'Italian Renaissance', score: 88 },
            { subject: 'Northern Renaissance', score: 82 },
            { subject: 'Medici Family', score: 75 },
            { subject: 'Art & Patronage', score: 85 },
            { subject: 'Reformation', score: 79 },
        ],
        recentActivity: [
            { activity: 'Submitted Research Paper', date: '2024-07-15' },
            { activity: 'Attended Live Class: The Medici', date: '2024-07-14' },
            { activity: 'Scored 80% on Quiz 3', date: '2024-07-12' },
        ]
    },
  ];
  
  export function StudentRoster() {
    const router = useRouter();
    const handleRowClick = (studentId: string) => {
        router.push(`/tutor/students/${studentId}`);
    };

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
                <TableHead className="w-[120px] text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => (
                <TableRow 
                    key={student.id} 
                    onDoubleClick={() => handleRowClick(student.id)}
                    className="hover:bg-muted/50"
                >
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
                  <TableCell className="text-center">
                    <Button variant="outline" size="sm" onClick={() => handleRowClick(student.id)}>
                        View Report
                        <ArrowRight className="ml-2 h-4 w-4" />
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
  
