import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import './Dashboard.css'
import Header from '../components/Header'
import Chat from '../components/Chat'
const Dashboard = () => {
    return (
        <div className='row d-flex flex-row p-0 m-0' style={{justifyContent:'space-evenly',overflowX:'hidden'}} >
            <div className='col-md-3 p-0'>
                <Sidebar />

            </div>
            <div className='col-md-8 p-0' >
                <Header/>
                <Outlet />
                <Chat/>

            </div>

        </div>
    )
}

export default Dashboard
{/* <div className='AppGlass' >
      <Sidebar/>
      <Outlet/>
    </div> */}