import React from 'react'

function TaskListNumber({data}) {
  return (
    <div className='flex mt-10 justify-between gap-5  screen'>
  <div className='h-40 w-[45%] py-6 px-9 rounded bg-red-400 '>
  <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
  <h3 className='text-xl font-medium'>New Task</h3>
  </div>
  <div className='h-40 w-[45%] py-6 px-9 rounded bg-blue-400 '>
  <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
  <h3 className='text-xl font-medium'>Completed Task</h3>
  </div>
  <div className='h-40 w-[45%]  py-6 px-9 rounded bg-yellow-400 '>
  <h2 className='text-3xl font-semibold text-black'>{data.taskCounts.active}</h2>
  <h3 className='text-xl font-medium text-black'>Accepted Task</h3>
  </div>
  <div className='h-40 w-[45%] py-6 px-9 rounded bg-green-400 '>
  <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
  <h3 className='text-xl font-medium'>Failed Task</h3>
  </div>
    </div>
  )
}

export default TaskListNumber