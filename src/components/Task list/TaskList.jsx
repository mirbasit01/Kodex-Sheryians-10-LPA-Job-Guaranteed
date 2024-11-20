import React from 'react'
import AccaptTask from './AccaptTask'
import NewTask from './NewTask'
import CompleyTast from './CompleyTast'
import FailedTask from './FailedTask' 



function TaskList({data}) {
    // console.log(data)
  return (
    <div id='taskList' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5  flex-nowrap py-5 w-full  mt-10'>
       {data.tasks.map((elem, index)=>{
        if(elem.active){
            return <AccaptTask key={index}  data={elem} />
        }
        if(elem.newTask){
            return <NewTask  key={index} data={elem}/>
        }
        if(elem.completed){
            return <CompleyTast key={index} data={elem}/>
        }
        if(elem.failed){
            return <FailedTask  key={index} data={elem}/>
        }
       })}
       
    </div>
  )
}

export default TaskList