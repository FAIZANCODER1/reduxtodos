import React from 'react'
import { useState } from 'react'
import {Todoadd,Tododel,Todoremove} from './action/index'
import { useSelector ,useDispatch} from 'react-redux'
const Todo = () => {

  const [first, setfirst] = useState() 
  const list= useSelector((state)=> state.todoreducers.list)
  const dispatch =useDispatch()
  return (
    <div>
<div className='container h-screen flex items-center justify-center bg-purple-900 '>
<div className='container-box  text-center  bg-transparent'>
    <h1 className='font-bold  text-3xl mb-5 text-white'>Add Your Watchlist</h1>
    <div className='bg-white'>
    <input type="text" placeholder='Add items..' 
    value={first} className="w-96  py-2 ml-1 border-none outline-none" 
    onChange={(event)=>{setfirst(event.target.value)}}
    />
    <i className="fa fa-plus add-btn text-2xl" onClick={()=>{
    dispatch(Todoadd(first),setfirst(''))
    }}></i>
    
    </div>
    <div className='showitem '>
    {
list.map((elem)=>{
  return(
<div className='eachitm flex justify-between bg-purple-500 mt-2 py-3 text-white' key={elem.id}>
<h3>{elem.data}</h3>
<i className='far fa-trash-alt add-btn hover:text-red-500 hover:text-xl ' title='delete item' onClick={()=>dispatch(Tododel(elem.id))}></i>
      </div>
  )
})

}</div>
<div className='showitems'>
  <button className='btn ' data-sm-link-text="remove all" className="bg-purple-500 px-2 py-2 border border-1 rounded-md mt-2" onClick={()=> dispatch(Todoremove())}>
    <span>check list</span>
  </button>
   </div>
     </div>
</div>
        
    </div>
  )
}

export default Todo