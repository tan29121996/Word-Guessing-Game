import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, initializeFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyADAsnhnHu_6W9FJDMfYsWev1_SBOobLDs",
  authDomain: "whatchaknow-4ab97.firebaseapp.com",
  projectId: "whatchaknow-4ab97",
  storageBucket: "whatchaknow-4ab97.appspot.com",
  messagingSenderId: "31009074676",
  appId: "1:31009074676:web:26c6c40b4f2192f13e9da1",
  measurementId: "G-VYJYTBY4DE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  useFetchStreams: false,
});

export { auth, db }