import { useContext } from "react";
import { TaskContextProvider } from "../../TaskContext/TaskContext";
import CompletedTask from "./CompletedTask";
import AddButton from "./AddButton";
import IncompleteTask from "./IncompleteTask";
// import SingleTask from "./SingleTask";

const TaskList = () => {
    const { tasks } = useContext(TaskContextProvider)
    const taskTitles = ['Completed task', 'Incompleted Task']
    const completedTask = tasks?.filter(task => task.status === 'true')
    const incompleteTask = tasks?.filter(task => task.status === 'false')
    return (
        <div>
            <div className=" flex items-center justify-evenly mt-10">
                {
                    taskTitles.map((title, idx) => <div key={idx}>
                        <h3 className=" text-xl font-semibold">{title}</h3>
                    </div>)
                }

            </div>
            <div className=" flex gap-3 justify-evenly">
                <div>
                    {
                        completedTask?.map((task) => < CompletedTask
                            key={task.id}
                            task={task}
                        />)
                    }
                    <AddButton />
                </div>
                <div>
                    {
                        incompleteTask?.map((task) => < IncompleteTask
                            key={task.id}
                            task={task}
                        />)
                    }
                    <AddButton />
                </div>
            </div>
        </div >
    );
};

export default TaskList;