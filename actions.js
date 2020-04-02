exports.Todos = class {
  static ADD_TODO = "ADD_TODO";
  static REMOVE_TODO = "REMOVE_TODO";
  static UPDATE_TODO = "UPDATE_TODO";

  static addTodo = todo => ({
    type: this.ADD_TODO,
    todo
  });

  static removeTodo = todo => ({
    type: this.REMOVE_TODO,
    todo
  });

  static updateTodo = todo => ({
    type: this.UPDATE_TODO,
    todo
  });
};

exports.Goals = class {
  static ADD_GOAL = "ADD_GOAL";
  static REMOVE_GOAL = "REMOVE_GOAL";
  static UPDATE_GOAL = "UPDATE_GOAL";

  static addGoal = goal => ({
    type: this.ADD_GOAL,
    goal
  });

  static removeGoal = goal => ({
    type: this.REMOVE_GOAL,
    goal
  });

  static updateGoal = goal => ({
    type: this.UPDATE_GOAL,
    goal
  });
};
