import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Notfound from "./components/Notfound";

let page = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "*", element: <Notfound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={page}></RouterProvider>;
}
