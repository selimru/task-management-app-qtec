import UpdateTask from "../../pages/UpdateTask/UpdateTask";

const EditButton = ({ taskName, priority, id, status }) => {


    return (
        <div className=" flex justify-center">
            <button>
                <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>Edit</button>
                <dialog id="my_modal_2" className="modal">
                    <div className="modal-box">
                        <UpdateTask id={id} status={status} taskName={taskName} priority={priority} />
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

export default EditButton;