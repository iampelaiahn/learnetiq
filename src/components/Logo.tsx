import Link from 'next/link';
import { BrainCircuit } from 'lucide-react';

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`font-headline text-2xl font-bold text-primary flex items-center gap-2 ${className}`}
    >
      <BrainCircuit className="h-7 w-7" />
      LearnetIQ
    </Link>
  );
}
