const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat([action.todo]);
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case UPDATE_TODO:
      return state.map(todo =>
        todo.id !== action.id
          ? todo
          : Object.assign({}, todo, { complete: !todo.complete })
      );
    case ADD_TODOS:
      return action.todos;
    default:
      return state;
  }
};

const loader = (state = true, action) => {
  switch (action.type) {
    case ADD_TODOS:
      return false;
    default:
      return state;
  }
};

const goals = (state = [], action) => {
  switch (action.type) {
    case ADD_GOAL:
      return state.concat([action.goal]);
    case REMOVE_GOAL:
      return state.filter(goal => goal.id !== action.id);
    case UPDATE_GOAL:
      return state.map(goal =>
        goal.id !== action.id
          ? goal
          : Object.assign({}, goal, { complete: !action.complete })
      );
    default:
      return state;
  }
};
