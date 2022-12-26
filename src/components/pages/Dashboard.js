import React from 'react'
import { useNavigate } from 'react-router-dom'
const Dashboard = () => {
  let navigate = useNavigate()
  let data={
    'name':"Nikhil"
  }
  return (
    <>
        <h1>Dashboard page</h1>

        {/* useNavigate Hook */}
        <button onClick={()=> { navigate("/logout",{state:data})}}>LogOut</button>

    </>
  )
}

export default Dashboard