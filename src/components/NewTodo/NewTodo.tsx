import { useContext, useState } from "react";
import { TodoContext } from "../../store/TodoContext";
import styles from "./NewTodo.module.css";

export const NewTodo: React.FC = () => {
  const todoCtx = useContext(TodoContext);
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (text.length === 0) {
      return;
    }
    todoCtx.addTodo(text);
    setText("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>Add to list</button>
    </form>
  );
};

export default NewTodo;
