import { RiDeleteBin6Fill } from "react-icons/ri";


function Item({task, onDelete}){

    return (
        <div className="flex items-center gap-2">
            <div className="flex justify-between items-center py-1 px-2 border-[#737373] border-2 rounded-md mt-2 w-[270px]">
                <span className="text-white text-[13px]">{task}</span>
            </div>
            <RiDeleteBin6Fill color="white" size="20" className="cursor-pointer mt-2"
                onClick={onDelete}
            />
        </div>
    )
}

export default Item