function checkAndDispatch(store, action) {
  console.log(action.todo.type, ADD_TODO, action);

  if (
    action.type === ADD_TODO &&
    action.todo.title.toLowerCase().includes("dog")
  ) {
    return alert("Nope, we are having no dogs");
  }
  return store.dispatch(action);
}
