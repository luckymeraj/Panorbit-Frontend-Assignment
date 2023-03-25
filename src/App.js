// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import './App.css'
import Header from './Header'

import Sidebar from './Sidebar'
import {
  BrowserRouter as Router,
  Route, BrowserRouter, Routes
} from "react-router-dom";
import Dashboard from './Dashboard';
import Private from './Private';
import LandingPage from './LandingPage';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Profile from './Profile';
import Posts from './Posts';
import Gallery from './Gallery';
import Todo from './Todo';
function App() {
const[data,setData]=useState([]);
const url='https://panorbit.in/api/users.json'
useEffect(() => {
  axios.get(url).then((res) => {
      console.log("table data", res?.data?.users);
      localStorage.setItem('data',JSON.stringify(res?.data?.users))
      // console.log('json',localStorage.getItem('data'))
      
      
      
      // setIsButtonRed(res.data.isButtonRed);
      // setFilteredData(moveButtonRedData(sortedData)); // pass filtered data here
      // console.log(res.data)
  }).catch((err) =>
      console.log(err)
  );
}, []);


  return (
    // <div className="App">
    //   <div className="container-fluid">
    //     <div className="row">
    //       <div className="col-md-3">
    //         <Sidebar />
    //       </div>
    //       <div className="col-md-9">
    //         <Header
    //         // imageName={imageName}
    //         //   name={name}
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div >
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>} />
    <Route element={<Private />} >

      <Route path='Dashboard' element={<Dashboard/>}>
        {/* <Route index element={<Header/>}/> */}
        
        <Route index path='profile' element={<Profile/>}/>
        <Route path='posts' element={<Posts/>}/>
        <Route path='gallery' element={<Gallery/>}/>
        <Route path='todo' element={<Todo/>}/>

        </Route>
        </Route>
    </Routes>
    </BrowserRouter>
    </div>
  )

}

export default App

