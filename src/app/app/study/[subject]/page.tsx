
'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  BrainCircuit,
  FileText,
  Lightbulb,
  Loader2,
  Quote,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { useParams } from 'next/navigation';
import { useEffect, useState, useMemo } from 'react';
import { ScrollBar } from '@/components/ui/scroll-area';

// Mock data for topics and content
const subjectData: Record<string, { description: string; topics: Record<string, { summary: string; keyConcepts: string[]; resources: { title: string; type: 'video' | 'doc' }[] }> }> = {
    'Mathematics': {
        description: 'The study of topics such as quantity, structure, space, and change.',
        topics: {
            'Algebra': {
                summary: 'Algebra is a branch of mathematics that deals with symbols and the rules for manipulating those symbols.',
                keyConcepts: ['Variables and constants', 'Solving linear equations', 'Polynomials', 'Factoring'],
                resources: [{ title: 'Khan Academy: Algebra Basics', type: 'video' }, { title: 'Algebra I Formula Sheet', type: 'doc' }]
            },
            'Calculus': {
                summary: 'Calculus is the mathematical study of continuous change, in the same way that geometry is the study of shape and algebra is the study of generalizations of arithmetic operations.',
                keyConcepts: ['Limits and Continuity', 'Derivatives', 'Integrals', 'Fundamental Theorem of Calculus'],
                resources: [{ title: '3Blue1Brown: Essence of Calculus', type: 'video' }, { title: 'Calculus Cheat Sheet', type: 'doc' }]
            },
            'Geometry': {
                summary: 'Geometry is a branch of mathematics concerned with properties of space such as the distance, shape, size, and relative position of figures.',
                keyConcepts: ['Points, Lines, and Planes', 'Angles', 'Triangles and Quadrilaterals', 'Pythagorean Theorem'],
                resources: [{ title: 'Euclidean Geometry Basics', type: 'video' }, { title: 'Geometry Postulates and Theorems', type: 'doc' }]
            },
            'Trigonometry': {
                summary: 'Trigonometry is a branch of mathematics that studies relationships between side lengths and angles of triangles.',
                keyConcepts: ['Sine, Cosine, Tangent', 'Unit Circle', 'Trigonometric Identities', 'Inverse Functions'],
                resources: [{ title: 'Trigonometry Introduction', type: 'video' }, { title: 'Trig Identities Reference', type: 'doc' }]
            },
            'Statistics': {
                summary: 'Statistics is the discipline that concerns the collection, organization, analysis, interpretation, and presentation of data.',
                keyConcepts: ['Mean, Median, Mode', 'Standard Deviation', 'Probability Distributions', 'Hypothesis Testing'],
                resources: [{ title: 'Intro to Statistics', type: 'video' }, { title: 'Common Formulas', type: 'doc' }]
            }
        }
    },
    'History': {
        description: 'The study of past events, particularly in human affairs.',
        topics: {
            'Ancient Rome': {
                summary: 'A civilization that grew from a small city-state on the Italian Peninsula into a vast empire that dominated the Mediterranean.',
                keyConcepts: ['The Roman Republic', 'The Roman Empire', 'Julius Caesar', 'Pax Romana'],
                resources: [{ title: 'Crash Course: The Roman Empire', type: 'video' }, { title: 'Timeline of Ancient Rome', type: 'doc' }]
            },
            'World War II': {
                summary: 'A global war that lasted from 1939 to 1945, involving the vast majority of the world\'s countries.',
                keyConcepts: ['Axis vs. Allied powers', 'The Holocaust', 'D-Day', 'The Pacific War'],
                resources: [{ title: 'WWII From Space', type: 'video' }, { title: 'Key Battles of WWII', type: 'doc' }]
            },
            'The Silk Road': {
                summary: 'A network of trade routes connecting the East and West, central to cultural interaction through regions of the Asian continent.',
                keyConcepts: ['Trade Goods', 'Cultural Exchange', 'Major Cities', 'Decline'],
                resources: [{ title: 'The Silk Road: Crash Course', type: 'video' }, { title: 'Maps of the Silk Road', type: 'doc' }]
            },
            'The Renaissance': {
                summary: 'A period in European history marking the transition from the Middle Ages to modernity and covering the 15th and 16th centuries.',
                keyConcepts: ['Humanism', 'Art and Architecture', 'Scientific Revolution', 'Key Figures'],
                resources: [{ title: 'The Renaissance: Was it a Thing?', type: 'video' }, { title: 'Major Renaissance Artists', type: 'doc' }]
            }
        }
    }
};

