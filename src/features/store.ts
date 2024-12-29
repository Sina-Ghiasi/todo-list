import { configureStore } from "@reduxjs/toolkit";
import todosReducer, { TodosState } from "./todos/todosSlice";

const loadState = (): RootState | undefined => {
  try {
    const serializedState = localStorage.getItem("appState");
    if (serializedState) {
      return JSON.parse(serializedState);
    }
  } catch (err) {
    console.error("Could not load state from localStorage", err);
  }
  return undefined;
};

const saveState = (state: RootState): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("appState", serializedState);
  } catch (err) {
    console.error("Could not save state to localStorage", err);
  }
};

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export type RootState = {
  todos: TodosState;
};
export type AppDispatch = typeof store.dispatch;

export default store;