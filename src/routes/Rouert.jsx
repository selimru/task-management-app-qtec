import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddTask from "../pages/AddTask/AddTask";
import UpdateTask from "../pages/UpdateTask/UpdateTask";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/addTask',
                element: <AddTask />
            },
            {
                path: '/updateTask/:id',
                element: <UpdateTask />
            }
        ]
    }
])