import React, { useState } from "react";

interface Todo {
  text: string;
  completed: boolean;
}

type TodosContextObject = {
  tasks: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (index: number) => void;
  toggleTodo: (index: number) => void;
};

export const TodoContext = React.createContext<TodosContextObject>({
  tasks: [],
  addTodo: () => {},
  removeTodo: () => {},
  toggleTodo: () => {},
});

interface Props {
    children: React.ReactNode
}

const TodoContextProvider: React.FC<Props> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos((previousTodos) => {
      return [...previousTodos, { text: text, completed: false }];
    });
  };

  const removeTodo = (index: number) => {
    setTodos((previousTodos) => {
      return [...previousTodos].filter((_, i) => i !== index);
    });
  };

  const toggleTodo = (index: number) => {
    setTodos((previousTodos) => {
      return [...previousTodos].map((item, i) => {
        if (i === index) {
          item.completed = !item.completed;
        }
        return item;
      });
    });
  };

  const contextValue: TodosContextObject = {
    tasks: todos,
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
