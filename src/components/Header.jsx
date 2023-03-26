import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'
const Header = ({ imageName, name }) => {
    const currentPath = window.location.pathname.split('/');
    // console.log('currentPathmkehehej', currentPath[currentPath.length - 2])
    const title = currentPath[currentPath.length - 1]
    const navigate = useNavigate();
    const [singleData, setSingleData] = useState([])
    const usersData = JSON.parse(localStorage.getItem('data'))
    const userId = localStorage.getItem('id')
    useEffect(() => {

        const oneData = usersData?.filter((item) => (item?.id == `${userId}`))
        // console.log('singleData345', oneData[0].name)
        setSingleData(oneData[0])

    }, [userId])

    const signOutFun = () => {
        localStorage.removeItem('id')
        navigate('/')
    }
    return (
        <header className="d-flex align-items-center justify-content-between border-bottom border-secondary py-3 my-3" >
            <div className="d-flex align-items-center justify-content-start">
                <h1 className="h4 mb-0 me-3 nav-title">
                    {
                        currentPath[currentPath.length - 2] == 'profile' ? `Profile` : `${title}`
                    }
                </h1>
            </div>
            <div className="d-flex align-items-center ">
                <div class="dropdown">

                    <button class="dropdown-toggle nav-drop-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
                        <img
                            src={singleData?.profilepicture}
                            alt="Profile Image"
                            className="rounded-circle me-2"
                        />
                        <h2 className="h5 mb-0">{singleData?.name}</h2>

                    </button>
                    <ul class="dropdown-menu" >
                        <img src={singleData?.profilepicture} />
                        <h6>{singleData?.name}</h6>
                        <h6>{singleData?.email}</h6>


                        {usersData && usersData.map((item, index) => (
                            <li>
                                <div onClick={
                                    () => {
                                        localStorage.setItem('id', item?.id)
                                        // window.location.reload()
                                        navigate(`profile/${item?.id}`)

                                    }
                                }>
                                    <img src={item?.profilepicture} />
                                    {item?.name}
                                </div>
                            </li>
                        ))

                        }
                        <button type="button" class="btn signoutBt" onClick={signOutFun}>Sign out</button>


                    </ul>
                </div>
            </div>

        </header>
    );
};

export default Header;
