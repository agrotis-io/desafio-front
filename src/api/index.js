import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBDVGE6JuXG8ZH0B2NNhsfx0-43FKEQ6VA',
  authDomain: 'agrotis-56b55.firebaseapp.com',
  databaseURL: 'https://agrotis-56b55.firebaseio.com',
  projectId: 'agrotis-56b55',
  storageBucket: 'agrotis-56b55.appspot.com',
  messagingSenderId: '1021012392419',
  appId: '1:1021012392419:web:56ce9dfb8664dcb8aa08d6'
}

firebase.initializeApp(firebaseConfig)

export async function fetchData () {
  const db = firebase.firestore()
  const data = await db.collection('situation').get()
  const response = data.docs.map(doc => ({ ...doc.data(), id: doc.id }))
  return response
}

export const db = firebase.firestore()
