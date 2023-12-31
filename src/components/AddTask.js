import React,{useState} from 'react'
//react icons
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {IoAddCircleOutline} from 'react-icons/io5'

//redux
import { useDispatch } from 'react-redux'
import { Add } from '../redux/AddTask'

const AddTask = ({setAddTaskModal}) => {
  const [inputText,setInputText]=useState({})
  const dispatch = useDispatch()
  const closeHandle = ()=>{
    setAddTaskModal(false);
  }
  const inputHandle = ()=> (e)=>{
    const {value}= e.target;
    setInputText(value)
  }

  const addTask =()=>{
    dispatch(Add(inputText))
    setAddTaskModal(false);
  }     

  return (
    <div className='w-full h-screen bg-black/30 absolute flex justify-center items-center'>
        <div className='w-[400px] bg-white rounded'>
            <div className='flex flex-col space-y-4 p-4'>
                <div className='flex justify-between'>
                    <h1 className='text-xl font-semibold'>Add List</h1>
                </div>
                <input type="text" placeholder='Item Name' className='w-full outline-0 p-2 bg-gray-100' autoFocus 
                onChange={inputHandle()}/>
                <div className='flex justify-center items-center'>
                <button
               
               onClick={()=> addTask()}
               className='w-28 p-2 rounded-md flex justify-center items-center space-x-1 bg-yellow-400 m-2'>
                   <IoAddCircleOutline size={"1.1rem"}/>
                   <span>Add</span>
               </button>
               <button 
                 onClick={()=> closeHandle()} 
                 className='w-28 p-2 rounded-md flex justify-center items-center space-x-1 bg-red-500'>
                   <AiOutlineCloseCircle/>
                   <span>Cancel</span>
               </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddTask