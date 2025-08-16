// utils/sweetToast.js
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const SweetToast = withReactContent(Swal);

export const showSuccess = (message) => {
  SweetToast.fire({
    toast: true,
    position: "top-end",
    icon: "success",
    title: message,
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  });
};

export const showError = (message) => {
  SweetToast.fire({
    toast: true,
    position: "top-end",
    icon: "error",
    title: message,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });
};