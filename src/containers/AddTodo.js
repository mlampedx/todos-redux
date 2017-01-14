import React from 'react';
// import { connect } from 'react-redux';
// import { connect } from 'seedux';
import { connect } from './../../../seedux';
import { addTodo } from '../actions';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

let AddTodo = ({ dispatch }) => {
  let internalText;
  const textInput = 
    <TextField 
      id = 'input'
      ref = {node => {
        internalText = node;
      }} 
    />

  return (
    <div className = 'centered-elem'>
      <form onSubmit={e => {
        e.preventDefault();
        if (!internalText.input.value.trim()) {
          return;
        }
        dispatch(addTodo(internalText.input.value));
          internalText.input.value = '';
      }}>
        {textInput}
        <RaisedButton
          className = 'submit-btn'
          type = 'submit'
          label = 'Add Todo'
        />
      </form>
    </div>
  )
}

AddTodo = connect()(AddTodo);

export default AddTodo;
