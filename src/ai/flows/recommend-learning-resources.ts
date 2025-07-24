'use server';

/**
 * @fileOverview AI-powered learning resource recommendation flow.
 *
 * - recommendLearningResources - A function that recommends learning resources based on grade level and subject.
 * - RecommendLearningResourcesInput - The input type for the recommendLearningResources function.
 * - RecommendLearningResourcesOutput - The return type for the recommendLearningResources function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendLearningResourcesInputSchema = z.object({
  gradeLevel: z.string().describe('The grade level of the student.'),
  subject: z.string().describe('The subject for which to recommend resources.'),
});
export type RecommendLearningResourcesInput = z.infer<typeof RecommendLearningResourcesInputSchema>;

const RecommendLearningResourcesOutputSchema = z.object({
  resources: z
    .array(z.string())
    .describe('A list of recommended learning resources for the given grade level and subject.'),
});
export type RecommendLearningResourcesOutput = z.infer<typeof RecommendLearningResourcesOutputSchema>;

export async function recommendLearningResources(
  input: RecommendLearningResourcesInput
): Promise<RecommendLearningResourcesOutput> {
  return recommendLearningResourcesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendLearningResourcesPrompt',
  input: {schema: RecommendLearningResourcesInputSchema},
  output: {schema: RecommendLearningResourcesOutputSchema},
  prompt: `You are an AI learning assistant. Recommend a list of learning resources for a student in grade level {{{gradeLevel}}} for the subject {{{subject}}}. Return the resources as a list of strings.

Desired format:
{
  "resources": ["Resource 1", "Resource 2", "Resource 3"]
}
`, config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const recommendLearningResourcesFlow = ai.defineFlow(
  {
    name: 'recommendLearningResourcesFlow',
    inputSchema: RecommendLearningResourcesInputSchema,
    outputSchema: RecommendLearningResourcesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
