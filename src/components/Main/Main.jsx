import React, { useContext } from 'react'
import './main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context';

function Main() {


     const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context);
    


  return (

      <div className='main'>
     <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user-icon"  />
     </div>
     <div className="main-container">
        {!showResult ? 
        <>
        <div className="greet">
            <p><span>Hello, Dev</span></p>
            <p>How Can I help you today</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>Suggest some beautiful place</p>
                <img src={assets.compass_icon} alt="compass icon" />
            </div>
            <div className="card">
                <p>Describe Blockchain briefly</p>
                <img src={assets.bulb_icon} alt="compass icon" />
            </div>
            <div className="card">
                <p>Tell a knock knock joke</p>
                <img src={assets.message_icon} alt="compass icon" />
            </div>
            <div className="card">
                <p>Be my interviewer</p>
                <img src={assets.code_icon} alt="compass icon" />
            </div>
        </div> 
        </>
        :<div className='result'>
            <div className="result-title">
                <img src={assets.user_icon} alt="user icon" />
                <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
                <img src={assets.gemini_icon} alt="gemini icon" />

                {loading ?
                <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                </div>

            :<p dangerouslySetInnerHTML={{__html:resultData}}></p> }
                
            </div>
        </div>
            }
        
        <div className="main-bottom">
            <div className="search-box">
                <input autoComplete='off' onChange={(e)=> setInput(e.target.value)} type="search"  value={input} placeholder='Enter a prompt here' name="prompt" id="prompt" />
                <div>
                    <img src={assets.gallery_icon} alt="gallery icon" />
                    <img src={assets.mic_icon} alt="mic icon" />
                   {input? <img onClick={()=> onSent()} src={assets.send_icon} alt="send icon" /> : null}
                </div>
            </div>
                    <p className="bottom-info">
                        This is a beta feature. Please use it with caution.
                    </p>
        </div>
     </div>
    </div>
  )
}

export default Main