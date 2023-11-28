import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Home from "../home/Home";
import AddTask from "../AddTask/AddTask";
import EditTask from "../EditTask/EditTask";

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
      {
        path: "/edit/:id",
        element: <EditTask />,
      },
    ],
  },
]);
