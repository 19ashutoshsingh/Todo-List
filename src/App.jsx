import { FaPlus } from "react-icons/fa";
import Item from "./Components/Item";
import { useState } from "react";
import "./App.css"

function App() {
  const [task, setTask] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const handleAddTask = ()=>{
    if(taskInput.trim() !== ""){
      setTask([...task, taskInput])
      setTaskInput("");
    }
  }

  const handleDeleteTask = (index)=>{
    const newTask = task.filter((_, taskIndex) => taskIndex !== index);
    setTask(newTask);
  }

  return (
    <>
      <div className="flex justify-center pt-20 h-screen bg-[#323232]">
        <div className="flex flex-col justify-start border-2 border-white py-8 px-5 rounded-lg h-[450px] overflow-scroll hide-scrollbar">
          <div className="flex justify-center items-center gap-2">
            <input type="text" placeholder="Enter your task" className="rounded-md px-2 py-1 border-none" 
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
            />
            <FaPlus className="bg-[#2B6CBC] px-1.5 py-1.5 rounded-full cursor-pointer" size="28" color="white"
              onClick={handleAddTask}
            />
          </div>
          <div className="mt-4 w-[250px] text-white text-xl font-semibold border-b border-b-[#737373]">
            TODO
          </div>
          <Item task="Task1" />

          {task.map((task, index) =>(
            <Item 
              key={index}
              task={task}
              onDelete={()=> handleDeleteTask(index)}
            />
          ))}

        </div>
      </div>
    </>
  )
}
// #737373
export default App
