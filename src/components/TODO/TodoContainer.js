import React, { useState, useEffect } from 'react';

import Todoitem from './Todoitem';
import Card from '../UI/Card';

import classes from '../TODO/TodoContainer.module.css';

const TodoContainer = props => {
  const [assignedTodos, setAssignedTodos] = useState([]);

  useEffect(() => setAssignedTodos(props.showTodos), [props.showTodos]);

  return (
    <Card className={classes.outsideCard}>
      {assignedTodos &&
        assignedTodos.map(todo => (
          <Todoitem
            removoTodosContainer={props.removoTodos}
            todo={todo}
            key={todo.id}
          />
        ))}
    </Card>
  );
};

export default TodoContainer;
