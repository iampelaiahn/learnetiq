
import { StudentRoster } from "@/components/tutor/StudentRoster";
import { TutorTools } from "@/components/tutor/TutorTools";
import { ClassPerformanceChart } from "@/components/tutor/ClassPerformanceChart";

export default function TutorDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
          Tutor Dashboard
        </h1>
        <p className="mt-2 text-muted-foreground">
          Welcome back, Dr. Reed. Here's your overview for today.
        </p>
      </div>

      <TutorTools />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <StudentRoster />
        </div>
        <div className="lg:col-span-2">
            <ClassPerformanceChart />
        </div>
      </div>
    </div>
  );
}
