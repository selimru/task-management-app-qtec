
const IncompleteTask = ({ task }) => {
    const { taskName, priority } = task
    return (
        <div className="w-[150px] lg:w-[200px]">
            <div className=" bg-gray-100 rounded-md p-4 my-3 ">
                <p>Task: {taskName}</p>
                <p className={`${priority === 'low' ? 'bg-red' : priority === 'medium' ? 'bg-green-500' : ' bg-blue-400'}`}>
                    Priority: {priority}
                </p>
            </div >
        </div>
    );
};

export default IncompleteTask;