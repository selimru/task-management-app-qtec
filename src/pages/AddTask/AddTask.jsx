import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
const AddTask = () => {
    const [taskName, setTaskName] = useState('')
    const [priority, setPriority] = useState('')
    const [status, setStatus] = useState('')
    const navigate = useNavigate()

    const handleAddTask = (e) => {
        e.preventDefault()
        setTaskName('')
        setPriority('')
        setStatus('')
        if (!taskName) {
            return alert('please input task')
        }
        if (!priority) {
            return alert('please input priority')
        }
        if (!status) {
            return alert('please input status')
        } else {
            const taskData = {
                id: uuidv4(),
                taskName: taskName,
                priority: priority,
                status: status
            }

            const storedTasks = JSON.parse(localStorage.getItem('tasks')) || []
            const updatedTasks = [...storedTasks, taskData];
            localStorage.setItem('tasks', JSON.stringify(updatedTasks))
            navigate('/')
            e.target.reset();

        }

    }
    return (
        <div >
            <Link to='/'>Back Task List</Link>
            <div className=" w-[60%] mx-auto bg-slate-100 mt-10 py-5">
                <form onSubmit={handleAddTask}>
                    <div className="space-y-10">
                        <div className=" flex justify-center">
                            <input onChange={(e) => setTaskName(e.target.value)} type="text" name="" id="" />
                        </div>
                        <div className=" flex justify-evenly items-center">
                            <select onChange={(e) => setStatus(e.target.value)} value={status}>
                                <option disabled value="">Select Status</option>
                                <option value="completed">Completed</option>
                                <option value="incomplete">Incomplete</option>
                            </select>
                            <select onChange={(e) => setPriority(e.target.value)} value={priority}>
                                <option disabled value="">Select Priority</option>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                        <div className=" flex justify-center">
                            <button type="submit">Add Task</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTask;