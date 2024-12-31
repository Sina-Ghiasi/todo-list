import { useState } from "react";
import styles from "./Layout.module.css";
import Modal from "../Modal/Modal";
import AddTodo from "../AddTodo/AddTodo";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className={styles.layout}>
      <ThemeToggle />
      <div className={styles.todoListContainer}>
        <h1 className={styles.todoTitle}>Todo List</h1>

        {children}
        <button
          className={styles.addTodoButton}
          onClick={() => setIsModalOpen(true)}
        >
          Add new Todo
        </button>
        <Modal title="Add Todo" isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
          <AddTodo setIsOpen={setIsModalOpen} />
        </Modal>
      </div>
    </div>
  );
};
export default Layout;
