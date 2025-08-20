import { redirect } from 'next/navigation';

export default function SubjectStudyPage({
  params,
}: {
  params: { subject: string };
}) {
  redirect(`/app/courses/${params.subject}`);
}
