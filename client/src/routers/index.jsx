import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import Messages from "../pages/Messages";
import Tasks from "../pages/Tasks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      //   {
      //     path: "",
      //     element: <HomePage />,
      //   },
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/tasks",
        element: <Tasks />,
      },
    ],
  },
]);

export default router;
