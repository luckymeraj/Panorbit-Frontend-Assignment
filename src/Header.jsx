import React from 'react';

const Header = ({ imageName, name }) => {
    const data=JSON.parse(localStorage.getItem('data'))
    console.log('nav',data[0])
    return (
        <header className="d-flex align-items-center justify-content-between border-bottom border-secondary py-3 my-3">
            <div className="d-flex align-items-center justify-content-start">
                <h1 className="h4 mb-0 me-3">Profile</h1>
            </div>
            <div className="d-flex align-items-center flex-row-reverse">
                <img
                    src={`https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw`}
                    alt="Profile Image"
                    className="rounded-circle me-2"
                    style={{ width: '50px', height: '50px' }}
                />
                <h2 className="h5 mb-0">{name}</h2>
            </div>
        </header>
    );
};

export default Header;
