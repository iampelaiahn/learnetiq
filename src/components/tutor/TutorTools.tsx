
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "../ui/button"
import { PlusCircle, CalendarPlus, FolderPlus, MessageSquarePlus } from "lucide-react"
import Link from "next/link"

const tools = [
    {
        icon: PlusCircle,
        title: "Create Course",
        description: "Build a new course from scratch.",
        href: "/tutor/courses/new"
    },
    {
        icon: CalendarPlus,
        title: "Schedule Class",
        description: "Set up a new live session for your students.",
        href: "/tutor/classes/new"
    },
    {
        icon: FolderPlus,
        title: "Add Resource",
        description: "Upload new materials to the library.",
        href: "/app/resources"
    },
    {
        icon: MessageSquarePlus,
        title: "Create Assignment",
        description: "Design a new assignment or quiz.",
        href: "/tutor/assignments/new"
    }
]

export function TutorTools() {
    return (
        <div>
            <h2 className="text-2xl font-bold font-headline tracking-tight mb-4">Tutor Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {tools.map((tool) => (
                    <Card key={tool.title} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-4 flex flex-col items-start h-full">
                            <tool.icon className="h-8 w-8 text-accent mb-3" />
                            <h3 className="font-semibold">{tool.title}</h3>
                            <p className="text-sm text-muted-foreground flex-grow mb-3">{tool.description}</p>
                            <Button asChild variant="outline" className="w-full mt-auto">
                                <Link href={tool.href}>Go</Link>
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
