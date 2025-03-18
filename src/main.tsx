import { ThemeProvider } from "@/components/theme-provider.tsx";

import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyC4RNZDqX2Wgow-ejC4DqgMJR11VuJQ01s",
	authDomain: "makeen-damascus.firebaseapp.com",
	projectId: "makeen-damascus",
	storageBucket: "makeen-damascus.firebasestorage.app",
	messagingSenderId: "691045970226",
	appId: "1:691045970226:web:e5a51f3b6033cf1f89a72b",
	measurementId: "G-104MQ9P8ES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(`analytics = `, analytics);
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
