import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import './Profile.css'
const Profile = () => {
    const [userProfile,setUserProfile]=useState([])
    const [id, setId]=useState('')
    const params = useParams();
    const usersData = JSON.parse(localStorage.getItem('data'))
    const userId=localStorage.getItem('id')

 useEffect(() => {
    const items= localStorage.getItem('id');
     if(items){
         setId(items);
     }
    const singleData = usersData?.filter((item) => (item?.id == `${items}`))
    setUserProfile(singleData[0])
    console.log('profile',userProfile)
}, [userId])

    return (

        <div className='row'>
            <div className='col-md-4 profile-sec' >
                <div className='profile-sec-1'>
                    <img src={userProfile?.profilepicture} />
                    <h5>{userProfile?.name}</h5>
                    <h5><span>Username:</span>{userProfile?.username}</h5>
                    <h5><span>e-mail:</span>{userProfile?.email}</h5>
                    <h5><span>Phone:</span>{userProfile?.phone}</h5>
                    <h5><span>Website:</span>{userProfile?.website} </h5>
                </div>
                <div className='profile-sec-2'>
                    <h5><span>Company</span></h5>
                    <h5><span>Name: </span>{userProfile?.company?.name}</h5>
                    <h5><span>catchphrase: </span>{userProfile?.company?.catchPhrase}</h5>
                    <h5><span>bs: </span>{userProfile?.company?.bs} </h5>
                </div>

            </div>
            <div className='col-md-8 classssssss' >
                <div className='profile-add-detail' >

                    <h5>Address:</h5>
                    <h5><span>Street:</span> {userProfile?.address?.street}</h5>
                    <h5><span>Suite: </span>{userProfile?.address?.suite}</h5>
                    <h5><span>City: </span>{userProfile?.address?.city}</h5>
                    <h5><span>Zipcode: </span>{userProfile?.address?.zipcode}</h5>


                </div>
                <div className='profile-add-map'>

                    <img src={`https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg`} />
                    <div className='profile-add-map-geo'>
                        <h6>Lat: {userProfile?.address?.geo?.lat}</h6>
                        <h6>Long:  {userProfile?.address?.geo?.lng}</h6>


                    </div>
                </div>
            </div>

        </div>

    )
}

export default Profile