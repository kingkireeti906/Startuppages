// Project.jsx
import React from 'react';
import './Pro.css';
import Table from './table';
import { useState } from 'react';

function Project() {
    const [table, updateTable] = useState(true);
  return (
    <div className='mained'>
      <div className='book'>
        <div className='header'>
          <div className='right-section'>
            <span>Startup</span>
          </div>
          <div className='left-section'>
             <span>Home</span>
             <span>About Us</span>
             <span>Contact</span>
            <span>Login</span>
           </div>
         </div>
         <div className='rightside'> Startup Landing Page</div>
         <div className='belowtext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
         <div className='logo'>
         <img src='./jeff 1.png' alt='Jeff Logo' />
 </div>
 <div> <button  className='login'>Login</button></div>
 <div className='contact'>Contact Us </div>
 <div>
    
 <form >
 <input className="form" type="email" id="email" name="email" placeholder="Name" /> 
 <input className="form1" type="email" id="email" name="email" placeholder="Email    " /> 
 <input className="form2" type="email" id="email" name="email" placeholder="Mobile Number" />

       </form>
      </div>
      <div> <form>
      <input className="form3" type="email" id="email" name="email" placeholder="City" />
      <input className="form4" type="email" id="email" name="email" placeholder="Submit Form" />
      
        </form></div>
<div>
      {table ? <Table /> : null}
      {/* 
        Or, you can use a shorter syntax:
        {table && <Table />}
      */}
    </div>
      
//       </div>
//     </div>
  );
}

export default Project;
