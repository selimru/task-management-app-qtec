import { FaPlus } from "react-icons/fa";
import AddTask from "../AddTask/AddTask";

const AddButton = () => {
    return (
        <div className=" flex justify-center my-3 ">
            <button>
                <button title="Add task" className="btn bg-gray-300 px-10 py-4 rounded-sm hover:text-white" onClick={() => document.getElementById('my_modal_1').showModal()}><FaPlus /></button>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <AddTask />
                        <div className="modal-action">
                            <form className=" w-[300px] p-5" method="dialog">
                                <button className="btn bg-gray-300 px-5 py-2 rounded-md hover:text-white">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </button>
        </div>
    );
};

export default AddButton;