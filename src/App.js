import { Fragment, useState } from 'react';

import TodoContainer from './components/TODO/TodoContainer';
import AddTodo from './components/TODO/AddTodo';

import './App.css';
import classes from './components/TODO/TodoContainer.module.css';

// import db from './components/TODO/db';

// import { getDatabase } from 'firebase/database';

// import { initializeApp } from 'firebase/app';\

import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: 'AIzaSyA2lEyIrKGgoYc-qPjg_jRFR2QbnLWYMcA',
  authDomain: 'react-todo-fc205.firebaseapp.com',
  databaseURL: 'https://react-todo-fc205-default-rtdb.firebaseio.com',
  projectId: 'react-todo-fc205',
  storageBucket: 'react-todo-fc205.appspot.com',
  messagingSenderId: '681506247278',
  appId: '1:681506247278:web:453813b271d5e5b4030c7f',
};

const db = firebase.initializeApp(firebaseConfig);

function App() {
  const [todos, setTodos] = useState([]);

  const postTodoHandler = async todo => {
    await fetch(
      'https://react-todo-fc205-default-rtdb.firebaseio.com/todos.json',
      {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  };

  const addingTodoHandler = todo => {
    setTodos(prevState => [
      ...prevState,
      { id: Math.random() * 10000, text: todo },
    ]);

    postTodoHandler({ id: Math.random() * 10000, text: todo });
  };

  const removingTodoHandler = todoID => {
    // console.log(todoID);

    // const newTodos = todos.filter(todo => todo.id !== todoID);
    // console.log(newTodos);
    // setTodos(newTodos);

    // const db = getDatabase();

    db.database().ref(`/todos/${todoID}`).remove();
    // todosRef.remove();
  };

  return (
    <Fragment>
      <h1 className={classes.mainHeader}>
        The Most Craziest Todo You Have Ever Imagined
      </h1>
      <AddTodo addingTodo={addingTodoHandler} />
      <TodoContainer showTodos={todos} removoTodos={removingTodoHandler} />
    </Fragment>
  );
}

export default App;
