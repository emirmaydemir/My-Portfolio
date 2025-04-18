"use client"; // Sadece istemci bileşeni olarak kullanıldığını belirtir

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Stil dosyasını import et

const ToastNotifications = () => {
  return <ToastContainer />;
};

export default ToastNotifications;
