import { connect } from 'react-redux';
import { undoAction, redoAction } from '../actions';
import UndoRedoPres from '../components/UndoRedoPres';

const mapStateToProps = (state) => {
  return {
    canUndo: state.todos.past.length > 0,
    canRedo: state.todos.future.length > 0
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUndo: () => dispatch(undoAction()),
    onRedo: () => dispatch(redoAction())
  }
}

const UndoRedo = connect(mapStateToProps, mapDispatchToProps)(UndoRedoPres);

export default UndoRedo;
