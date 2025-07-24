import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Card, CardContent } from '../ui/card';

const testimonials = [
  {
    name: 'Sarah L.',
    role: 'Student, Grade 11',
    quote:
      'LearnetIQ has transformed the way I study. The live classes are engaging, and the AI tutor helps me find resources I would have never found on my own!',
    avatar: 'https://placehold.co/100x100.png',
    aiHint: 'student portrait',
  },
  {
    name: 'David R.',
    role: 'Parent',
    quote:
      'As a parent, I love being able to track my son\'s progress. The platform is transparent and gives me peace of mind about his education.',
    avatar: 'https://placehold.co/100x100.png',
    aiHint: 'father portrait',
  },
  {
    name: 'Mr. Peterson',
    role: 'Tutor',
    quote:
      'The course management tools are top-notch. LearnetIQ makes it easy to create high-quality content and interact with my students effectively.',
    avatar: 'https://placehold.co/100x100.png',
    aiHint: 'teacher portrait',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-primary/5 py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
            What Our Community Says
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real stories from students, parents, and tutors who love LearnetIQ.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col">
              <CardContent className="flex flex-1 flex-col justify-between p-6">
                <blockquote className="text-lg text-foreground/90">
                  "{testimonial.quote}"
                </blockquote>
                <div className="mt-6 flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} data-ai-hint={testimonial.aiHint}/>
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
