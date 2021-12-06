import React, { useState, useEffect, useCallback } from 'react';

import Todoitem from './Todoitem';
import Card from '../UI/Card';

import classes from '../TODO/TodoContainer.module.css';

const TodoContainer = props => {
  const [assignedTodos, setAssignedTodos] = useState([]);

  const fetchTodos = useCallback(async () => {
    const response = await fetch(
      'https://react-todo-fc205-default-rtdb.firebaseio.com/todos.json',
    );
    const data = await response.json();

    const loadedTodos = [];

    for (const key in data) {
      loadedTodos.push({ id: key, text: data[key].text });
    }

    setAssignedTodos(loadedTodos);
  }, []);

  useEffect(() => fetchTodos());

  return (
    <Card className={classes.outsideCard}>
      {assignedTodos.length > 0 ? (
        assignedTodos.map(todo => (
          <Todoitem
            removoTodosContainer={props.removoTodos}
            todo={todo}
            key={todo.id}
          />
        ))
      ) : (
        <p className={classes.paragraph}>Nothing to see here yet!</p>
      )}
    </Card>
  );
};

export default TodoContainer;
