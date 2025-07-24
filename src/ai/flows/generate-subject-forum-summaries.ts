'use server';
/**
 * @fileOverview A flow to generate summaries of recent activity in each forum subject.
 *
 * - generateSubjectForumSummaries - A function that handles the generation of forum summaries.
 * - GenerateSubjectForumSummariesInput - The input type for the generateSubjectForumSummaries function.
 * - GenerateSubjectForumSummariesOutput - The return type for the generateSubjectForumSummaries function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSubjectForumSummariesInputSchema = z.object({
  subject: z.string().describe('The subject of the forum.'),
  posts: z.array(z.string()).describe('The recent posts in the forum.'),
});
export type GenerateSubjectForumSummariesInput = z.infer<typeof GenerateSubjectForumSummariesInputSchema>;

const GenerateSubjectForumSummariesOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the recent activity in the forum.'),
});
export type GenerateSubjectForumSummariesOutput = z.infer<typeof GenerateSubjectForumSummariesOutputSchema>;

export async function generateSubjectForumSummaries(input: GenerateSubjectForumSummariesInput): Promise<GenerateSubjectForumSummariesOutput> {
  return generateSubjectForumSummariesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateSubjectForumSummariesPrompt',
  input: {schema: GenerateSubjectForumSummariesInputSchema},
  output: {schema: GenerateSubjectForumSummariesOutputSchema},
  prompt: `You are an AI assistant tasked with summarizing recent forum activity for a given subject.

  Subject: {{{subject}}}
  Recent Posts:
  {{#each posts}}
  - {{{this}}}
  {{/each}}

  Please provide a concise summary of the recent activity in the forum. The summary should be no more than two sentences long.
  `,
});

const generateSubjectForumSummariesFlow = ai.defineFlow(
  {
    name: 'generateSubjectForumSummariesFlow',
    inputSchema: GenerateSubjectForumSummariesInputSchema,
    outputSchema: GenerateSubjectForumSummariesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
