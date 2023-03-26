import React from 'react'
import { useNavigate } from 'react-router-dom'
import './LandingPageCard.css'
const LandingPageCard = () => {
    const navigate=useNavigate()
    const users=JSON.parse(localStorage.getItem('data'))
    
    return (
        <div id="wrapper">
                <div className='card'>
                <h1 className='card-header'>Select an account</h1>
<div className='card-list'>
                    {users && users.map((user, index) => (
                        <div className="user" key={index}
                        onClick={()=>{
                            // console.log('hellooo',)
                            navigate(`Dashboard/profile/${user?.id}`);
                        localStorage.setItem('id',user?.id);
                    }}
                        >
                            <img src={user?.profilepicture} alt={user.name}/>
                            <h4>{user?.name}</h4>
                        </div>
                    ))}
                    </div>
                </div>
        </div>
    );
};

export default LandingPageCard