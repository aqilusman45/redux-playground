// Todos Actions
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const ADD_TODOS = "ADD_TODOS";
const RECEIVE_DATA = "RECEIVE_DATA";

const addFetchedData = todos => ({
  type: ADD_TODOS,
  todos
});

const addTodo = todo => ({
  type: ADD_TODO,
  todo
});

const removeTodo = todo => ({
  type: REMOVE_TODO,
  todo
});

const updateTodo = todo => ({
  type: Todos.UPDATE_TODO,
  todo
});

// Goals Actions
const ADD_GOAL = "ADD_GOAL";
const REMOVE_GOAL = "REMOVE_GOAL";
const UPDATE_GOAL = "UPDATE_GOAL";

const addGoal = goal => ({
  type: ADD_GOAL,
  goal
});

const removeGoal = goal => ({
  type: REMOVE_GOAL,
  goal
});

const updateGoal = goal => ({
  type: UPDATE_GOAL,
  goal
});
