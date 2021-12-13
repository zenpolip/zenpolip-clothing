import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyBp8ZCRAuTAlSE_8V2NKv_qWo3xL4JtWFM",
  authDomain: "b-clothing-b439b.firebaseapp.com",
  projectId: "b-clothing-b439b",
  storageBucket: "b-clothing-b439b.appspot.com",
  messagingSenderId: "469821712216",
  appId: "1:469821712216:web:4c079942ea52df6032a72d"
};

firebase.initializeApp(config)

export const createUserProfileDocument = async ( userAuth, additionalData ) => {
  if( !userAuth ) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get()

  if ( !snapShot.exists ) {
      const { displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
            displayName, 
            email, 
            createdAt, 
            ...additionalData
        })
      } catch (error) {
        console.log(error);
      }
  }
  return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// google bejelentkezés
 
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)


export default firebase;
