import { useContext, useState } from "react";
import { TaskContextProvider } from "../../TaskContext/TaskContext";
const UpdateTask = ({ taskName, priority, id }) => {
    const [updateTaskName, setUpdateTaskName] = useState(taskName)
    const [updatePriority, setUpdatePriority] = useState(priority)
    const { handleEditTask } = useContext(TaskContextProvider)


    const handleSave = (e) => {
        e.preventDefault()
        handleEditTask(id, updateTaskName, updatePriority);
    };
    return (
        <div >
            <div className="mx-auto py-5">
                <form onSubmit={handleSave}>
                    <div className="space-y-10">
                        <div className=" flex justify-center">
                            <input
                                className="border border-gray-500 p-3 rounded-md"
                                onChange={(e) => setUpdateTaskName(e.target.value)} value={updateTaskName}
                                type="text" name="" id="" />
                        </div>
                        <div className=" flex justify-evenly items-center">
                            <select className="bg-gray-200 p-3 rounded-md text-gray-500" onChange={(e) => setUpdatePriority(e.target.value)} value={updatePriority}  >
                                <option disabled value="">Select Priority</option>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                        <div className=" flex justify-center">
                            <button className="bg-gray-500 px-5 py-2 rounded-md hover:text-white" type="submit">Edit Task</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateTask;