import { initializeApp } from "firebase/app";
const API_KEY = import.meta.env.VITE_API_KEY

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "games-6054c.firebaseapp.com",
  projectId: "games-6054c",
  storageBucket: "games-6054c.appspot.com",
  messagingSenderId: "1074842705065",
  appId: "1:1074842705065:web:e1eddd18f0aca6ea3e9db8"
};

export const app = initializeApp(firebaseConfig);