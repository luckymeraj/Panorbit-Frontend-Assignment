import React from 'react'
import './LandingPageCard.css'
const LandingPageCard = ({ users }) => {
    return (
        <div id="wrapper">
            <img src={`https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg`} alt="" className='bg-image' />
            <div className="container">
                <div className='card'>
                    <h1 className='card-header'>Select an account</h1>

                    {users.map((user, index) => (
                        <div className="user" key={index}>
                            <img src={user.image} alt={user.name} />
                            <h3>{user.username}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LandingPageCard