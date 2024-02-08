import { createContext, useEffect, useState } from "react";


export const TaskContextProvider = createContext(null)
const TaskContext = ({ children }) => {
    const [tasks, setTasks] = useState([])
    console.log(tasks);
    useEffect(() => {
        const allTask = JSON.parse(localStorage.getItem('tasks'))
        setTasks(allTask)
    }, [])

    const value = {
        tasks,
        setTasks
    }
    return (
        <TaskContextProvider.Provider value={value}>
            {children}
        </TaskContextProvider.Provider>
    );
};

export default TaskContext;