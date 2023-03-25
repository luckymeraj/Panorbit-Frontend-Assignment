import React from 'react'

const Profile = () => {
  return (

    // <div style={{background:'b'}} className='col-md-11'>Profile</div>
    <div className='row' style={{background:'blue',minHeight:'75%', overflow:'hidden',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <div className='col-md-4' style={{minHeight: '100%',minWidth: '100%',background:'white'}}></div>
        <div className='col-md-8' style={{minHeight: '100%',minWidth: '100%',background:'yellow'}}> </div>

    </div>
    
  )
}

export default Profile