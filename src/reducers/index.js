import { combineReducers } from 'redux';
import undoableTodos from './todos';
import visibilityFilter from './visibilityFilter';

// combineReducers() generates a function that calls your reducers with the slices of state selected 
// according to their keys and combines their results into into a single object again.

const todoApp = combineReducers({
  visibilityFilter,
  todos: undoableTodos
})

// Same as:

// function todoApp(state = {}, action) {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action),
//     undoable: undoable(state.undoable, action)
//   }
// }

export default todoApp;
