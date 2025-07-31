
'use server';

import { sendWelcomeEmail } from '@/ai/flows/send-welcome-email';
import { z } from 'zod';
import { auth } from '@/lib/firebase-admin';

const signupSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters.' }),
  role: z.string(),
});

export async function signupAction(values: z.infer<typeof signupSchema>) {
  if (!auth) {
    return {
      error:
        'The server is not configured for authentication. Please contact support.',
    };
  }

  const validatedFields = signupSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  const { name, email, password, role } = validatedFields.data;

  try {
    const userRecord = await auth.createUser({
      email,
      password,
      displayName: name,
    });
    
    await auth.setCustomUserClaims(userRecord.uid, { role });

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
    } catch (aiError) {
        console.error("AI Error: Could not generate welcome message.", aiError);
        // Signup was successful, but AI failed. Return success without email.
        return { success: 'Signup successful! Could not generate welcome email.' };
    }

  } catch (error: any) {
    console.error('Firebase Admin SDK error during signup:', error);
    if (error.code === 'auth/email-already-exists') {
      return { error: 'An account with this email already exists.' };
    }
    return { error: 'An unexpected error occurred during signup. Please try again.' };
  }
}
