import { VirtualClassroom } from '@/components/live-classes/VirtualClassroom';

export default function VirtualClassroomPage({
  params,
}: {
  params: { classId: string };
}) {
  return <VirtualClassroom classId={params.classId} />;
}
