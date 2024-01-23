import React from 'react';
import "../components/Home.css";
function Signup() {
  return (
    <div className="s_wrapper">
      <h1 className="h1">Signup</h1>
      <input type="text" className="fnmae" placeholder="fullname" required >
        
      </input>
      <br />
      <br />
      <input type="password" className="paw" placeholder="password" required /><br/><br/>
      <input type="password" className="cpaw" placeholder="confirm password" required />
      <h6 className='or'>or</h6>
      <button className="fb">Signup with facebook</button><br/><br/>
      <button className="fb">Signup with facebook</button>
    </div>
  );
}
export default Signup;