
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { usePathname } from "next/navigation";

export function SchoolHeader() {
    const pathname = usePathname();

    // In a real application, you would fetch school data based on the user's affiliation.
    // For this demo, we'll conditionally show this header for roles that belong to a school.
    const isSchoolAffiliated = pathname.startsWith('/tutor') || pathname.startsWith('/parent') || pathname.startsWith('/school-admin');
    
    // We also assume the student 'Alex' belongs to Northwood High.
    // A more robust solution would check the user's session data.
    const isStudentAtSchool = !isSchoolAffiliated && !pathname.startsWith('/admin');

    if (!isSchoolAffiliated && !isStudentAtSchool) {
        return null;
    }

    return (
        <Card>
            <CardContent className="p-4 flex flex-col sm:flex-row items-center gap-4">
                <Avatar className="h-16 w-16">
                    <AvatarImage src="https://placehold.co/100x100.png" data-ai-hint="school logo" />
                    <AvatarFallback>SH</AvatarFallback>
                </Avatar>
                <div className="text-center sm:text-left">
                    <h2 className="text-xl font-bold font-headline">Northwood High School</h2>
                    <p className="text-sm text-muted-foreground italic mt-1">"Our mission is to foster a community of lifelong learners and critical thinkers."</p>
                </div>
            </CardContent>
        </Card>
    );
}
