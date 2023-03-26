import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'
const Header = ({ imageName, name }) => {
    const currentPath = window.location.pathname.split('/');
    console.log('currentPathmkehehej',currentPath[currentPath.length-2])
    const title=currentPath[currentPath.length-1]
    const navigate=useNavigate();
    const [singleData,setSingleData]=useState([])
    const usersData=JSON.parse(localStorage.getItem('data'))
    const userId=localStorage.getItem('id')
    // console.log('nav',data[0])
    useEffect(()=>{
    
    const oneData = usersData?.filter((item) => (item?.id == `${userId}`))
    console.log('singleData345',oneData[0].name)
    setSingleData(oneData[0])

},[userId])
    // const onClickHandle=(item)=>{
    //     console.log('banda',item)

    // }
    const signOutFun=()=>{
        localStorage.removeItem('id')
        localStorage.removeItem('singleData')

        navigate('/')
    }
    return (
        <header className="d-flex align-items-center justify-content-between border-bottom border-secondary py-3 my-3" >
            <div className="d-flex align-items-center justify-content-start">
                <h1 className="h4 mb-0 me-3" style={{textTransform:'capitalize'}}>{
                    currentPath[currentPath.length-2]=='profile'?`Profile`:`${title}`
                }</h1>
            </div>
            <div className="d-flex align-items-center ">
            <div class="dropdown">

            <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{border:'none',background:'none',display:'flex',flexDirection:'row',alignItems:'center'}}>
                <img
                    src={singleData?.profilepicture}
                    alt="Profile Image"
                    className="rounded-circle me-2"
                    style={{ width: '50px', height: '50px' }}
                />
                                <h2 className="h5 mb-0">{singleData?.name}</h2>

                </button>
                <ul class="dropdown-menu" style={{width:'280px',height:'350px',overflowY:'auto',textAlign:'center',justifyContent:'left'}}>
                    <img src={singleData?.profilepicture} style={{width:'50px',height:'50px',borderRadius:'50%'}}/>
                    <h6>{singleData?.name}</h6>
                    <h6>{singleData?.email}</h6>


{usersData && usersData.map((item,index)=>(
    <li style={{justifyContent:'left',borderTop:'1px solid lightgray'}}
    
    >
        <div style={{textAlign:'center'}} onClick={
            ()=>{
                localStorage.setItem('id',item?.id)
                // window.location.reload()
                navigate(`profile/${item?.id}`)

            }
        }>
        <img src={item?.profilepicture} style={{height:'20px',width:'20px',borderRadius:'50%'}}/>
        {item?.name}
        </div>
        </li>
))
    
}
<button type="button" class="btn " style={{backgroundColor:'coral',color:'white',borderRadius:'20px',marginBottom:'10px'}} onClick={signOutFun}>Sign out</button>

    
  </ul>
                </div>
            </div>
            
        </header>
    );
};

export default Header;
