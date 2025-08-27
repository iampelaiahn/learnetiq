
'use client';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const currentSubscription = {
    plan: 'Pro',
    status: 'Active',
    nextBillingDate: '2024-08-15',
    amount: 299.99
};

const pricingPlans = [
    {
        name: 'Basic',
        price: '$99.99',
        description: 'Essential features for small schools.',
        features: ['Up to 10 Tutors', 'Up to 500 Students', 'Core Platform Access', 'Email Support'],
        isCurrent: false,
    },
    {
        name: 'Pro',
        price: '$299.99',
        description: 'Advanced tools for growing institutions.',
        features: ['Up to 50 Tutors', 'Up to 2000 Students', 'AI Tutor Assistant', 'Advanced Analytics', 'Priority Support'],
        isCurrent: true,
        isPopular: true,
    },
     {
        name: 'Enterprise',
        price: 'Contact Us',
        description: 'Custom solutions for large districts.',
        features: ['Unlimited Tutors & Students', 'Dedicated Account Manager', 'Custom Integrations', 'Single Sign-On (SSO)'],
        isCurrent: false,
    }
];

export default function BillingPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
                    Billing & Subscription
                </h1>
                <p className="mt-2 text-muted-foreground">
                    Manage your school's subscription plan and payment details.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Current Plan</CardTitle>
                    <CardDescription>This is the current active subscription for Northwood High School.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="rounded-xl bg-muted/50 p-6">
                         <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                             <div>
                                <h3 className="font-bold text-xl text-primary">{currentSubscription.plan} Plan</h3>
                                <Badge>{currentSubscription.status}</Badge>
                            </div>
                            <div className="mt-4 sm:mt-0 sm:text-right">
                                <p className="text-3xl font-bold">${currentSubscription.amount}<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
                                <p className="text-xs text-muted-foreground">Next billing on {currentSubscription.nextBillingDate}</p>
                            </div>
                        </div>
                        <div className="mt-6 flex flex-col sm:flex-row gap-2">
                             <Button>Update Payment Method</Button>
                             <Button variant="outline">Cancel Subscription</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="space-y-4">
                 <h2 className="font-headline text-2xl font-bold text-primary">Available Plans</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pricingPlans.map(plan => (
                        <Card key={plan.name} className={`flex flex-col ${plan.isCurrent ? 'border-primary' : ''} ${plan.isPopular ? 'relative' : ''}`}>
                             {plan.isPopular && !plan.isCurrent && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Popular</Badge>}
                            <CardHeader>
                                <CardTitle>{plan.name}</CardTitle>
                                 <p className="text-3xl font-bold">{plan.price}<span className="text-sm font-normal text-muted-foreground">{plan.price !== 'Contact Us' && '/mo'}</span></p>
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
                                    {plan.isCurrent ? 'Current Plan' : plan.name === 'Enterprise' ? 'Contact Sales' : 'Upgrade'}
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                 </div>
            </div>
        </div>
    )
}
