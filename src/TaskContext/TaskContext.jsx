import { createContext, useEffect, useState } from "react";

export const TaskContextProvider = createContext(null)
const TaskContext = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [tasks, setTasks] = useState([])
    const [isEditing, setIsEditing] = useState(false);

    // task fetching from local storage
    useEffect(() => {
        const allTask = JSON.parse(localStorage.getItem('tasks'))
        setTasks(allTask)
        setLoading(false)
    }, [])

    // toggle function for complettion task or not
    const toggleTask = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, status: !task.status } : task
            )
        );
    };

    // task edit function
    const handleEditTask = (taskId, newText, pri) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, taskName: newText, priority: pri } : task
            )
        );
    };

    // context values
    const value = {
        loading,
        tasks,
        setTasks,
        toggleTask,
        handleEditTask,
        isEditing,
        setIsEditing

    }
    return (
        <TaskContextProvider.Provider value={value}>
            {children}
        </TaskContextProvider.Provider>
    );
};

export default TaskContext;