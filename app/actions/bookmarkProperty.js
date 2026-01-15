'use server';
  
import connectDB from '@/config/database';
import User from '@/models/User';
import { getSessionUser } from '@/utils/getSessionUser';
import { revalidatePath } from 'next/cache';

async function bookmarkProperty(propertyId) {
  await connectDB();
  const sessionUser = await getSessionUser();
  if (!sessionUser || !sessionUser.userId) {
    throw new Error('user id is required');
  }

  const { userId } = sessionUser;
  const user = await User.findById(userId);

  let isBookMarked = user.bookmarks.some(id => id.toString() === propertyId);

  let message;

  if (isBookMarked) {
    // if all ready bookmarked then remove
    user.bookmarks.pull(propertyId);
    message = 'Bookmark Removed ...!';
    isBookMarked = false;
  } else {
    user.bookmarks.push(propertyId);
    message = 'Bookmark Added ...!';
    isBookMarked = true;
  }
  await user.save();
  revalidatePath('/properties/saved', 'page');

  return {
    message,
    isBookMarked,
  };
}

export default bookmarkProperty;
