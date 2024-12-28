import { useState } from "react";
import styles from "./AddTodo.module.css";
type AddTodoProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddTodo: React.FC<AddTodoProps> = ({ setIsOpen }) => {
  const [title, setTitle] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const saveTodo = () => {};

  return (
    <form className={styles.addTodoForm} onSubmit={saveTodo}>
      <input
        className={styles.addTodoTitle}
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Todo title"
      />
      <textarea
        className={styles.addTodoNotes}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Need some notes about your todo?"
      />
      <div className={styles.addTodoActions}>
        <button
          className={`${styles.addTodoButton} ${styles.addTodoButtonSecondary}`}
          onClick={() => setIsOpen(false)}
        >
          Cancel
        </button>
        <button
          className={`${styles.addTodoButton} ${styles.addTodoButtonPrimary}`}
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
