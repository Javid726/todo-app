import React from 'react';

import Card from '../UI/Card';
import classes from './TodoContainer.module.css';

const Todoitem = props => {
  const removingTodoHandler = id => {
    console.log(id);
    props.removoTodosContainer(id);
  };

  return (
    <Card className={classes.todoItem}>
      <div className={classes.todoText}>
        <p>{props.todo.text}</p>
      </div>
      <button
        className={classes.buttonRemove}
        onClick={removingTodoHandler.bind(this, props.todo.id)}
      >
        Remove
      </button>
    </Card>
  );
};

export default Todoitem;
