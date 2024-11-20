import React from 'react'
import Header from '../other/Header'
import CreatTask from '../other/CreatTask'
import AllTask from '../other/AllTask'


const AdmineDashbord = (props) => {
  return (
    <div className='w-screen h-screen p-10'>
    <Header changUser={props.changUser}/>
    <CreatTask  />
    <AllTask   />

        
    </div>
  )
}

export default AdmineDashbord