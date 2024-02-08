import { useContext } from "react";
import { TaskContextProvider } from "../../TaskContext/TaskContext";
import CompletedTask from "./CompletedTask";
import AddButton from "./AddButton";
// import SingleTask from "./SingleTask";

const TaskList = () => {
    const { tasks } = useContext(TaskContextProvider)
    const taskTitles = ['Completed task', 'Incompleted Task']
    const completedTask = tasks?.filter(task => task.status === 'completed')
    const incompleteTask = tasks?.filter(task => task.status === 'incomplete')
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
                        incompleteTask?.map((task) => < CompletedTask
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