declare interface ITodo {
  id: number;
  content: string;
  completed: boolean;
}

declare interface Istate {
  todoList: ITodo[];
}

declare interface IAction {
  type: ACTION_TYPE;
  payload: ITodo | number;
}

declare enum ACTION_TYPE {
  ADD_TODO = 'addTodo',
  REMOVE_TODO = 'removeTodo',
  TOGGLE_TODO = 'toggleTodo'
}
