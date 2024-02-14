import { createContext, useEffect, useState } from "react";

export const TaskContextProvider = createContext(null)
const TaskContext = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [tasks, setTasks] = useState([])

    // task fetching from local storage
    useEffect(() => {
        const allTask = JSON.parse(localStorage.getItem('tasks'))
        setTasks(allTask)
        setLoading(false)
    }, [])

    // Task add function
    const handleAddTask = (task) => {
        // task data storing in local storage and set
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || []
        const updatedTasks = [...storedTasks, task];
        localStorage.setItem('tasks', JSON.stringify(updatedTasks))
        e.target.reset();
        setTasks(updatedTasks)
    };
    const toggleTask = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, status: !task.status } : task
            )
        );
    };

    const handleEdit = (id) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, isEditing: !task.isEditing } : task))
    };

    // task edit function
    const handleEditTask = (taskId, taskName, priority) => {
        const updatedTasks = tasks.map(task =>
            task.id === taskId ?
                { ...task, taskName, priority, isEditing: !task.isEditing }
                :
                task
        );
        setTasks(updatedTasks)
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const updatedStoredTasks = storedTasks.map(task =>
            task.id === taskId ?
                { ...task, taskName, priority }
                :
                task
        );
        localStorage.setItem('tasks', JSON.stringify(updatedStoredTasks));
    };

    // delete
    const handleDeleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }
    // context values
    const value = {
        loading,
        tasks,
        setTasks,
        handleAddTask,
        toggleTask,
        handleEditTask,
        handleEdit,
        handleDeleteTask

    }
    return (
        <TaskContextProvider.Provider value={value}>
            {children}
        </TaskContextProvider.Provider>
    );
};

export default TaskContext;