'use client';
import * as React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from '../ui/card';
import { FileCheck, Bot, Video, BarChart } from 'lucide-react';

const features = [
  {
    icon: FileCheck,
    title: 'Course Management',
    description:
      'Easily create, organize, and manage your courses with our intuitive tools. Keep your curriculum structured and accessible.',
    image: 'https://placehold.co/1200x800.png',
    aiHint: 'course management',
  },
  {
    icon: BarChart,
    title: 'Assessment System',
    description:
      'Design quizzes, tests, and assignments to track student progress. Get detailed analytics to understand performance.',
    image: 'https://placehold.co/1200x800.png',
    aiHint: 'student assessment',
  },
  {
    icon: Video,
    title: 'Live Classroom',
    description:
      'Engage with students in real-time through our feature-rich virtual classrooms. Interactive whiteboards, chat, and more.',
    image: 'https://placehold.co/1200x800.png',
    aiHint: 'online classroom',
  },
  {
    icon: Bot,
    title: 'AI Enhancements',
    description:
      'Leverage the power of AI for personalized learning paths, resource recommendations, and automated feedback.',
    image: 'https://placehold.co/1200x800.png',
    aiHint: 'artificial intelligence',
  },
];

export function FeaturesCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section id="features" className="w-full bg-primary text-primary-foreground py-20 md:py-32">
      <div className="container">
        <h2 className="font-headline text-center text-3xl font-bold md:text-4xl mb-12">
          We got Everything you need to succeed
        </h2>
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{ loop: true }}
        >
          <CarouselContent>
            {features.map((feature, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="bg-background text-foreground overflow-hidden">
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-0 p-0">
                      <div className="relative min-h-[300px] md:min-h-[500px]">
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          fill
                          className="object-cover"
                          data-ai-hint={feature.aiHint}
                        />
                      </div>
                      <div className="flex flex-col justify-center p-8 md:p-12">
                        <feature.icon className="h-12 w-12 text-accent mb-4" />
                        <h3 className="font-headline text-2xl md:text-3xl font-bold mb-4">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground text-lg">
                          {feature.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 text-primary bg-background/80 hover:bg-background" />
          <CarouselNext className="right-4 text-primary bg-background/80 hover:bg-background" />
        </Carousel>
      </div>
    </section>
  );
}
