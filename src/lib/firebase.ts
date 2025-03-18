import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
	apiKey: "AIzaSyC4RNZDqX2Wgow-ejC4DqgMJR11VuJQ01s",
	authDomain: "makeen-damascus.firebaseapp.com",
	projectId: "makeen-damascus",
	storageBucket: "makeen-damascus.firebasestorage.app",
	messagingSenderId: "691045970226",
	appId: "1:691045970226:web:e5a51f3b6033cf1f89a72b",
	measurementId: "G-104MQ9P8ES"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(); 