function StudyBuddy() {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState('');

  const handleAsk = () => {
    if (!query) return;
    setIsLoading(true);
    setResponse('');
    // Mock AI response
    setTimeout(() => {
      setResponse(`Here's an explanation for "${query}": The concept revolves around combining variables and numbers in a logical, step-by-step manner to solve for an unknown value. It forms the foundation of many advanced mathematical fields.`);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-3">
          <BrainCircuit className="h-8 w-8 text-accent" />
          <div>
            <CardTitle className="font-headline text-xl">AI Study Buddy</CardTitle>
            <CardDescription>
              Ask a question about the current topic.
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col gap-4">
        <Textarea
          placeholder="e.g., Explain the Pythagorean Theorem..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow resize-none"
        />
        <div className="flex justify-end gap-2">
            <Button variant="ghost"><Quote className="mr-2 h-4 w-4" /> Elaborate</Button>
            <Button variant="ghost"><Lightbulb className="mr-2 h-4 w-4" /> Simplify</Button>
            <Button onClick={handleAsk} disabled={isLoading}>
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                Ask
            </Button>
        </div>
        {isLoading && (
          <div className="flex items-center justify-center p-6 text-muted-foreground">
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Thinking...
          </div>
        )}
        {response && (
            <Card className="bg-muted/50">
                <CardContent className="p-4 space-y-2">
                    <p className="text-sm text-foreground/90">{response}</p>
                </CardContent>
            </Card>
        )}
      </CardContent>
    </Card>
  );
}

function SubjectStudyView({ subject }: { subject: string }) {
    const data = useMemo(() => subjectData[subject] || null, [subject]);

    if (!data) {
        return (
            <div className="text-center py-12">
                <h1 className="text-2xl font-bold">Subject not found</h1>
                <p className="text-muted-foreground">No study materials available for "{subject}".</p>
            </div>
        );
    }
  
    const topics = Object.keys(data.topics);

    return (
      <div className="space-y-8">
        <div>
          <h1 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Study: {subject}
          </h1>
          <p className="mt-2 text-muted-foreground">{data.description}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="h-full">
              <Tabs defaultValue={topics[0]} className="h-full flex flex-col">
                <CardHeader>
                  <ScrollArea className="w-full whitespace-nowrap">
                    <TabsList className="inline-flex w-max">
                      {topics.map(topic => (
                        <TabsTrigger key={topic} value={topic}>{topic}</TabsTrigger>
                      ))}
                    </TabsList>
                    <ScrollBar orientation="horizontal" />
                  </ScrollArea>
                </CardHeader>
                <CardContent className="flex-grow">
                    <ScrollArea className="h-[50vh] pr-4">
                        {topics.map(topic => {
                            const topicData = data.topics[topic];
                            return (
                                <TabsContent key={topic} value={topic} className="mt-2">
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="font-headline text-2xl font-bold">{topic}</h3>
                                            <p className="mt-2 text-muted-foreground">{topicData.summary}</p>
                                        </div>
                                        
                                        <Card>
                                            <CardHeader>
                                                <CardTitle className="text-lg flex items-center gap-2"><Lightbulb className="h-5 w-5 text-accent"/>Key Concepts</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <ul className="list-disc list-inside space-y-2">
                                                    {topicData.keyConcepts.map(concept => (
                                                        <li key={concept}>{concept}</li>
                                                    ))}
                                                </ul>
                                            </CardContent>
                                        </Card>

                                        <Card>
                                            <CardHeader>
                                                <CardTitle className="text-lg flex items-center gap-2"><BookOpen className="h-5 w-5 text-accent"/>Resources</CardTitle>
                                            </CardHeader>
                                            <CardContent className="space-y-3">
                                                {topicData.resources.map(resource => (
                                                    <Button key={resource.title} variant="outline" className="w-full justify-start">
                                                        <FileText className="mr-2 h-4 w-4" />
                                                        {resource.title}
                                                    </Button>
                                                ))}
                                            </CardContent>
                                        </Card>
                                    </div>
                                </TabsContent>
                            );
                        })}
                    </ScrollArea>
                </CardContent>
              </Tabs>
            </Card>
          </div>
          <div className="lg:col-span-1">
            <StudyBuddy />
          </div>
        </div>
      </div>
    );
  }

export default function SubjectStudyPage() {
  const params = useParams();
  const [subject, setSubject] = useState<string | null>(null);

  useEffect(() => {
    if (params.subject && typeof params.subject === 'string') {
      setSubject(decodeURIComponent(params.subject));
    }
  }, [params.subject]);

  if (!subject) {
    return (
        <div className="flex h-full w-full items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
    );
  }

  return <SubjectStudyView subject={subject} />;
}
