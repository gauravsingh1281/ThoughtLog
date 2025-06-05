import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../components/Layout/MainLayout";
import CreateNote from "../components/CreateNote";

export default function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="createThought" element={<CreateNote />} />
      </Route>
    </Routes>
  );
}
