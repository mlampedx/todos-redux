import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';

const Todo = ({ onClick, completed, text }) => (
  <Paper
    className = 'task'
    onClick = {onClick}
    zDepth = {2}
    style = {{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    <li className = 'task-text'>{text}</li>
  </Paper>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo;
