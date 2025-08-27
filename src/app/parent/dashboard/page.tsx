
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Check, CheckCircle, Clock, Percent, Sparkles, Star } from "lucide-react";
import Link from "next/link";


const childData = {
    name: 'Alex Johnson',
    avatar: 'https://placehold.co/100x100.png',
    aiHint: 'male student',
    grade: 'Grade 11',
    overallScore: 88,
    attendance: '98%',
    courses: [
        { name: 'Calculus I', progress: 85, score: 92 },
        { name: 'Modern World History', progress: 95, score: 88 },
        { name: 'Quantum Physics', progress: 72, score: 78 },
    ],
    subscription: {
        plan: 'Basic',
        status: 'Active',
        nextBillingDate: '2024-08-15',
        amount: 29.99
    }
}

const pricingPlans = [
    {
        name: 'Basic',
        price: '$29.99',
        description: 'Access to all standard features.',
        features: ['All Courses', 'Progress Tracking', 'Email Support'],
        isCurrent: true,
    },
    {
        name: 'Pro',
        price: '$49.99',
        description: 'Unlock premium features for enhanced learning.',
        features: ['All Basic Features', 'AI Tutor Assistant', 'Live Class Recordings', 'Priority Support'],
        isCurrent: false,
        isPopular: true,
    },
     {
        name: 'Premium',
        price: '$79.99',
        description: 'The complete learning experience.',
        features: ['All Pro Features', 'Personalized Learning Plans', '1-on-1 Tutoring Sessions', 'Advanced Analytics'],
        isCurrent: false,
    }
]

export default function ParentDashboardPage() {
  return (
    <div className="space-y-8">
        <div className="flex items-center justify-between">
            <div>
                <h1 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
                Parent Dashboard
                </h1>
                <p className="mt-2 text-muted-foreground">
                Your central hub for monitoring your child's learning journey.
                </p>
            </div>
        </div>

        <Card>
            <CardHeader className="flex flex-col items-center gap-6 sm:flex-row">
                <Avatar className="h-24 w-24 border-4 border-primary/20">
                    <AvatarImage src={childData.avatar} data-ai-hint={childData.aiHint} />
                    <AvatarFallback className="text-3xl">{childData.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-grow text-center sm:text-left">
                    <h2 className="text-2xl font-bold font-headline">{childData.name}</h2>
                    <p className="text-muted-foreground">{childData.grade}</p>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                        <p className="text-2xl font-bold text-primary">{childData.overallScore}%</p>
                        <p className="text-sm text-muted-foreground">Overall Score</p>
                    </div>
                     <div>
                        <p className="text-2xl font-bold text-primary">{childData.attendance}</p>
                        <p className="text-sm text-muted-foreground">Attendance</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-primary">{childData.courses.length}</p>
                        <p className="text-sm text-muted-foreground">Courses</p>
                    </div>
                </div>
            </CardHeader>
        </Card>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
             <Card>
                <CardHeader>
                    <CardTitle>Course Progress</CardTitle>
                    <CardDescription>An overview of {childData.name}'s progress in their courses.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        {childData.courses.map(course => (
                            <li key={course.name}>
                                <div className="flex justify-between font-semibold">
                                    <span>{course.name}</span>
                                    <span>{course.score}% Score</span>
                                </div>
                                <div className="flex items-center gap-2 mt-1">
                                    <div className="h-2 w-full bg-muted rounded-full">
                                        <div className="h-2 bg-primary rounded-full" style={{width: `${course.progress}%`}}></div>
                                    </div>
                                    <span className="text-sm font-bold w-12 text-right">{course.progress}%</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Recent Achievements</CardTitle>
                     <CardDescription>Celebrate {childData.name}'s recent milestones!</CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                            <Award className="h-5 w-5 text-yellow-500" />
                            <p><span className="font-semibold">95%</span> on Calculus Quiz 4</p>
                            <span className="text-xs text-muted-foreground ml-auto">3 days ago</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Star className="h-5 w-5 text-accent" />
                            <p>Perfect attendance for two straight weeks</p>
                             <span className="text-xs text-muted-foreground ml-auto">1 day ago</span>
                        </li>
                         <li className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <p>Completed <span className="font-semibold">"Modern World History"</span></p>
                             <span className="text-xs text-muted-foreground ml-auto">1 week ago</span>
                        </li>
                    </ul>
                </CardContent>
            </Card>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>Subscription Management</CardTitle>
                <CardDescription>Manage your plan and billing details.</CardDescription>
            </CardHeader>
            <CardContent>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-xl bg-muted/50 p-6">
                    <div>
                        <h3 className="font-semibold">Current Plan</h3>
                        <p className="text-sm text-muted-foreground">Your active subscription for {childData.name}.</p>
                    </div>
                    <div className="bg-background p-4 rounded-lg shadow-sm">
                        <div className="flex justify-between items-start">
                             <div>
                                <h4 className="font-bold text-lg text-primary">{childData.subscription.plan} Plan</h4>
                                <Badge>{childData.subscription.status}</Badge>
                            </div>
                            <p className="text-2xl font-bold">${childData.subscription.amount}<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
                        </div>
                        <p className="text-xs text-muted-foreground mt-4">Next billing on {childData.subscription.nextBillingDate}</p>
                    </div>
                 </div>

                 <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pricingPlans.map(plan => (
                        <Card key={plan.name} className={plan.isCurrent ? 'border-primary' : ''}>
                             {plan.isPopular && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Popular</Badge>}
                            <CardHeader>
                                <CardTitle>{plan.name}</CardTitle>
                                <p className="text-3xl font-bold">{plan.price}<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
                                <CardDescription>{plan.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <ul className="space-y-3">
                                    {plan.features.map(feature => (
                                        <li key={feature} className="flex items-start gap-2">
                                            <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                             <CardFooter>
                                <Button className="w-full" disabled={plan.isCurrent}>
                                    {plan.isCurrent ? 'Current Plan' : 'Upgrade'}
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                 </div>
            </CardContent>
        </Card>

    </div>
  )
}
