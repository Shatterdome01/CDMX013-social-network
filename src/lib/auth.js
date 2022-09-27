import {
  getAuth,
  createUserWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { app } from './config.js';

const auth = getAuth();

export const addUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
