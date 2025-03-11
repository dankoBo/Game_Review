import { getAuth } from 'firebase/auth';
import { app } from '@/firebase/firebase';

export const auth = getAuth(app);
