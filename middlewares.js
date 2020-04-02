// function checkAndDispatch(store, action) {
//   console.log(action.todo.type, ADD_TODO, action);

//   if (
//     action.type === ADD_TODO &&
//     action.todo.title.toLowerCase().includes("dog")
//   ) {
//     return alert("Nope, we are having no dogs");
//   }
//   return store.dispatch(action);
// }

// Redux middleware
// middleware functions are higher-order and middleware for redux
// follow exact same pattern
const checker = store => next => action => {
  if (
    action.type === ADD_TODO &&
    action.todo.name.toLowerCase().includes("dog")
  ) {
    return alert("Nope, we are having no dogs");
  }
  return next(action);
};

const logger = store => next => action => {
  console.group(action.type);
  console.log("new data", action);
  const result = next(action);
  console.log("Resulted change", store.getState());
  console.groupEnd();
  return result;
};
