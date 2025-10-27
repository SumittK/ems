import React from 'react';
import './Header.css';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider.jsx';
import { useNavigate } from 'react-router-dom';

function Header({}) {
    const {loggedInUser, logOutUser} = useContext(AuthContext);
   const navigate = useNavigate();

    const handleLogout = () => {
        logOutUser();
        navigate("/");
    }
    return (
        <div className='header-container'>
              <h3>
              <span style={{ fontSize: '24px', color: "white" }}>Hello,</span> <br />
              <span style={{ fontSize: '32px', fontWeight: 'bold' , color: "white"}}>{loggedInUser?.email +" 👋"}</span>
              </h3>      
                <button onClick={handleLogout}> Logout</button>
        </div>
    )
}

export default Header
