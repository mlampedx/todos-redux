function undoable(reducer) {
  const initState = {
    past: [],
    present: reducer(undefined, {}),
    future: []
  }

  return function (state = initState, action) {
    const { past, present, future } = state;
    switch (action.type) {
      case 'UNDO':
        let previous = past[past.length - 1];
        let newPast = past.slice(0, past.length - 1);
        return {
          past: newPast,
          present: previous,
          future: [ present, ...future ]
        }
      case 'REDO':
        let next = future[0];
        let newFuture = future.slice(1);
        return {
          past: [ ...past, present ],
          present: next,
          future: newFuture
        }
      default:
        const newPresent = reducer(present, action);
          if (present === newPresent) {
            return state;
          }

          return {
            past: [...past, present ],
            present: newPresent,
            future: []
          }
      }
  }
}

export default undoable;
