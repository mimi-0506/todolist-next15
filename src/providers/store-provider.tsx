"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import { type TodoListStore, createTodoListStore } from "@/stores/store";

export type TodoListStoreApi = ReturnType<typeof createTodoListStore>;

export const TodoListStoreContext = createContext<TodoListStoreApi | undefined>(
  undefined
);

export interface TodoListStoreProviderProps {
  children: ReactNode;
}

export const TodoListStoreProvider = ({
  children,
}: TodoListStoreProviderProps) => {
  const storeRef = useRef<TodoListStoreApi>(null);
  if (!storeRef.current) {
    storeRef.current = createTodoListStore();
  }

  return (
    <TodoListStoreContext.Provider value={storeRef.current}>
      {children}
    </TodoListStoreContext.Provider>
  );
};

export const useTodoListStore = <T,>(
  selector: (store: TodoListStore) => T
): T => {
  const todoListStoreContext = useContext(TodoListStoreContext);

  if (!todoListStoreContext) {
    throw new Error(
      `useTodoListStore must be used within TodoListStoreProvider`
    );
  }

  return useStore(todoListStoreContext, selector);
};
