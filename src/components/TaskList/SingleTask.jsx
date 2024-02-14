import { useContext } from "react";
import { TaskContextProvider } from "../../TaskContext/TaskContext";
import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

const SingleTask = ({ task }) => {
    const { taskName, priority, id, status } = task
    const { toggleTask, handleEdit, handleDeleteTask } = useContext(TaskContextProvider)

    return (
        <div className="bg-gray-300 w-full lg:w-[50%] md:w-[80%] p-5 rounded-md text-start">
            <div className=" flex flex-col md:flex-col lg:flex-row items-center justify-between space-y-5 lg:space-y-0">
                <div>
                    <p className={` cursor-pointer ${status ? 'line-through' : 'none'}`} >
                        <p>Task: <span className=" font-semibold">{taskName}</span></p>
                    </p>
                    <p><span className={`${priority === 'low' ? 'text-red-500' : priority === 'medium' ? 'text-green-500' : ' text-blue-400'}`}>{priority}</span>
                    </p>
                    <p>{status ? 'Completed' : 'Not completed'}</p>

                </div >
                <div className=" flex items-center justify-between gap-10">
                    <div>
                        <button className=" btn btn-danger border bg-gray-800 text-white py-2 px-3 rounded-md" title="Click to complete task" onClick={() => toggleTask(id)}>Mark as completed</button>
                    </div>
                    <div>
                        <button className=" text-2xl" title="Edit task" onClick={() => handleEdit(id)} ><FaEdit /></button>
                    </div>
                    <div>
                        <button className=" text-2xl" title="Delete task" onClick={() => handleDeleteTask(id)}><FaTrash /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleTask;