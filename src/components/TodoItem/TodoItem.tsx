import { useDispatch, useSelector } from "react-redux";
import {
  removeTodo,
  toggleTodoCompilation,
} from "../../features/todos/todosSlice";
import { Todo } from "../TodoList/TodoList";
import styles from "./TodoItem.module.css";
import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineDelete,
  MdOutlineExpandLess,
  MdOutlineExpandMore,
} from "react-icons/md";
import toast from "react-hot-toast";
import { AppDispatch, RootState } from "../../features/store";

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
  const { todos } = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch<AppDispatch>();

  const onRemove = () => {
    dispatch(removeTodo(todo.id));
    toast.success("Todo deleted successfully");
  };
  const onComplete = () => {
    dispatch(toggleTodoCompilation(todo.id));
    notifyTodoStatus(todo, todos);
  };
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
          <span className={`${styles.icon}`} onClick={onComplete}>
            {todo.completed ? (
              <MdOutlineCheckBox />
            ) : (
              <MdOutlineCheckBoxOutlineBlank />
            )}
          </span>
          <span
            className={`${styles.icon} ${styles.delete}`}
            onClick={onRemove}
          >
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
        {todo.notes ? (
          <p className={styles.todoNotes}>{todo.notes}</p>
        ) : (
          <p className={styles.todoNotes}>This Todo has no notes.</p>
        )}
      </div>
    </div>
  );
};

export default TodoItem;

const notifyTodoStatus = (todo: Todo, todos: Todo[]) => {
  if (!todo.completed) {
    if (
      todos
        .filter((item: Todo) => item.id !== todo.id)
        .every((item: Todo) => item.completed)
    ) {
      toast("You’ve crushed it!", {
        icon: "🏆",
      });
    } else {
      toast("Good Job!", {
        icon: "👏",
      });
    }
  } else {
    toast("Keep at it when you're ready!", {
      icon: "💪",
    });
  }
};
