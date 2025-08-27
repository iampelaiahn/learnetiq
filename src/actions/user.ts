
'use server';

import { z } from 'zod';

const userFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  role: z.enum(['tutor', 'student']),
});

// In a real application, these actions would interact with a database.
// For this demo, we'll simulate the operations and return mock data.

export async function createUser(data: z.infer<typeof userFormSchema>) {
  const validation = userFormSchema.safeParse(data);
  if (!validation.success) {
    return { success: false, error: 'Invalid data provided.' };
  }

  console.log('Creating user:', validation.data);
  
  // Simulate database insertion
  const newUser = {
    id: `${validation.data.role.charAt(0)}${Math.floor(Math.random() * 1000)}`,
    ...validation.data,
  };

  return { success: true, user: newUser };
}


export async function updateUser(userId: string, data: z.infer<typeof userFormSchema>) {
    const validation = userFormSchema.safeParse(data);
    if (!validation.success) {
      return { success: false, error: 'Invalid data provided.' };
    }
  
    console.log(`Updating user ${userId}:`, validation.data);
    
    // Simulate database update
    return { success: true };
}


export async function deleteUser(userId: string) {
    if(!userId) {
        return { success: false, error: 'User ID not provided.' };
    }

    console.log(`Deleting user ${userId}`);

    // Simulate database deletion
    return { success: true };
}

