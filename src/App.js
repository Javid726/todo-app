import { Fragment, useState } from 'react';

import TodoContainer from './components/TODO/TodoContainer';
import AddTodo from './components/TODO/AddTodo';

import './App.css';
import classes from './components/TODO/TodoContainer.module.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addingTodoHandler = todo => {
    setTodos(prevState => [
      ...prevState,
      { id: Math.random() * 10000, text: todo },
    ]);
  };

  const removingTodoHandler = todoID => {
    console.log(todoID);

    const newTodos = todos.filter(todo => todo.id !== todoID);
    console.log(newTodos);
    setTodos(newTodos);
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
