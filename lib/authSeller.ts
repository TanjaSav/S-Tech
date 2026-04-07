// import { clerkClient } from '@clerk/nextjs/server';
// import { NextResponse } from 'next/server';

// const authSeller = async (userId: string) => {
//     try {

//         const client = await clerkClient()
//         const user = await client.users.getUser(userId)

//         if (user.publicMetadata.role === 'seller') {
//             return true;
//         } else {
//             return false;
//         }
//     } catch (error) {
//         return NextResponse.json({ success: false, message: error.message });
//     }
// }

// export default authSeller;

const SELLER_USER_IDS = [
  'user_2sZFHS1UIIysJyDVzCpQhUhTIhw',
];

const authSeller = async (userId: string): Promise<boolean> => {
  if (!userId) {
    return false;
  }

  return SELLER_USER_IDS.includes(userId);
};

export default authSeller;