import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { Book, Rss, Scale, Shield, Users } from 'lucide-react';

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
            <p className="text-lg font-bold text-green-500 flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-green-500 block animate-pulse"></span>
                142
            </p>
            <p className="text-xs text-muted-foreground">Online</p>
          </div>
        </div>
        <Separator />
        <div className="space-y-2">
            <Button variant="outline" className="w-full justify-start">
                <Book className="mr-2 h-4 w-4" /> Community Wiki
            </Button>
             <Button variant="outline" className="w-full justify-start">
                <Scale className="mr-2 h-4 w-4" /> Community Rules
            </Button>
             <Button variant="outline" className="w-full justify-start">
                <Shield className="mr-2 h-4 w-4" /> Code of Conduct
            </Button>
        </div>
         <Separator />
         <Button className="w-full">Create Post</Button>
      </CardContent>
    </Card>
  );
}
