import React from 'react'
import { useNavigate, NavLink, Link } from 'react-router-dom';
import "./Admin.css"; 

const AdminHeader = () => {
//   const navigate = 
  return (
    <div>
    <div>
    <h2 style={{color:'rebeccapurple', margin:'0px    '}}>Admin <Link to='/adminauth'><button className='logout-btn'>Logout</button></Link></h2>
      
    </div>  
      <div className="navbar">
        <ul>
      <li><NavLink    
      style={({ isActive }) => ({
        backgroundColor: isActive ? "#669933" : "#663399",
      })}
    
        to="/addQuestion">Add Questions</NavLink></li>
      <li><NavLink to="/questionlist">Added Questions</NavLink></li>
      <li><NavLink to="#">Change Password</NavLink></li>
      <li><NavLink to=" #">Product list</NavLink></li>
</ul>
   </div>
</div>
  );
}

export default AdminHeader