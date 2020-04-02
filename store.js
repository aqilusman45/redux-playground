exports.createStore = reducer => {
  // 1- Create
  // 2- Read
  // 3- Update
  // 4- Delete
  let state;
  let listeners = [];

  const getState = () => state;
  // create a state listener

  // create dispatch
  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };
  // create subscriber function
  const subscribe = listener => {
    listeners.push(listener);
    return () => {
      listeners.filter(l => l !== listener);
    };
  };
  return {
    getState,
    subscribe,
    dispatch
  };
};
