import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import './Dashboard.css'
import Header from '../components/Header'
const Dashboard = () => {
    return (
        <div className='row d-flex flex-row' style={{justifyContent:'space-evenly',}} >
            <div className='col-md-3'>
                <Sidebar />

            </div>
            <div className='col-md-9' >
                <Header/>
                <Outlet />

            </div>

        </div>
    )
}

export default Dashboard
{/* <div className='AppGlass' >
      <Sidebar/>
      <Outlet/>
    </div> */}