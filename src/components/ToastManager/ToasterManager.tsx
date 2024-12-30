import { useEffect } from "react";
import toast, { useToasterStore, Toaster } from "react-hot-toast";

type ToasterManagerProps = {
  maxVisibleToasts: number;
};

const ToasterManager: React.FC<ToasterManagerProps> = ({
  maxVisibleToasts,
}) => {
  const { toasts } = useToasterStore();

  useEffect(() => {
    toasts
      .filter((t) => t.visible)
      .filter((_, i) => i >= maxVisibleToasts)
      .forEach((t) => toast.dismiss(t.id));
  }, [toasts, maxVisibleToasts]);

  return <Toaster />;
};

export default ToasterManager;
