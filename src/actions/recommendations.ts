'use server';

import { recommendLearningResources } from '@/ai/flows/recommend-learning-resources';
import { z } from 'zod';

const recommendationSchema = z.object({
  gradeLevel: z.string(),
  subject: z.string(),
});

export async function getRecommendationsAction(
  values: z.infer<typeof recommendationSchema>
) {
  const validatedFields = recommendationSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!', recommendations: [] };
  }

  try {
    const result = await recommendLearningResources(validatedFields.data);
    return { success: true, recommendations: result.resources };
  } catch (error) {
    console.error(error);
    return { error: 'Failed to get recommendations from AI.', recommendations: [] };
  }
}
