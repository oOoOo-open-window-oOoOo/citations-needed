import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// data store
import firebase from 'firebase'
import 'firebase/firestore'


let store = null
function initStore() {
  if (!store) {
    firebase.initializeApp({
      // TODO make these environment variables??
      apiKey: 'AIzaSyDlqjPyi7s0KT2orf21SiAHGiqGo2PM27k',
      authDomain: 'localhost',
      projectId: 'citations-needed-prototype',
    })

    store = firebase.firestore()
  }

  return store
}


ReactDOM.render(<App store={initStore()} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
