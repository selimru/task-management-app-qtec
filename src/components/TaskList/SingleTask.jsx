import { useContext } from "react";
import { TaskContextProvider } from "../../TaskContext/TaskContext";
import { FaTrash } from "react-icons/fa6";
import UpdateTask from "../UpdateTask/UpdateTask";
import { FaEdit } from "react-icons/fa";

const SingleTask = ({ task }) => {
    const { setIsEditing, toggleTask, setTasks, isEditing } = useContext(TaskContextProvider)
    const { taskName, priority, id, status } = task

    // handle delete task
    const handleDeleteTask = () => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const updatedTasks = storedTasks.filter((task) => task.id !== id);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        setTasks(updatedTasks)
    }

    // handle for editing if edit is needed
    const handleEdit = () => {
        setIsEditing(true);
        console.log(isEditing);
    };

    return (
        <div className="bg-gray-300 w-full lg:w-[50%] md:w-[50%] p-5 rounded-md text-start">
            {!isEditing ?
                <div >

                    <div className=" flex items-center justify-between">
                        <div>
                            <p className={` cursor-pointer ${status ? 'line-through' : 'none'}`} >
                                {taskName}
                            </p>
                            <p>Priority: <span className={`${priority === 'low' ? 'text-red-500' : priority === 'medium' ? 'text-green-500' : ' text-blue-400'}`}>{priority}</span>
                            </p>
                            <p>{status ? 'Completed' : 'Not completed'}</p>

                        </div >
                        <div className=" flex items-center justify-between gap-10">
                            <div>
                                <button onClick={() => toggleTask(task.id)}>Mark as completed</button>
                            </div>
                            <div>
                                <button onClick={() => handleEdit(id)} ><FaEdit /></button>
                            </div>
                            <div>
                                <button className=" text-2xl" title="Delete task" onClick={handleDeleteTask}><FaTrash /></button>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <UpdateTask taskName={taskName} id={id} priority={priority} />
            }
        </div>
    );
};

export default SingleTask;