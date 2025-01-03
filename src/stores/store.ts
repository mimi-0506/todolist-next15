import { createStore } from "zustand/vanilla";

export type TodoListState = {
  todos: [] | null;
  dones: [] | null;
};

export type TodoListActions = {
  setTodos: (newTodos: []) => void;
  setDones: (newDones: []) => void;
};

export type TodoListStore = TodoListState & TodoListActions;

export const defaultInitState: TodoListState = {
  todos: null,
  dones: null,
};

export const createTodoListStore = (
  initState: TodoListState = defaultInitState
) => {
  return createStore<TodoListStore>()((set) => ({
    ...initState,
    setTodos: (newTodos) => set((state) => ({ ...state, todos: newTodos })),
    setDones: (newDones) => set((state) => ({ ...state, dones: newDones })),
  }));
};
