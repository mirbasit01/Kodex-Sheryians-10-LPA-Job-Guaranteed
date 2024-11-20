import React, { useContext, useState } from 'react'
import CompleyTast from '../Task list/CompleyTast'
import { AuthContext } from '../../contex/AuthProvider'



const CreatTask = () => {

  const [userData,setuserData] =  useContext(AuthContext)



  const [taskTitel, settaskTitel] = useState('')
  const [taskDescription, settaskDescription] = useState('')
  const [taskDate, settaskDate] = useState('')
  const [asignTo, settaskAsign] = useState('')
  const [category, settaskCategory] = useState('')
 

  const [Newtask, setNewtask] = useState({})
  const submitHandler = (e)=>{
            e.preventDefault()
            // console.log(taskDescription, taskTitel,taskDate,asignTo,category)

            setNewtask({taskTitel,taskDescription,taskDate,asignTo,category,active:false,newTask:true,failed:false,Completed:false})

            const data =  userData 
            // JSON.parse(localStorage.getItem('employees'))
            // console.log(userData.employees)
            // console.log(data)
               data.forEach(element => {
                if(asignTo == element.firstName){
                  // task ka ander push kra ha new task
                  element.tasks.push(Newtask)
                  element.taskCounts.NewTask = element.taskCounts.NewTask+1

                } 
               });    
               setuserData(data)  
               console.log(data) 
               
              //  localStorage.setItem('employees', JSON.stringify(data))


               settaskTitel('')
               settaskDescription('')
               settaskDate('')
               settaskAsign('')
               settaskCategory('')       
    }
  return (
    
    <div className='p-5 bg-[#1C1C1C] mt-5 rounded'>
    <form  onSubmit={(e)=>{
      submitHandler(e)
    }}
    className='flex flex-wrap w-full  items-start justify-between'>
        <div className='w-1/2'>
        <div>
        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
        <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text"  placeholder='Make a UI Dzine'
        value={taskTitel}
        onChange={(e)=>{
          settaskTitel(e.target.value)
        }}
        />
        </div>
        <div>
     <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
     <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date"
     value={taskDate}
     onChange={(e)=>{
       settaskDate(e.target.value)
     }}
     />
     </div>
     <div>
     <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
     <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name'
     value={asignTo}
     onChange={(e)=>{
       settaskAsign(e.target.value)
     }}
     />
     </div>
     <div>
     <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
     <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev, etc'
     value={category}
     onChange={(e)=>{
       settaskCategory(e.target.value)
     }}
     />
     </div>
        </div>
       
     <div className='w-1/2 flex flex-col items-start'>
     <h3 className='text-sm text-gray-300 mb-0.5'> Descripyion</h3>
     <textarea 
     value={taskDescription}
     onChange={(e)=>{
       settaskDescription(e.target.value)
     }}
     rows="10" cols="30" placeholder='Describe your UI Dzine' className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'/>
     <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Crete Task</button>
     </div>
    
     
    </form>
</div>

  )
}

export default CreatTask