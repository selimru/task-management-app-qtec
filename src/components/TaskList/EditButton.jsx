// import { FaEdit } from "react-icons/fa";
// import UpdateTask from "../UpdateTask/UpdateTask";
// import { useContext } from "react";
// import { TaskContextProvider } from "../../TaskContext/TaskContext";

// const EditButton = ({ taskName, priority, id, status }) => {
//     const { isEditing, setIsEditing } = useContext(TaskContextProvider)

    
//     return (
//         <div className=" flex justify-center">
//             <button>
//                 <button title="Edit task" className="btn text-2xl" onClick={() => { document.getElementById('my_modal_2').showModal(), handleEdit }}><FaEdit /></button>
//                 <dialog id="my_modal_2" className="modal">
//                     <div className="modal-box">
//                         <UpdateTask id={id} status={status} taskName={taskName} priority={priority} />
//                         <div className="modal-action">
//                             <form className=" w-[300px] p-5" method="dialog">
//                                 <button className="btn bg-gray-300 px-5 py-2 rounded-md hover:text-white">Close</button>
//                             </form>
//                         </div>
//                     </div>
//                 </dialog>
//             </button>
//         </div>
//     );
// };

// export default EditButton;