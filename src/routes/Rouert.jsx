import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddTask from "../pages/AddTask/AddTask";
import UpdateTask from "../pages/UpdateTask/UpdateTask";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/addTask',
                element: <AddTask />
            },
            {
                path: '/updateTask',
                element: <UpdateTask />
            }
        ]
    }
])