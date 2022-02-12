import firebase from "firebase";

const config = {
    apiKey: "AIzaSyCbwEY8k6MdN6sKAoHDICH9oobd2dNOnzE",
    authDomain: "fir-recipes-4ab64.firebaseapp.com",
    projectId: "fir-recipes-4ab64",
    storageBucket: "fir-recipes-4ab64.appspot.com",
    messagingSenderId: "6117887857",
    appId: "1:6117887857:web:6022c9235eaac8f0fe30d0",
    measurementId: "G-NHY8D1HGNJ"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;