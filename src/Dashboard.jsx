import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import './Dashboard.css'
import { getData } from './data'
import Header from './Header'
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