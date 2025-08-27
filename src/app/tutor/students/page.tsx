
import { StudentRoster } from "@/components/tutor/StudentRoster";

export default function StudentsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
          My Students
        </h1>
        <p className="mt-2 text-muted-foreground">
          A complete list of all the students you are currently teaching.
        </p>
      </div>
      <StudentRoster />
    </div>
  );
}
