'use client';
import Link from 'next/link';
import { BrainCircuit } from 'lucide-react';
import { useSidebar } from './ui/sidebar';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  let sidebar;
  try {
    sidebar = useSidebar();
  } catch (e) {
    sidebar = null;
  }
  
  const state = sidebar?.state;

  return (
    <Link
      href="/"
      className={cn(
        'font-headline text-2xl font-bold text-primary flex items-center gap-2',
        className
      )}
    >
      <BrainCircuit className="h-7 w-7" />
      <span className={cn({ 'group-data-[collapsible=icon]:hidden': !!state })}>
        {state === 'expanded' ? 'LearnetIQ' : state === 'collapsed' ? '' : 'LearnetIQ'}
      </span>
    </Link>
  );
}
