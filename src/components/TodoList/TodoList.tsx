import { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";

export type Todo = {
  id: number;
  title: string;
  notes: string;
  completed: boolean;
};

const TodoList: React.FC = () => {
  const { todos } = useSelector((state: RootState) => state.todos);
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
