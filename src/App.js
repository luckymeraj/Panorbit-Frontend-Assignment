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
import Header from './components/Header'

import Sidebar from './components/Sidebar'
import {
  BrowserRouter as Router,
  Route, BrowserRouter, Routes
} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Private from './pages/Private';
import LandingPage from './pages/LandingPage';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Profile from './pages/Profile';
import Posts from './pages/Posts';
import Gallery from './pages/Gallery';
import Todo from './pages/Todo';
function App() {
const[data,setData]=useState([]);
const url='https://panorbit.in/api/users.json'
useEffect(() => {
  axios.get(url).then((res) => {
      // console.log("table data", res?.data?.users);
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
    
    <div >
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>} />
    <Route element={<Private />} >

      <Route path='Dashboard' element={<Dashboard/>}>
        
        <Route path='profile/:id' index element={<Profile/>}/>
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

