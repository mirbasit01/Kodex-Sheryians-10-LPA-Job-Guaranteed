import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployDashbord from './components/Dashbord/EmployDashbord'
import AdmineDashbord from './components/Dashbord/AdmineDashbord'
import { AuthContext } from './contex/AuthProvider'

function App() {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const authdata = useContext(AuthContext)

  useEffect(() => {
    // Check if a user is already logged in
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setloggedInUserData(userData.data)
    }
  }, [])

  const handelLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      // If admin login
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (authdata) {
      // If employee login
      const employee = authdata.employees.find((e) => e.email === email && e.password === password)
      if (employee) {
        setUser('employee')
        setloggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      }
    } else {
      alert('Invalid Credentials')
    }
  }

  // Logout handler to clear session
  const handleLogout = () => {
    localStorage.removeItem('loggedInUser')
    setUser(null)
    setloggedInUserData(null)
  }

  return (
    <>
      {/* Show login page if no user is logged in */}
      {!user && <Login handelLogin={handelLogin} />}
      
      {/* Show Admin dashboard if logged in as admin */}
      {user === 'admin' && <AdmineDashbord handleLogout={handleLogout} />}
      
      {/* Show Employee dashboard if logged in as employee */}
      {user === 'employee' && <EmployDashbord data={loggedInUserData} handleLogout={handleLogout} />}
    </>
  )
}

export default App



























import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployDashbord from './components/Dashbord/EmployDashbord'
import AdmineDashbord from './components/Dashbord/AdmineDashbord'
import { AuthContext } from './contex/AuthProvider'

function App() {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const authdata = useContext(AuthContext)

  useEffect(() => {
    // Check if a user is already logged in by reading from localStorage
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setloggedInUserData(userData.data)
    }
  }, [])

  const handelLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      // If admin login, set user as admin
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (authdata) {
      // If employee login, find the employee in authdata and set the state
      const employee = authdata.employees.find((e) => e.email === email && e.password === password)
      if (employee) {
        setUser('employee')
        setloggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      }
    } else {
      alert('Invalid Credentials')
    }
  }

  // Logout handler to clear session
  const handleLogout = () => {
    localStorage.removeItem('loggedInUser')
    setUser(null)
    setloggedInUserData(null)
  }

  return (
    <>
      {/* Show login page if no user is logged in */}
      {!user && <Login handelLogin={handelLogin} />}
      
      {/* Show Admin dashboard if logged in as admin */}
      {user === 'admin' && <AdmineDashbord handleLogout={handleLogout} />}
      
      {/* Show Employee dashboard if logged in as employee */}
      {user === 'employee' && <EmployDashbord data={loggedInUserData} handleLogout={handleLogout} />}
    </>
  )
}

export default App
















import React, { useState } from 'react';

const CreatTask = () => {
  // Hooks ko yahan component ke andar define karein
  const [taskTitel, settaskTitel] = useState('');
  const [taskDescription, settaskDescription] = useState('');
  const [taskDate, settaskDate] = useState('');
  const [asignTo, settaskAsign] = useState('');
  const [category, settaskCategory] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(taskDescription, taskTitel, taskDate, asignTo, category);
  };

  return (
    <div className='p-5 bg-[#1C1C1C] mt-5 rounded'>
      <form
        onSubmit={submitHandler}
        className='flex flex-wrap w-full items-start justify-between'
      >
        <div className='w-1/2'>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
            <input
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
              type='text'
              placeholder='Make a UI Dzine'
              value={taskTitel}
              onChange={(e) => settaskTitel(e.target.value)}
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
              type='date'
              value={taskDate}
              onChange={(e) => settaskDate(e.target.value)}
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
            <input
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
              type='text'
              placeholder='employee name'
              value={asignTo}
              onChange={(e) => settaskAsign(e.target.value)}
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
            <input
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
              type='text'
              placeholder='design, dev, etc'
              value={category}
              onChange={(e) => settaskCategory(e.target.value)}
            />
          </div>
        </div>

        <div className='w-1/2 flex flex-col items-start'>
          <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => settaskDescription(e.target.value)}
            rows='10'
            cols='30'
            placeholder='Describe your UI Dzine'
            className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'
          />
          <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatTask;
