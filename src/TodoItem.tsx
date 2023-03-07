import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";
import styles from "./TodoItem.module.css"

interface Props {
  index: number;
  text: string;
  completed: boolean;
}

const TodoItem: React.FC<Props> = ({ index, text, completed }) => {
  const todoCtx = useContext(TodoContext);

  const handleCheckbox = () => {
    todoCtx.toggleTodo(index);
  };
  const handleRemove = () => {
    todoCtx.removeTodo(index);
  };

  return (
    <div className={styles.item}>
      <p>{text}</p>
      <div>
      <input type="checkbox" checked={completed} onChange={handleCheckbox} />
      <button onClick={handleRemove}>X</button>
      </div>
    </div>
  );
};

export default TodoItem;
