
'use server';

import { z } from 'zod';
import crypto from 'crypto';

const schoolFormSchema = z.object({
    schoolName: z.string().min(3),
    adminName: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(8),
    tutorCount: z.coerce.number().min(1),
    adminCount: z.coerce.number().min(1).max(3),
});

export async function createSchoolAction(values: z.infer<typeof schoolFormSchema>) {
    const validatedFields = schoolFormSchema.safeParse(values);

    if (!validatedFields.success) {
        return { success: false, error: 'Invalid fields provided.' };
    }

    // In a real application, you would:
    // 1. Check if the email is already in use.
    // 2. Hash the password.
    // 3. Create the school and the admin user in a database transaction.
    console.log('Creating school:', validatedFields.data);
    
    // Simulate creating a unique invitation token
    const inviteToken = crypto.randomBytes(16).toString('hex');
    const inviteLink = `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/invite/${inviteToken}`;


    return { 
        success: true,
        inviteLink
    };
}
