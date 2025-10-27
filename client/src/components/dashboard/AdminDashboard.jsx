import React from 'react'
import Header from '../subComponent/Header'
import "./Admindashboard.css"
import CreateTask from '../subComponent/CreateTask'
import AllTask from '../subComponent/AllTask'

function AdminDashboard() {
  return (
    <div className='admindashboard-container'>
      <Header></Header>
       <CreateTask/>
       <AllTask/>
    </div>
  )
}

export default AdminDashboard
