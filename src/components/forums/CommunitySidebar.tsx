import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { Book, Scale, Shield } from 'lucide-react';

type CommunitySidebarProps = {
  subject: string;
};

export function CommunitySidebar({ subject }: CommunitySidebarProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About Community</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          A community for all things {subject}. Share your knowledge, ask
          questions, and connect with fellow learners.
        </p>
        <div className="flex justify-around text-center">
          <div>
            <p className="text-lg font-bold">22k</p>
            <p className="text-xs text-muted-foreground">Members</p>
          </div>
          <div>
            <p className="text-lg font-bold text-green-500 flex items-center justify-center gap-1">
                <span className="h-2 w-2 rounded-full bg-green-500 block animate-pulse"></span>
                142
            </p>
            <p className="text-xs text-muted-foreground">Online</p>
          </div>
        </div>
        <Separator />
        <div className="space-y-2">
            <Button variant="outline" className="w-full justify-start text-left h-auto">
                <Book className="mr-2 h-4 w-4 flex-shrink-0" /> 
                <span className="flex-grow whitespace-normal">Community Wiki</span>
            </Button>
             <Button variant="outline" className="w-full justify-start text-left h-auto">
                <Scale className="mr-2 h-4 w-4 flex-shrink-0" /> 
                <span className="flex-grow whitespace-normal">Community Rules</span>
            </Button>
             <Button variant="outline" className="w-full justify-start text-left h-auto">
                <Shield className="mr-2 h-4 w-4 flex-shrink-0" /> 
                <span className="flex-grow whitespace-normal">Code of Conduct</span>
            </Button>
        </div>
         <Separator />
         <Button className="w-full">Create Post</Button>
      </CardContent>
    </Card>
  );
}
