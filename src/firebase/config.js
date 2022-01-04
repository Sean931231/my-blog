import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDfYota5d3G9z6x3J3wDh9ARvrIm68v0xQ",
    authDomain: "vuex-4-fb-auth-2040d.firebaseapp.com",
    projectId: "vuex-4-fb-auth-2040d",
    storageBucket: "vuex-4-fb-auth-2040d.appspot.com",
    messagingSenderId: "680972794322",
    appId: "1:680972794322:web:2f0170c7ef154e76a5700b"
};

// initial firebase
initializeApp(firebaseConfig)

// init firebase auth
const auth = getAuth()

export { auth }