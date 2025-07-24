'use server';

/**
 * @fileOverview An AI agent to generate personalized welcome emails for new users.
 *
 * - sendWelcomeEmail - A function to generate and return a personalized welcome email.
 * - SendWelcomeEmailInput - The input type for the sendWelcomeEmail function.
 * - SendWelcomeEmailOutput - The return type for the sendWelcomeEmail function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SendWelcomeEmailInputSchema = z.object({
  userName: z.string().describe('The name of the new user.'),
  platformName: z.string().describe('The name of the learning platform (LearnetIQ).'),
  keyFeatures: z.array(z.string()).describe('A list of key features of the platform.'),
});
export type SendWelcomeEmailInput = z.infer<typeof SendWelcomeEmailInputSchema>;

const SendWelcomeEmailOutputSchema = z.object({
  emailBody: z.string().describe('The personalized welcome email body.'),
});
export type SendWelcomeEmailOutput = z.infer<typeof SendWelcomeEmailOutputSchema>;

export async function sendWelcomeEmail(input: SendWelcomeEmailInput): Promise<SendWelcomeEmailOutput> {
  return sendWelcomeEmailFlow(input);
}

const welcomeEmailPrompt = ai.definePrompt({
  name: 'welcomeEmailPrompt',
  input: {schema: SendWelcomeEmailInputSchema},
  output: {schema: SendWelcomeEmailOutputSchema},
  prompt: `Compose a personalized welcome email for {{userName}} joining {{platformName}}.

  Highlight these key features: {{#each keyFeatures}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}.

  The email should be engaging and encourage the user to explore the platform. Focus on how these features can benefit them in their learning journey.`,
});

const sendWelcomeEmailFlow = ai.defineFlow(
  {
    name: 'sendWelcomeEmailFlow',
    inputSchema: SendWelcomeEmailInputSchema,
    outputSchema: SendWelcomeEmailOutputSchema,
  },
  async input => {
    const {output} = await welcomeEmailPrompt(input);
    return output!;
  }
);
