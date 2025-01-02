import { mainDatas, modifyData } from "@/types/types";
import { createStore } from "zustand/vanilla";

export type TodoListState = {
  todos: mainDatas[];
  dones: mainDatas[];
  detail: modifyData | null;
};

export type TodoListActions = {
  setTodos: (newTodos: mainDatas[]) => void;
  setDones: (newDones: mainDatas[]) => void;
  setDetail: (newDetail: modifyData) => void;
};

export type TodoListStore = TodoListState & TodoListActions;

export const defaultInitState: TodoListState = {
  todos: [],
  dones: [],
  detail: null,
};

export const createTodoListStore = (
  initState: TodoListState = defaultInitState
) => {
  return createStore<TodoListStore>()((set) => ({
    ...initState,
    setTodos: (newTodos) => set((state) => ({ ...state, todos: newTodos })),
    setDones: (newDones) => set((state) => ({ ...state, dones: newDones })),
    setDetail: (newDetail) => set((state) => ({ ...state, detail: newDetail })),
  }));
};
