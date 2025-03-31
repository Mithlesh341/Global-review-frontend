
import React, { useContext, useEffect } from 'react';
import './navbar.css';
import image from '../../../assets/lo.png';
import { StoreContext } from '../../../context/StoreContext';
import { useNavigate } from 'react-router-dom';
import Logout from '../../../assets/logout_icon.png';

const Navbar = ({ setShowLogin }) => {
  const url = "http://localhost:5173/signin";
  const { token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  // Sync token from localStorage when component mounts
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  // Logging out the user
  const logout = () => {
    localStorage.removeItem("token");
    setToken(""); // Update state immediately
    navigate("/"); // Redirect to home
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src={image} style={{ width: 100, height: 65, paddingLeft:"5px", marginRight:"20px", marginLeft:"0px"}} alt="logo" />
          <p style={{ paddingTop: 18 }}> GLOBAL REVIEW </p>
        </div>

        <div className="menu">
          <div className="dropdown">
            <a href="/category" className="more">Categories</a>
          </div>
          <a href={url} style={{ marginRight: "0px", paddingRight: "20px" }}><button style={{fontWeight:'bold'}}>Sign Up</button></a>

          {!token ? (
            
           <a href='/login'><button onClick={() => setShowLogin(true)}  style={{ marginLeft: "0px", paddingLeft: "15px" }}>
           Login
         </button></a> 
          ) : (
            <div className="dropdown">
              <div className="nav-profile-dropdown">
                <a onClick={logout} style={{ cursor: "pointer" }}>
                <svg xmlns="http://www.w3.org/2000/svg" style={{width:'30px',height:'30px'}} viewBox="0 0 24 24" fill="white"><path d="M4 18H6V20H18V4H6V6H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V18ZM6 11H13V13H6V16L1 12L6 8V11Z"></path></svg>
                  <p style={{fontSize:15}}>Log Out</p>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
