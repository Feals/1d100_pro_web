import { toast } from "react-toastify";

export const showSuccessToast = (message) => {
  toast.success(message, {
    position: "top-center",
    autoClose: 5000,
  });
};

export const showErrorToast = (message) => {
  toast.error(message, {
    position: "top-center",
    autoClose: 5000,
  });
};
