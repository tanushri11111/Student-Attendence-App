import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA0KWHN2ClKM9RU0YTzXR_1Z_uBhiwOLMY",
  authDomain: "student-attendance-app-70503.firebaseapp.com",
  databaseURL: "https://student-attendance-app-70503-default-rtdb.firebaseio.com",
  projectId: "student-attendance-app-70503",
  storageBucket: "student-attendance-app-70503.appspot.com",
  messagingSenderId: "384673267561",
  appId: "1:384673267561:web:889625a6cb7500f63387f8",
  measurementId: "G-LGZTSWBWS0"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();