
const TaskList = () => {
    const taskTitles = ['Completed task', 'Incompleted Task']
    return (
        <div className=" flex items-center justify-evenly mt-10">
            {
                taskTitles.map((title, idx) => <div key={idx}>
                    <h3 className=" text-xl font-semibold">{title}</h3>
                </div>)
            }
        </div>
    );
};

export default TaskList;