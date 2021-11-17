import React, { useState, useRef } from 'react';
import Button from '../UI/Button';

import classes from './AddTodo.module.css';

const AddTodo = props => {
  const [inputValue, setInputValue] = useState('');
  const inputFocus = useRef();

  const submitHandler = e => {
    e.preventDefault();

    if (inputValue === '') {
      inputFocus.current.focus();
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
        placeholder="Add your todo here..."
        type="text"
        value={inputValue}
        ref={inputFocus}
        className={classes.inputTodo}
        onChange={inputHandler}
      />
      <Button type="submit" className={classes.buttonTodo}>
        Add Todo +
      </Button>
    </form>
  );
};

export default AddTodo;
