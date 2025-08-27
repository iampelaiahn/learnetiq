
'use client';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

const steps = ['Delivered', 'Read', 'Comments', 'Validated'];
type Step = 'Delivered' | 'Read' | 'Comments' | 'Validated';

type ValidationProgressProps = {
  currentStep: Step;
};

export function ValidationProgress({ currentStep }: ValidationProgressProps) {
  const currentStepIndex = steps.indexOf(currentStep);

  return (
    <div className="flex items-center w-full max-w-sm">
      {steps.map((step, index) => {
        const isCompleted = index < currentStepIndex;
        const isActive = index === currentStepIndex;

        return (
          <React.Fragment key={step}>
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  'flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all',
                  isCompleted ? 'border-primary bg-primary text-primary-foreground' : 'border-border',
                  isActive ? 'border-primary' : 'border-border'
                )}
              >
                {isCompleted ? <Check className="h-5 w-5" /> : <span className={cn("h-2 w-2 rounded-full", isActive && "bg-primary")}></span>}
              </div>
              <p className={cn("text-xs mt-1", isActive || isCompleted ? "font-semibold" : "text-muted-foreground")}>{step}</p>
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  'h-1 flex-1 transition-all',
                  isCompleted ? 'bg-primary' : 'bg-border'
                )}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
