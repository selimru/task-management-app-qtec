import { useContext, useEffect, useState } from "react";
import { TaskContextProvider } from "../../TaskContext/TaskContext";
import AddButton from "./AddButton";
import SingleTask from "./SingleTask";
import UpdateTask from "../UpdateTask/UpdateTask";

const TaskList = () => {
    const { tasks, loading } = useContext(TaskContextProvider)
    const [filteredTasks, setFilteredTasks] = useState([])
    const [filteredPriority, setFilteredPriority] = useState('')

    // completed tasks filtered by status
    const completedTask = filteredTasks?.filter(task => task.status)

    // tasks data set handling asyncronouslys
    useEffect(() => {
        setFilteredTasks(tasks);
    }, [tasks]);

    // set tasks filtered by priority
    const handleFilteringByPriority = (priority) => {
        setFilteredPriority(priority)
        const filteredTasksByPriority = tasks.filter(task => task.priority === priority);

        // Update the state with the filtered tasks
        setFilteredTasks(filteredTasksByPriority);
    }

    return (
        <div className="max-w-6xl mx-auto px-3 bg-gray-50 p-5">
            <section className=" flex justify-evenly my-10">
                <h4 className=" text-gray-500 font-semibold text-lg">Total Task: {tasks?.length}</h4>
                <h4 className=" text-gray-500 font-semibold text-lg">Completed Task: {completedTask?.length}</h4>
            </section>
            <div className=" flex justify-center">
                <select className=" bg-gray-300 p-3 rounded-md text-gray-500" onChange={(e) => {
                    handleFilteringByPriority(e.target.value)
                }} value={filteredPriority} >
                    <option disabled value="">Filter By Priority</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>
            <h3 className=" text-gray-500 font-semibold text-lg text-center my-5">Tasks List</h3>
            <AddButton />
            {
                loading ? <p className=" text-center">Loading...</p>
                    :
                    <div className=" flex justify-between flex-col items-center gap-5">
                        {
                            filteredTasks?.map((task) => task.isEditing ?
                                <UpdateTask
                                    key={task.id}
                                    taskName={task.taskName}
                                    id={task.id}
                                    priority={task.priority} />
                                :
                                < SingleTask
                                    key={task.id}
                                    task={task}
                                />)
                        }

                    </div>
            }
        </div >
    );
};

export default TaskList;