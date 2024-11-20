import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../Task list/TaskList'
import { data } from 'autoprefixer'
function EmployDashbord(props) {
    // console.log(data.fo)
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header   changUser={props.changUser} data={props.data}/>
        <TaskListNumber data={props.data}/>
        <TaskList data={props.data}/>

    </div>
  )
}

export default EmployDashbord