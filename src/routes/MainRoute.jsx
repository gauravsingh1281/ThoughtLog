import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../components/Layout/MainLayout";
import CreateNote from "../components/CreateNote";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";

export default function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="aboutUs" element={<About />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="createThought" element={<CreateNote />} />
      </Route>
    </Routes>
  );
}
