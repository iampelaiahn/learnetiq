'use client';
import * as React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Bot, Lightbulb, Loader2 } from 'lucide-react';
import { getRecommendationsAction } from '@/actions/recommendations';
import { useToast } from '@/hooks/use-toast';

const primarySchoolLevels = Array.from({ length: 7 }, (_, i) => `Grade ${i + 1}`);
const secondarySchoolLevels = Array.from({ length: 6 }, (_, i) => `Form ${i + 1}`);

const subjects = ['Mathematics', 'Physics', 'History', 'Literature', 'Science'];

export function AiTutorAssistant() {
  const [grade, setGrade] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [recommendations, setRecommendations] = React.useState<string[]>([]);
  const { toast } = useToast();

  const handleGetRecommendations = async () => {
    if (!grade || !subject) {
      toast({
        title: 'Selection Incomplete',
        description: 'Please select both a grade level and a subject.',
        variant: 'destructive',
      });
      return;
    }
    setIsLoading(true);
    setRecommendations([]);
    const result = await getRecommendationsAction({
      gradeLevel: grade,
      subject,
    });
    if (result.success) {
      setRecommendations(result.recommendations);
    } else {
      toast({
        title: 'Error',
        description: result.error,
        variant: 'destructive',
      });
    }
    setIsLoading(false);
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Bot className="h-8 w-8 text-accent" />
          <div>
            <CardTitle className="font-headline text-xl">
              AI Tutor Assistant
            </CardTitle>
            <CardDescription>
              Get personalized learning resource recommendations.
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Select value={grade} onValueChange={setGrade}>
            <SelectTrigger>
              <SelectValue placeholder="Select Grade Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Primary School</SelectLabel>
                {primarySchoolLevels.map((level) => (
                  <SelectItem key={level} value={level}>
                    {level}
                  </SelectItem>
                ))}
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Secondary School</SelectLabel>
                {secondarySchoolLevels.map((level) => (
                  <SelectItem key={level} value={level}>
                    {level}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select value={subject} onValueChange={setSubject}>
            <SelectTrigger>
              <SelectValue placeholder="Select Subject" />
            </SelectTrigger>
            <SelectContent>
              {subjects.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {isLoading && (
          <div className="flex items-center justify-center p-6 text-muted-foreground">
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Generating recommendations...
          </div>
        )}
        {recommendations.length > 0 && (
          <div className="space-y-3 rounded-md border p-4">
            <h4 className="font-semibold">Here are some recommendations:</h4>
            <ul className="list-inside list-disc space-y-1 text-sm text-foreground/90">
              {recommendations.map((rec, index) => (
                <li key={index} className="flex items-start">
                  <Lightbulb className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-accent" />
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={handleGetRecommendations} disabled={isLoading} className="w-full">
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Lightbulb className="mr-2 h-4 w-4" />
          )}
          Get Recommendations
        </Button>
      </CardFooter>
    </Card>
  );
}
