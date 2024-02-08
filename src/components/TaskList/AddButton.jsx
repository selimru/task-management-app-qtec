import AddTask from "../../pages/AddTask/AddTask";

const AddButton = () => {
    return (
        <div className=" flex justify-center mt-3">
            <button>
                <button className="btn bg-gray-400 px-3 py-2 rounded-sm hover:text-white" onClick={() => document.getElementById('my_modal_1').showModal()}>Add Task</button>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <AddTask />
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </button>
        </div>
    );
};

export default AddButton;