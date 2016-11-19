import React from 'react';

const UndoRedoPres = ({ canUndo, canRedo, onUndo, onRedo }) => (
  <p>
    <button onClick = { onUndo } disabled = { !canUndo }>
    Undo
    </button>
    <button onClick = { onRedo } disabled = { !canRedo }>
    Redo
    </button>
  </p>
)

export default UndoRedoPres;
