import React, { useContext, useEffect } from "react";
import { TodoContext } from "../../store/TodoContext";
import TodoItem from "../TodoItem/TodoItem";
import styles from './TodoList.module.css'

export const TodoList: React.FC = () => {
  const todoCtx = useContext(TodoContext);

  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem("Todos") || "{}")
    console.log(storedTodos)
    if (Object.keys(storedTodos).length !== 0){
      todoCtx.loadTodos(storedTodos)
    }
  },[]) // eslint-disable-line react-hooks/exhaustive-deps

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
