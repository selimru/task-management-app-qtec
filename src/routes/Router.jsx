import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import UpdateTask from "../components/UpdateTask/UpdateTask";
import AddTask from "../components/AddTask/AddTask";
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