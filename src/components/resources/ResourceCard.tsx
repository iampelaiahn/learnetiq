
import Image from 'next/image';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Download, FileText, Film, Headphones, Book, File, Presentation, Laptop } from 'lucide-react';

type ResourceCardProps = {
  title: string;
  type: string;
  size: string;
  image: string;
  aiHint: string;
};

const typeIcons: Record<string, React.ElementType> = {
    'PDF': FileText,
    'Video': Film,
    'eBook': Book,
    'DOCX': FileText,
    'Audio': Headphones,
    'XLSX': File,
    'WebApp': Laptop,
}

export function ResourceCard({ title, type, size, image, aiHint }: ResourceCardProps) {
  const Icon = typeIcons[type] || FileText;

  return (
    <Card className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
      <div className="relative h-40 w-full">
        <Image src={image} alt={title} fill className="object-cover" data-ai-hint={aiHint}/>
        <Badge className="absolute top-2 right-2" variant="secondary">{type}</Badge>
      </div>
      <CardHeader className="flex-grow pb-2">
        <CardTitle className="text-base line-clamp-2">{title}</CardTitle>
      </CardHeader>
      <CardContent>
         <div className="flex items-center text-xs text-muted-foreground gap-2">
            <Icon className="h-4 w-4"/>
            <span>{size}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
            <Download className="mr-2 h-4 w-4"/>
            Download
        </Button>
      </CardFooter>
    </Card>
  );
}
