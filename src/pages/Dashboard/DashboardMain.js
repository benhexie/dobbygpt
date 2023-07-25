import React, { useEffect, useRef, useState } from 'react'
import "./DashboardMain.css"
import { FaBolt, FaExclamationTriangle, FaLock, FaStar, FaSun } from "react-icons/fa"
import { capabilitiesData, examplesData, limitationsData } from './data/dashboard-data'
import InfoBlock from './components/InfoBlock'
import { SendBtn } from '../../assets'
import { Link } from 'react-router-dom'

function DashboardMain() {

  const [hovered, setHovered] = useState("");
  const hideTimeoutRef = useRef(null);
  const textareaRef = useRef(null);
  const [text, setText] = useState("")

  const textareaChange = (event) => {
    const textarea = textareaRef.current;
    setText(event.target.value);
    textarea.style.height = 'auto';
    textarea.style.paddingTop = "16px";
    if (!event.target.value) {
      textarea.style.height = '24px';
      textarea.style.paddingTop = "4px";
    }
    textarea.style.height = `${textarea.scrollHeight < 200 ? textarea.scrollHeight + 2 : 200}px`;
  };
  
  function handleMouseEnter(btn) {
    clearTimeout(hideTimeoutRef.current)
    if (btn) setHovered(btn)
  }

  function handleMouseLeave() {
    hideTimeoutRef.current = setTimeout(() => {
      setHovered("");
    }, 100);
  }

  return (
    <div className='dashboard__main__container'>
      <div className='dashboard__main__header'>
        <div className='dashboard__main__header level2'>
          <div className='gpt-model__btn__container '>
            <button 
              className='gpt4-model__btn gpt-model__btn' 
              onMouseEnter={() => handleMouseEnter("40")} 
              onMouseLeave={handleMouseLeave}>
                <FaStar />
                <p>GPT-4</p>
                <FaLock />
            </button>
            <button 
              className='gpt-model__btn' 
              onMouseEnter={() => handleMouseEnter("35")} 
              onMouseLeave={handleMouseLeave}>
                <FaBolt style={{ color: "rgba(25,195,125, 1)" }} />
                <p>GPT-3.5</p>
            </button>
          </div>
          { hovered && <div className='btn__hover__message__container' 
              onMouseEnter={() => handleMouseEnter("")} 
              onMouseLeave={handleMouseLeave}>
            <h4>{ hovered === "35" ? 
              "Our fastest model, great for most everyday tasks." :
              "Our most capable model, great for tasks that require creativity and advanced reasoning." }
            </h4>
            <small>{hovered === "35" ? "Available for Free and Plus users" :
              "Available exclusively for plus users"}
            </small>
            { hovered === "40" && <button>Upgrade to ChatGPT Plus</button> }
          </div> }
        </div>
      </div>
      <div className='dashboard__main__body'>
        <h1>DobbyGPT</h1>
        <div className='dashboard__info__container'>
          <div className='dashboard__info__block__container'>
            <div className='info__block__container'>
              <div className='info__block__header'>
                <FaSun />
                <p>Examples</p>
              </div>
              { examplesData.map((info, index) =>
                  <InfoBlock key={index} info={info} />) 
              }
            </div>
            <div className='info__block__container'>
              <div className='info__block__header'>
                <FaBolt />
                <p>Capabilities</p>
              </div>
              { capabilitiesData.map((info, index) =>
                  <InfoBlock key={index} info={info} disabled />) 
              }
            </div>
            <div className='info__block__container'>
              <div className='info__block__header'>
                <FaExclamationTriangle />
                <p>Limitations</p>
              </div>
              { 
                limitationsData.map((info, index) =>
                  <InfoBlock key={index} info={info} disabled />) 
              }
            </div>
          </div>
        </div>
        <div className='dashboard__footer'>
          <form className='dashboard__input__container'>
            <textarea ref={textareaRef} 
              value={text}
              onChange={textareaChange}
              placeholder='Send a message' 
              className='dashboard__input' />
            <SendBtn className="dashboard__send__btn" />
          </form>
          <small className='dashboard__footer__text'>Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. 
            <Link to={""}>DobbyGPT July 20 Version</Link>
          </small>
        </div>
      </div>
    </div>
  )
}

export default DashboardMain