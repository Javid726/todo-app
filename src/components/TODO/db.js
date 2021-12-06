import database from 'firebase/database';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyA2lEyIrKGgoYc-qPjg_jRFR2QbnLWYMcA',
  authDomain: 'react-todo-fc205.firebaseapp.com',
  databaseURL: 'https://react-todo-fc205-default-rtdb.firebaseio.com',
  projectId: 'react-todo-fc205',
  storageBucket: 'react-todo-fc205.appspot.com',
  messagingSenderId: '681506247278',
  appId: '1:681506247278:web:453813b271d5e5b4030c7f',
};

const app = initializeApp(firebaseConfig);

export default app;
