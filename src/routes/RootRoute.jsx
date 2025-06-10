import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import Home from "../pages/Home";
import CreateNote from "../components/CreateNote";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import RootLayout from "../layout/RootLayout";

export default function RootRoute() {
  const rootRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="aboutUs" element={<About />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="createThought" element={<CreateNote />} />
      </Route>
    )
  );
  return <RouterProvider router={rootRouter} />;
}
