import React, { useState } from "react";

interface Todo {
  text: string;
  completed: boolean;
}

type TodosContextObject = {
  tasks: Todo[];
  loadTodos: (todos: Todo[]) => void;
  addTodo: (text: string) => void;
  removeTodo: (index: number) => void;
  toggleTodo: (index: number) => void;
};

export const TodoContext = React.createContext<TodosContextObject>({
  tasks: [],
  loadTodos: () => {},
  addTodo: () => {},
  removeTodo: () => {},
  toggleTodo: () => {},
});

interface Props {
  children: React.ReactNode;
}

const TodoContextProvider: React.FC<Props> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const loadTodos = (todos: Todo[]) => {
    setTodos(todos);
  };

  const addTodo = (text: string) => {
    const newTodos = [...todos, { text: text, completed: false }];
    setTodos(newTodos);

    localStorage.setItem("Todos", JSON.stringify(newTodos));
  };

  const removeTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    localStorage.setItem("Todos", JSON.stringify(newTodos));
  };

  const toggleTodo = (index: number) => {
    const newTodos = todos.map((item, i) => {
      if (i === index) {
        item.completed = !item.completed;
      }
      return item;
    });

    setTodos(newTodos);
    localStorage.setItem("Todos", JSON.stringify(newTodos));
  };

  const contextValue: TodosContextObject = {
    tasks: todos,
    loadTodos,
    addTodo,
    removeTodo,
    toggleTodo,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
