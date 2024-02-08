import { useContext } from "react";
import { TaskContextProvider } from "../../TaskContext/TaskContext";
import { Link } from "react-router-dom";
import EditButton from "./EditButton";

const CompletedTask = ({ task }) => {
    const { tasks, setTasks } = useContext(TaskContextProvider)
    const { taskName, priority, id, status } = task

    const handleDeleteTask = () => {
        const deleteTask = tasks.filter(task => task.id !== id)
        setTasks(deleteTask)
    }
    return (
        <div className="w-[150px] lg:w-[200px] bg-gray-100 rounded-md p-4 my-3 text-center">
            <div className="  ">
                <p>Task: {taskName}</p>
                <p className={`${priority === 'low' ? 'text-red-500' : priority === 'medium' ? 'text-gray-300' : ' text-blue-400'}`}>
                    Priority: {priority}
                </p>
            </div >
            <div className=" flex justify-evenly mt-3">
                <button onClick={handleDeleteTask}>Delete</button>
                <button>
                    <EditButton id={id} status={status} taskName={taskName} priority={priority} />
                </button>
            </div>
        </div>
    );
};

export default CompletedTask;