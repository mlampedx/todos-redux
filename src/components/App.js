import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import UndoRedo from '../containers/UndoRedo';
import AppBar from 'material-ui/AppBar';

const App = () => (
  <div>
    <AppBar
      className = 'app-bar'
      title = { <span className = 'centered-elem'>TASK MANAGER</span> }
      showMenuIconButton = { false }
    />
    <AddTodo />
    <Footer />
    <UndoRedo />
    <VisibleTodoList />
  </div>
)

export default App;