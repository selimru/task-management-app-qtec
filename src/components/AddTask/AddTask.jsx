import { useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { TaskContextProvider } from "../../TaskContext/TaskContext";
const AddTask = () => {
    const [taskName, setTaskName] = useState('')
    const [priority, setPriority] = useState('')
    const [status, setStatus] = useState(false)
    // context data
    const { setTasks, isEditing } = useContext(TaskContextProvider)

    // task add function
    const handleAddTask = (e) => {
        e.preventDefault()
        setTaskName('')
        setPriority('')
        if (!taskName) {
            return alert('please input task')
        }
        else if (!priority) {
            return alert('please input priority')
        } else {
            const taskData = {
                id: uuidv4(),
                taskName: taskName,
                priority: priority,
                status: status,
                isEditing: isEditing
            }
            // task data storing in local storage and set
            const storedTasks = JSON.parse(localStorage.getItem('tasks')) || []
            const updatedTasks = [...storedTasks, taskData];
            localStorage.setItem('tasks', JSON.stringify(updatedTasks))
            e.target.reset();
            setTasks(updatedTasks)
        }

    }
    return (
        <div >
            <div className="mx-auto bg-white py-5">
                <form onSubmit={handleAddTask}>
                    <div className="space-y-10">
                        <div className=" flex justify-center">
                            <input className="border border-gray-500 p-3 rounded-md" onChange={(e) => setTaskName(e.target.value)} type="text" name="" id="" placeholder="Input task" />
                        </div>
                        <div className=" flex justify-evenly items-center">
                            <select className="bg-gray-200 p-3 rounded-md text-gray-500" onChange={(e) => setPriority(e.target.value)} value={priority}>
                                <option disabled value="">Select Priority</option>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                        <div className=" flex justify-center">
                            <button className="bg-gray-300 px-5 py-2 rounded-md hover:text-white" type="submit">Add Task</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTask;