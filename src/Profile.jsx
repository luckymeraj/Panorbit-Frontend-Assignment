import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'

const Profile = () => {
    const [userProfile,setUserProfile]=useState([])
    const params = useParams();
    const usersData = JSON.parse(localStorage.getItem('data'))
    const userId=localStorage.getItem('id')
    // )
useEffect(() => {

  
    console.log('usersData', usersData)
    const singleData = usersData?.filter((item) => (item?.id == `${userId}`))
    localStorage.setItem('singleData', JSON.stringify(singleData))
    setUserProfile(singleData[0])
    console.log('profile',userProfile)
}, [userId])

    return (

        // <div style={{background:'b'}} className='col-md-11'>Profile</div>
        <div className='row' style={{ background: 'blue', minHeight: '480px', overflow: 'hidden', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className='col-md-4' style={{ minHeight: '480px', background: 'white', borderRight: '1px solid lightgray', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ height: '332px', background: '', display: 'flex', flexDirection: 'column', alignItems: 'center', borderBottom: '1px solid lightgray' }}>
                    <img src={userProfile?.profilepicture} style={{ height: '150px', width: '150px', borderRadius: '50%', marginTop: '1rem' }} />
                    <h4>{userProfile?.name}</h4>

                    <h5>Username: {userProfile?.username}</h5>
                    <h5>e-mail: {userProfile?.email}</h5>
                    <h5>Phone: {userProfile?.phone}</h5>
                    <h5>Website: {userProfile?.website} </h5>


                </div>
                <div style={{ height: '148px', background: '', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h4>Company</h4>
                    <h5>Name: {userProfile?.company?.name}</h5>
                    <h5>catchphrase: {userProfile?.company?.catchPhrase}</h5>
                    <h5>bs: {userProfile?.company?.bs} </h5>
                </div>

            </div>
            <div className='col-md-8' style={{ minHeight: '480px', background: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ height: '160px', background: '', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                    <h4>Address:</h4>
                    <h5>Street: {userProfile?.address?.street}</h5>
                    <h5>Suite: {userProfile?.address?.suite}</h5>
                    <h5>City:  {userProfile?.address?.city}</h5>
                    <h5>Zipcode:  {userProfile?.address?.zipcode}</h5>


                </div>
                <div style={{ height: '300px', background: '', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                    <img src={`https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg`} style={{ height: '350px', width: '500px', borderRadius: '10px', marginTop: '1rem' }} />
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <h6>Lat: {userProfile?.address?.geo?.lat}</h6>
                        <h6>Long:  {userProfile?.address?.geo?.lng}</h6>


                    </div>
                </div>
            </div>

        </div>

    )
}

export default Profile