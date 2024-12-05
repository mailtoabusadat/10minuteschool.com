import { toast } from "react-toastify";
type ToastErrorProps = {
  error: unknown;
};
const ToastError: React.FC<ToastErrorProps> = ({ error }) => {
  if (error instanceof Error) {
    return toast.error(error.message);
  } else {
    return toast.error("An unknown error occurred.");
  }
};

export default ToastError;
