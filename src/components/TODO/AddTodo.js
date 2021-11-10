import React, { useState } from 'react';

import classes from './AddTodo.module.css';

const AddTodo = props => {
  const [inputValue, setInputValue] = useState('');

  const submitHandler = e => {
    e.preventDefault();

    if (inputValue === '') {
      alert('what are you doing, greg?');
      return;
    }
    props.addingTodo(inputValue);
    setInputValue('');
  };

  const inputHandler = e => {
    setInputValue(prevInput => (prevInput = e.target.value));
  };

  return (
    <form className={classes.formTodo} onSubmit={submitHandler}>
      <input
        placeholder="Add your fucking todo here..."
        type="text"
        value={inputValue}
        className={classes.inputTodo}
        onChange={inputHandler}
      />
      <button type="submit" className={classes.buttonTodo}>
        Add Todo +
      </button>
    </form>
  );
};

export default AddTodo;
