
import { redirect } from 'next/navigation';

export default function StudentsPage() {
  // Redirect to the dashboard if no specific student is selected,
  // as this page is for listing all students which is already on the dashboard.
  redirect('/tutor/dashboard');
}
