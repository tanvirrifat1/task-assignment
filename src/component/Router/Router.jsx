import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Home from "../home/Home";
import AddTask from "../AddTask/AddTask";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/task",
        element: <AddTask />,
      },
    ],
  },
]);
