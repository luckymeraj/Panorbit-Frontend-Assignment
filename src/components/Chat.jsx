import React from 'react'
import { useParams } from 'react-router-dom'
import './Chat.css'
const Chat = () => {
    const chat=JSON.parse(localStorage.getItem('data'))
    const params=useParams();
  return (
<>
<div className="btn-group dropup mainDiv" >
  <button type="button" className="btn btn-primary dropdown-toggle chatBt" data-bs-toggle="dropdown" aria-expanded="false" >
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-right" viewBox="0 0 16 16">
  <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"/>
</svg>
<span>Chats</span>
  </button>
  <ul className="dropdown-menu">
{
    chat && chat.map((item,index)=>(
        item?.id==params?.id?
        ""
        :
        <li key={index}>
            <div className='ulDiv'>
<img src={item?.profilepicture}/>
<h6>{item?.name}</h6>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" color='green' fill="currentColor" className="bi bi-dot" viewBox="0 0 16 16">
  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
</svg>
            </div>
        </li>
    ))
}
            
  </ul>
</div>
</>
  )
}

export default Chat