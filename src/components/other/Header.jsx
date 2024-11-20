import React from 'react'

const Header = (props) => {

  const LogoutUser = () => {

    localStorage.setItem('loggedInUser', '')
    props.changUser('')
          
    // window.location.reload()

  }
  return (
    <div className='flex items-end justify-between'>
    <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>firstName 👋</span> </h1>
    <button onClick={LogoutUser} className='bg-red-600 text-lg  font-medium text-white py-2 px-5 
    rounded-small'>Log Out</button>
</div>
  )
}

export default Header