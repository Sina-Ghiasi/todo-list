import { useState } from "react";
import styles from "./AddTodo.module.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todos/todosSlice";
import toast from "react-hot-toast";
import { AppDispatch } from "../../features/store";
type AddTodoProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddTodo: React.FC<AddTodoProps> = ({ setIsOpen }) => {
  const [title, setTitle] = useState<string>("");
  const [notes, setNotes] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();
  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo({ id: Date.now(), title, notes, completed: false }));
    setIsOpen(false);
    toast.success("Todo added successfully");
  };

  return (
    <form className={styles.addTodoForm} onSubmit={handleAddTodo}>
      <input
        className={styles.addTodoTitle}
        type="text"
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
        placeholder="Todo title"
        aria-label="Todo title"
        required
        autoFocus
      />
      <textarea
        className={styles.addTodoNotes}
        value={notes}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setNotes(e.target.value)
        }
        placeholder="Need some notes about your todo? (optional)"
        aria-label="Todo notes"
      />
      <div className={styles.addTodoActions}>
        <button
          type="button"
          className={`${styles.addTodoButton} ${styles.addTodoButtonSecondary}`}
          onClick={() => setIsOpen(false)}
        >
          Cancel
        </button>
        <button
          type="submit"
          className={`${styles.addTodoButton} ${styles.addTodoButtonPrimary}`}
        >
          Save
        </button>
      </div>
    </form>
  );
};
export default AddTodo;
