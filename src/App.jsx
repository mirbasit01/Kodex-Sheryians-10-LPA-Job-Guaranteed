// import React from 'react';
// import Navbar from './components/Navbar'; // Adjust the path according to your folder structure
// // C:\Users\HP\Desktop\Blockchain-ui\kodex\src\
// import './index.css'; // Ensure the path is correct
// import Main from './components/Main';

// const App = () => {
//   return (
//      <>
//      <Navbar />
//      <Main/>
//      </>
//   );
// };

// export default App;


















import React, { useContext,useEffect,useState, } from 'react'
import Login from './components/Auth/Login'
import EmployDashbord from './components/Dashbord/EmployDashbord'
import AdmineDashbord from './components/Dashbord/AdmineDashbord'
// import { getLocalStorage, setLocalStorage } from './utils/localStorg'
import { AuthContext } from './contex/AuthProvider'
import { jsxs } from 'react/jsx-runtime'
import { data } from 'autoprefixer'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Don't forget to import the CSS for styling


function App() {

 

  
  

  const [user, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const [userData, setuserData] = useContext(AuthContext);
  // console.log(authdata.employees)

  useEffect(() => {
      const loggedInUser = localStorage.getItem("loggedInUser")
      if(loggedInUser){
        const userData  = JSON.parse(loggedInUser)
        setUser(userData.role)
        setloggedInUserData(userData.data)

    }
  }, [])
  
  

  const handelLogin = (email,password)=>{
   if(email == 'admin@me.com' && password == '123'){
    setUser('admin')
    localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}))
   } else if(userData ){
    const employee =  userData.find((e)=>email === e.email && e.password == password)
    if(employee){
      setUser('employee') 
      setloggedInUserData(employee)
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee',}))
    }
   }
    else{
    toast('Invalid Credentials')
   }
  }
  // handelLogin('user@me.com',123);

   
  // const data = useContext=(AuthContext)
  // console.log(data);

  // Logout handler to clear session
  // const handleLogout = () => {
  //   localStorage.removeItem('loggedInUser')
  //   setUser(null)
  //   setloggedInUserData(null)
  // }
  
  return (
     <>
        <ToastContainer
        autoClose={5000}
        style={{ fontSize: 12, fontWeight: 300 }}
        theme="light"
        position="top-right"
      />
     {/* ager user mt ha matlb user khali ha to print krwaodo login */}
 {/* {!user ? <Login handelLogin={handelLogin}/>: ''}
     {user == 'admin' ? <AdmineDashbord/> : <EmployDashbord/>} */}
          {/* Show login page if no user is logged in */}
            {!user && <Login handelLogin={handelLogin} />}
               {/* Show Admin dashboard if logged in as admin */}
             {user === 'admin' && (
               <>
              {toast.success("Welcome Admin!")}
              <AdmineDashbord changUser={setUser} />
               </>
             )}
             {/* handleLogout={handleLogout} */}
                {/* Show Employee dashboard if logged in as employee */}
             {user === 'employee' && (
               <>
              {toast.success("Welcome Employee!")}
              <EmployDashbord changUser={setUser} data={loggedInUserData} />
               </>
             )}
             {/* handleLogout={handleLogout} */}
     </>
  )
}

export default App