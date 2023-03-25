import React from 'react'
import { useNavigate } from 'react-router-dom'
import './LandingPageCard.css'
const LandingPageCard = () => {
    const navigate=useNavigate()
    const users=JSON.parse(localStorage.getItem('data'))
    console.log('nav',users[0])
    
    return (
        <div id="wrapper">
            {/* <img src={``} alt="" className='bg-image' /> */}
            <div className="container">
                <div className='card'>
                    <h1 className='card-header'>Select an account</h1>

                    {users.map((user, index) => (
                        <div className="user" key={index}
                        onClick={()=>{
                            console.log('hellooo',)
                            navigate(`Dashboard/profile/${user?.id}`);
                        localStorage.setItem('id',user?.id);
                    }}
                        >
                            <img src={user?.profilepicture} alt={user.name} />
                            <h3>{user?.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LandingPageCard