import React from 'react'
import "./Dashboard.css"
import { Outlet } from 'react-router-dom'
import Drawer from '../../components/Drawer'

function Dashboard() {
  return (
    <div className='dashboard__container'>
        <Drawer />
        <Outlet />
    </div>
  )
}

export default Dashboard