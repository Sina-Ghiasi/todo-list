import { Todo } from "../TodoList/TodoList";
import styles from "./TodoItem.module.css";
import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineDelete,
  MdOutlineExpandLess,
  MdOutlineExpandMore,
} from "react-icons/md";

type TodoItemProps = {
  todo: Todo;
  expandedId: number | null;
  expand: (id: number) => void;
  activeId: number | null;
  active: (id: number) => void;
};
const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  expandedId,
  expand,
  activeId,
  active,
}) => {
  const isExpanded = todo.id === expandedId;
  const isActive = todo.id === activeId;

  return (
    <div className={styles.todoItemContainer}>
      <div
        className={`${styles.todoItemHeader} ${isActive ? styles.active : ""}`}
        onClick={() => active(todo.id)}
      >
        <span
          className={`${styles.todoTitle} ${
            todo.completed ? styles.todoCompleted : ""
          }`}
        >
          {todo.title}
        </span>
        <div
          className={styles.todoActionsIcons}
          onClick={(e) => e.stopPropagation()}
        >
          <span className={`${styles.icon}`}>
            {todo.completed ? (
              <MdOutlineCheckBox />
            ) : (
              <MdOutlineCheckBoxOutlineBlank />
            )}
          </span>
          <span className={`${styles.icon} ${styles.delete}`}>
            <MdOutlineDelete />
          </span>
          <span className={`${styles.icon}`} onClick={() => expand(todo.id)}>
            {isExpanded ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
          </span>
        </div>
      </div>
      <div
        className={`${styles.todoItemDetails} ${isExpanded ? styles.show : ""}`}
      >
        {todo.notes}
      </div>
    </div>
  );
};

export default TodoItem;
