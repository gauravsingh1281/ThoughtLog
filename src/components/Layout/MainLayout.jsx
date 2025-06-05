import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import Header from "../Header";
export default function MainLayout() {
  return (
    <main>
      <Header />
      <Outlet />

      <ToastContainer />
    </main>
  );
}
