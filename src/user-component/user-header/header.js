import React,{useState} from 'react'
import './header.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit,faFeatherAlt,faGlobe,faHome } from '@fortawesome/free-solid-svg-icons'; 
import IconButton from '@mui/material/IconButton/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Avatar } from '@mui/material';
import {Home} from '@mui/icons-material'


function UserHeader() {

  const [isToggle, setIsToggle] =useState(false)


   const logoutHandler = ()=> {
              
              //              /// remove cache google user and normal user
              localStorage.removeItem('googlename');
              localStorage.removeItem('googleemail');
              localStorage.removeItem('googlePicture');

              localStorage.removeItem('name');
              localStorage.removeItem('email');
              localStorage.removeItem('userId');
              localStorage.removeItem('type')
              localStorage.removeItem('token');

              window.open("/","_self");
  
   }

    return (
        <div className='user_header'>  
        <h1 className='user_logo' onClick={() => window.open('/app/public',"_self")}>
        YourWords <FontAwesomeIcon icon={faFeatherAlt} />
    </h1>
         <div className='header_nav'>
         <div className='header_nav_user'>
                <div>
                     <IconButton onClick={() => {window.open("/app/public","_self")}} className="HomeButton">
                     <Home className="user_header_Icon HomeIcon" />
                     </IconButton>
               </div>  

                 <div className='header_write_icon'>
                   <IconButton onClick={() => {window.open('/app/write',"_self")}}>
                <FontAwesomeIcon icon={faEdit} className='user_header_icon WriteIcon'  /> 
                   </IconButton>
                 </div>  
          
               <div className="header_user_avatar">
                   <span className="header_user_name">{localStorage.getItem('name') } </span> 
                   <IconButton onClick={() => setIsToggle(!isToggle)}>
                <Avatar src={localStorage.getItem('googlePicture')} className='userIcon' />
                   </IconButton>
                   <div className="logout_container" style={isToggle ?{display:'block'} : {display:'none'}}>
                     <p className="account" onClick={() => window.open("/app/user/account","_self")}>Account</p>
                     <p onClick={logoutHandler} className="logout">Logout</p>
                    </div> 
                 </div> 
     
                    
           </div >
 
         </div>
          
        </div>
    )
}

export default UserHeader
