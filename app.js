// const { createStore } = require("./store");
// const { Goals, Todos } = require("./actions");
// const { goals, todos } = require("./reducers");

// combine reducers
// function app(state = {}, action) {
//   return {
//     todos: todos(state.todos, action),
//     goals: goals(state.goals, action)
//   };
// }

// Using Redux library

const store = Redux.createStore(
  Redux.combineReducers({
    todos,
    goals
  }),
  Redux.applyMiddleware(checker, logger)
);

// unsubscribe();

// store.dispatch(
//   addTodo({
//     title: "Hello TODO",
//     id: 1
//   })
// );

// store.dispatch(
//   addGoal({
//     title: "Hello GOAL",
//     id: 0
//   })
// );
