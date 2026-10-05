import React, { useState } from 'react'
import { RiDeleteBin7Fill } from "react-icons/ri";
import { LuNotebookPen } from "react-icons/lu";
import axios from 'axios';
import toast from 'react-hot-toast';
import Delmodel from './Delmodel';
import { Link } from 'react-router-dom';


const Card = ({ title, id, getAll }) => {
    const[delModel,setdelmodel]=useState(false)
    const[todotoDel,settodoDel]=useState(null)
    function hendeldelmodel(id) {
        setdelmodel(true)
        settodoDel(id)
    }
    function canceldelmodel() {
        setdelmodel(false)
        settodoDel(null)
    }
    
     async function confirmDel() {
        console.log(id)
        const api = await axios.delete(`http://localhost:8001/todo/delete/${todotoDel}`)
        console.log(api)
        toast.success(api.data.message)
        getAll()
    }

    return (
        <div className=' my-1 flex justify-center items-center gap-2 w-[25%] m-auto'
        >
            
            <div className='w-[70%] bg-violet-200 text-xl p-2'>{title}</div>
            <div className='w-[25%] p-2 flex'>
                <Link to={`/update/${id}`}>
                <button className='text-xl p-2 bg-green-200 me-2'><LuNotebookPen /></button>
            </Link>
                
                <button className='text-xl p-2 bg-red-300' onClick={()=>hendeldelmodel(id)}><RiDeleteBin7Fill /></button>
                {delModel && <Delmodel canceldelmodel={canceldelmodel} confirmDel={confirmDel}/>}
            </div>
        </div>
    )
}

export default Card