import type { Todo } from "../types/todo";
import { useState, useEffect, useContext } from 'react';

// Données initiales simulées
const initialTodos: Todo[] = [
  { id: "1", title: "Apprendre React Hook Form", completed: false },
  { id: "2", title: "Comprendre Zod", completed: true },
  { id: "3", title: "Maîtriser React Query", completed: false },
];

// Simulation d'un fetch asynchrone
const fetchTodos = (): Promise<Todo[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(initialTodos);
    }, 500);
  });
};

// Hook pour récupérer les todos
export const useTodos = () => {
  const [todos, setTodos] = useState(fetchTodos);

  return {
    todos,
    setTodos
  }
};

// Hook pour ajouter un todo
export const useAddTodo = (setTodos) => {
  const addTodo = (x) => {
    setTodos((var) => [
      ...var,
      {
        todos
      }
    ]);
  }
  return addTodo
};

// Hook pour basculer l'état completed d'un todo
export const useToggleTodo = () => {};
