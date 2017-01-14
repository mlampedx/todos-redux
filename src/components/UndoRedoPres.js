import React from 'react';
import FlatButton from 'material-ui/FlatButton';
// import FontIcon from 'material-ui/FontIcon';

const UndoRedoPres = ({ canUndo, canRedo, onUndo, onRedo }) => (
  <p className = 'centered-elem'>
    <FlatButton
      label = 'Undo'
      secondary = { true }
      onClick = { onUndo }
      disabled = { !canUndo }
      // icon = { <FontIcon className = '' /> }
    />
    <FlatButton
      label = 'Redo'
      primary = { true }
      onClick = { onRedo }
      disabled = { !canRedo }
      // icon = { <FontIcon className = '' /> }
    />
  </p>
)

export default UndoRedoPres;
