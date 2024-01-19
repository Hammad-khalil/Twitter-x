import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  // YOUR CONFIG HERE
  apiKey: "AIzaSyDdHvZEIMQHUekSa043KyBsrmxGX1GGEkQ",
   authDomain: "twitterbackend-278e2.firebaseapp.com",
   projectId: "twitterbackend-278e2",
   storageBucket: "twitterbackend-278e2.appspot.com",
   messagingSenderId: "301486240033",
   appId: "1:301486240033:web:45bbc6bbf43210bdc34e60"
}

firebase.initializeApp(firebaseConfig)

let db = firebase.firestore()

export default db




// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
// import { collection, query, where, onSnapshot } from "firebase/firestore";

// const firebaseConfig = {
//   // your config here
//   apiKey: "AIzaSyDdHvZEIMQHUekSa043KyBsrmxGX1GGEkQ",
//   authDomain: "twitterbackend-278e2.firebaseapp.com",
//   projectId: "twitterbackend-278e2",
//   storageBucket: "twitterbackend-278e2.appspot.com",
//   messagingSenderId: "301486240033",
//   appId: "1:301486240033:web:45bbc6bbf43210bdc34e60"
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export default db;

