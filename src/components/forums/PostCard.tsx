import { ArrowBigUp, MessageSquare } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";

type Post = {
    id: string;
    author: string;
    timestamp: string;
    title: string;
    content: string;
    upvotes: number;
    comments: any[];
}

export function PostCard({ post }: { post: Post }) {
    return (
        <Card className="overflow-hidden">
            <div className="flex">
                <div className="flex flex-col items-center gap-1 bg-muted p-2">
                    <Button variant="ghost" size="sm" className="p-1 h-auto">
                        <ArrowBigUp className="h-5 w-5"/>
                    </Button>
                    <span className="text-sm font-bold">{post.upvotes}</span>
                </div>
                <div className="flex-1">
                    <CardHeader className="pb-2">
                        <CardDescription className="text-xs">
                            Posted by u/{post.author} • {post.timestamp}
                        </CardDescription>
                        <CardTitle className="text-xl font-bold">
                            {post.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-foreground/90">
                           {post.content}
                        </p>
                    </CardContent>
                    <CardFooter>
                         <Button variant="ghost" size="sm">
                           <MessageSquare className="mr-2 h-4 w-4" />
                            {post.comments.length} Comments
                        </Button>
                    </CardFooter>
                </div>
            </div>
        </Card>
    )
}
