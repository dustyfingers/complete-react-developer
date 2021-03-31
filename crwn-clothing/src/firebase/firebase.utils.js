import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyB_eDydUDr-tUlRQMpB7ORnxxbWNrPVrcE",
    authDomain: "crwn-clothing-74848.firebaseapp.com",
    databaseURL: "https://crwn-clothing-74848.firebaseio.com",
    projectId: "crwn-clothing-74848",
    storageBucket: "crwn-clothing-74848.appspot.com",
    messagingSenderId: "334192134283",
    appId: "1:334192134283:web:48a35513667a930dceac8e",
    measurementId: "G-B4KTM09FSV"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({displayName, email, createdAt, ...additionalData});
        } catch (err) {
            console.log("error creating user");
            console.log(err.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;