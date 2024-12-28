import { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";
export type Todo = {
  id: number;
  title: string;
  notes: string;
  completed: boolean;
};

const TodoListData: Todo[] = [
  {
    id: 1,
    title: "Complete project documentation",
    notes: "Include API specs and deployment guide",
    completed: false,
  },
  {
    id: 2,
    title: "Schedule team meeting",
    notes: "Discuss Q4 roadmap and priorities",
    completed: true,
  },
  {
    id: 3,
    title: "Update dependencies",
    notes: "Check for security patches and new features",
    completed: false,
  },
];
const TodoList: React.FC = () => {
  const [todos] = useState<Todo[]>(TodoListData);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [activeId, setActiveId] = useState<number | null>(null);
  const onExpand = (id: number): void => {
    if (id === expandedId) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };
  const onActive = (id: number): void => {
    if (id === activeId) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  };
  return (
    <ul className={styles.todoList}>
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          todo={item}
          expandedId={expandedId}
          expand={onExpand}
          activeId={activeId}
          active={onActive}
        />
      ))}
    </ul>
  );
};
export default TodoList;
