import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";
import TodoItem from "./TodoItem";
import styles from './TodoList.module.css'

export const TodoList: React.FC = () => {
  const todoCtx = useContext(TodoContext);

  return (
    <div className={styles.todoList}>
      {todoCtx.tasks.map((task, i) => {
        return (
          <TodoItem
            key={i}
            index={i}
            text={task.text}
            completed={task.completed}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
