import { useState } from "react";

const AddTask = () => {
    const [task, setTask] = useState('')
    return (
        <div>
            <input type="text" name="" id="" />
            <button>Add Task</button>
        </div>
    );
};

export default AddTask;