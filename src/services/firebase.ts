// https://firebase.google.com/docs/web/setup#libraries-bundle
// https://firebase.google.com/docs/web/modular-upgrade
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

/**
 * Initial firebase app config
 */
try {
  const firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG)
  firebase.initializeApp(firebaseConfig)
  firebase.firestore()
} catch (error) {
  /* eslint-disable-next-line no-console */
  console.error(error)
}

export const knowmeFirestore = firebase.firestore().collection('db').doc('knowme')
export const noticesCollection = knowmeFirestore.collection('notices')

export { firebase }
