import {initializeApp} from 'firebase/app';
import {getStorage, setStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB9VUxFbJCV7kQcWpd3bSLqJ0Rg-NZBwas",
  authDomain: "foodapp-e91f7.firebaseapp.com",
  projectId: "foodapp-e91f7",
  storageBucket: "foodapp-e91f7.appspot.com",
  messagingSenderId: "146461990607",
  appId: "1:146461990607:web:94ab96e4237cebdf2121ba",
  measurementId: "G-X1P50CBM4E"
};


export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);