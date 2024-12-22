// import React, { useContext } from "react";
// import "./Main.css";
// import { assets } from "../../assets/assets";
// import { use } from "react";
// import { Context } from "../../contex/Contex";
// const Main = () => {
// const {onSent, recentPrompt, showResult, loading, resultData, setInput} = useContext(Context);

//   return (
//     <div className="main">
//       <div className="nav">
//         <p>Gemini-AI</p>
//         <img src={assets.user_icon} alt="" />
//       </div>
//       <div className="main_container">
//         <div className="greet">
//           <p>
//             <span>Hello jack</span>
//           </p>
//           <p>How can I help you today?</p>
//         </div>
//         <div className="cards">
//           <div className="card">
//             <p>Suggest beautiful place to see on an upcoming road trip</p>
//             <img src={assets.compass_icon} alt="" />
//           </div>
//           {/* Another dev  */}
//           <div className="card">
//             <p>Briefly describe your problem</p>
//             <img src={assets.bulb_icon} alt="" />
//           </div>

//           <div className="card">
//             <p>Brainstom team bonding activities for our work restreat</p>
//             <img src={assets.message_icon} alt="" />
//           </div>

//           <div className="card">
//             <p>Improve the readability of the following code</p>
//             <img src={assets.code_icon} alt="" />
//           </div>
//         </div>
//         <div className="main-bottom">
//           <div className="search-box"> 
//             {/* 1.5 */}
//             <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt hare " />
//           <div>
//             <img src={assets.gallery_icon} alt="" />
//             <img src={assets.mic_icon} alt="" />
//             <img onClick={() => onSent()} src={assets.send_icon} alt="" />
//           </div>
//           </div>
// <p className="bottom-info">
//   Gemini may display inaccurate information, including about people,
//   so double check before sharing.
//   </p>          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main;




import React, { useContext, useState } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../contex/Contex";

const Main = () => {
  const { onSent, recentPrompt, showResult, loading, resultData, setInput } =
    useContext(Context);

  // Define input state for controlled input
  const [input, setInputState] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputState(value); // Update local input state
    setInput(value); // Update the context state
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini-AI</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main_container">
        {!showResult
        ?
         <>
        
        <div className="greet">
          <p>
            <span>Hello jack</span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Briefly describe your problem</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Improve the readability of the following code</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        </>
        :
        <div className="result">
          <div className="result-title">
            <img src={assets.user_icon} alt="" />
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            {
              loading
              ?
              <div className="loader">
                <hr />
                <hr />
                <hr />

              </div>
              : <p dangerouslySetInnerHTML={{__html: resultData}}>
            </p>
            }
          
          </div>

        </div>
        
      }
    
        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={handleInputChange}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input?<img onClick={() => onSent()} src={assets.send_icon} alt="" />:null }
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate information, including about people,
            so double check before sharing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;


