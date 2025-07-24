'use server';

import { sendWelcomeEmail } from '@/ai/flows/send-welcome-email';
import { z } from 'zod';

const signupSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters.' }),
});

export async function signupAction(values: z.infer<typeof signupSchema>) {
  const validatedFields = signupSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }
  
  const { name } = validatedFields.data;

  try {
    const welcomeEmail = await sendWelcomeEmail({
      userName: name,
      platformName: 'LearnetIQ',
      keyFeatures: [
        'Personalized Dashboards',
        'AI Tutor Assistant',
        'Interactive Live Classes',
        'Community Forums',
      ],
    });

    return { success: 'Signup successful!', email: welcomeEmail.emailBody };
  } catch (error) {
    console.error(error);
    return { error: 'An AI-related error occurred. Could not generate welcome email.' };
  }
}
