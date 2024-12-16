import React from 'react';
import './Main.css';
import{assets} from '../../assets/assets';
const Main = () => {
  return (
    <div className='main'>
<div className="nav">
    <p>Gemini-AI</p>
    <img src={assets.user_icon} alt="" />
  
</div>
<div className="main_container">
  <div className="greet">
    <p><span>Hello jack</span></p>
    <p>How can I help you today?</p>
  </div>
  <div className="cards">
    <div className="card">
      <p>Suggest beautiful place to see on an upcoming road trip</p>
      <img src={assets.compass_icon} alt="" />
    </div>
    {/* Another dev  */}
    <div className="card">
      <p>Briefly describe your problem</p>
      <img src={assets.bulb_icon} alt="" />
    </div>

    <div className="card">
      <p>Brainstom team bonding activities for our work restreat</p>
      <img src={assets.message_icon} alt="" />
    </div>

    <div className="card">
      <p>Improve the readability of the following code</p>
      <img src={assets.code_icon} alt="" />
    </div>

    
  </div>
</div>
    </div>
  )
}

export default Main
// 32.00