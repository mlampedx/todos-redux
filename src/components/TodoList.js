import React, { PropTypes } from 'react';
import Todo from './Todo';

const TodoList = ({ todos = [], onTodoClick }) => (
  <ul className = 'task-list'>
    {todos.map(todo => 
      <Todo
        className = 'task'
        key = {todo.id}
        {...todo}
        onClick = {() => onTodoClick(todo.id)}
      />
    )}
  </ul>
)

export default TodoList;
