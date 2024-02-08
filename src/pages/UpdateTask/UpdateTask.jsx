import { useContext, useState } from "react";
import { TaskContextProvider } from "../../TaskContext/TaskContext";
const UpdateTask = ({ taskName, priority, id, status }) => {
    console.log(id);
    const [updateTaskName, setUpdateTaskName] = useState('')
    const [updatePriority, setUpdatePriority] = useState('')
    const [updateStatus, setUpdateStatus] = useState('')
    const { setTasks } = useContext(TaskContextProvider)

    const handleEditTask = (e) => {
        e.preventDefault()
        if (!updateTaskName) {
            return alert('please input task')
        }
        if (!updatePriority) {
            return alert('please input priority')
        }
        if (!updateStatus) {
            return alert('please input status')
        } else {
            const updatedTaskData = {
                id: id,
                taskName: updateTaskName,
                priority: updatePriority,
                status: updateStatus
            }

            const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
            console.log(storedTasks);
            const taskIndex = storedTasks.findIndex(task => task.id === id);

            if (taskIndex !== -1) {
                storedTasks[taskIndex] = { ...storedTasks[taskIndex], ...updatedTaskData };
                localStorage.setItem('tasks', JSON.stringify(storedTasks));
                setTasks(storedTasks);
            }
        }

    };
    return (
        <div >
            <div className=" w-[60%] mx-auto bg-slate-100 mt-10 py-5">
                <form onSubmit={handleEditTask}>
                    <div className="space-y-10">
                        <div className=" flex justify-center">
                            <input
                                onChange={(e) => setUpdateTaskName(e.target.value)} defaultValue={taskName}
                                type="text" name="" id="" />
                        </div>
                        <div className=" flex justify-evenly items-center">
                            <select onChange={(e) => setUpdateStatus(e.target.value)} value={updateStatus} defaultValue={status} >
                                <option disabled value="">Select Status</option>
                                <option value={true}>Completed</option>
                                <option value={false}>Incomplete</option>
                            </select>
                            <select onChange={(e) => setUpdatePriority(e.target.value)} value={updatePriority} defaultValue={priority} >
                                <option disabled value="">Select Priority</option>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                        <div className=" flex justify-center">
                            <button type="submit">Edit Task</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateTask;