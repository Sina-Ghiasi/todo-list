import { MdClose } from "react-icons/md";
import styles from "./Modal.module.css";

type ModalProps = {
  children: React.ReactNode;
  title: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal: React.FC<ModalProps> = ({
  children,
  title,
  isOpen,
  setIsOpen,
}) => {
  if (!isOpen) return null;
  return (
    <>
      <div className={styles.backdrop} onClick={() => setIsOpen(false)}></div>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{title}</h2>
          <button onClick={() => setIsOpen(false)}>
            <MdClose className={styles.modalCloseIcon} />
          </button>
        </div>
        <div className={styles.modalBody}> {children}</div>
      </div>
    </>
  );
};
export default Modal;
