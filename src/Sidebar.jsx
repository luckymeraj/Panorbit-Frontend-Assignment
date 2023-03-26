import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./Sidebar.css"
const Sidebar = () => {
    // get the pathname of the current page
    const currentPath = window.location.pathname;
    console.log('currentPath',currentPath)
    const params=useParams();
const userId=localStorage.getItem('id')
console.log('currentPathuserId',userId)
const [item,setItem]=useState([]);
useEffect(()=>{
   const items= localStorage.getItem('id');
    if(items){
        setItem(items);
    }
    console.log('itemsssss',items)
},[])
const navigate=useNavigate();
    return (
        <div
            className="p- d-flex flex-column justify-content-center"
            style={{ margin: '1em', backgroundColor: '#645CBB', borderRadius: '2.5em',width:'80%', height: '100vh' }}
        >
            <ul className="nav flex-column">
                <li className="nav-item">
                    <div className={`nav-link border-bottom   ${currentPath === `/Dashboard/profile/${userId}` ? 'text-white fw-bold active' : 'text-muted'}`} onClick={()=>{navigate(`profile/${userId}`)
                window.location.reload()
                }} >
                        Profile
                    </div>
                </li>
                <li className="nav-item">
                    <div className={`nav-link border-bottom   ${currentPath === '/Dashboard/posts' ? 'text-white active' : 'text-muted'}`} onClick={()=>navigate('posts')} >
                        Post
                    </div>
                </li>
                <li className="nav-item">
                    <div className={`nav-link border-bottom  ${currentPath === '/Dashboard/gallery' ? 'text-white active' : 'text-muted'}`} 
                    onClick={()=>navigate('gallery')}
                    >
                        Gallery
                    </div>
                </li>
                <li className="nav-item">
                    <div className={`nav-link  ${currentPath === '/Dashboard/todo' ? 'text-white active' : 'text-muted'}`} 
                    onClick={()=>navigate('todo')}
                    
                    >
                        Todo
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
