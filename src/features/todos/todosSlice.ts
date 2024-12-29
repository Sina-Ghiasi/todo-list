import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../components/TodoList/TodoList";

export type TodosState = {
  todos: Todo[];
};

const initialState: TodosState = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    toggleTodoCompilation: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, setTodos, removeTodo, toggleTodoCompilation } =
  todosSlice.actions;

export default todosSlice.reducer;
