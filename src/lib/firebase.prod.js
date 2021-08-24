import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
//import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyCnoumRLn0yTRAvmd11L7p_G0Sv9cMYEng",
    authDomain: "netflix-clone-v2-d9728.firebaseapp.com",
    projectId: "netflix-clone-v2-d9728",
    storageBucket: "netflix-clone-v2-d9728.appspot.com",
    messagingSenderId: "726942950681",
    appId: "1:726942950681:web:0a24c41e70444fee959188"

};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
//seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
