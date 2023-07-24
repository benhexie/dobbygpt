import React from 'react'
import "./DashboardMain.css"
import { FaBolt, FaExclamationTriangle, FaLock, FaStar, FaSun } from "react-icons/fa"
import { capabilitiesData, examplesData, limitationsData } from './data/dashboard-data'
import InfoBlock from './components/InfoBlock'
import { SendBtn } from '../../assets'
import { Link } from 'react-router-dom'

function DashboardMain() {
  return (
    <div className='dashboard__main__container'>
      <div className='dashboard__main__header'>
        <div className='gpt-model__btn__container'>
          <button className='gpt4-model__btn gpt-model__btn'>
            <FaStar />
            <p>GPT-4</p>
            <FaLock />
          </button>
          <button className='gpt-model__btn'>
            <FaBolt style={{ color: "rgba(25,195,125, 1)" }} />
            <p>GPT-3.5</p>
          </button>
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
              { limitationsData.map((info, index) =>
                  <InfoBlock key={index} info={info} disabled />) 
              }
            </div>
          </div>
        </div>
        <div className='dashboard__footer'>
          <div className='dashboard__input__container'>
            <input placeholder='Send a message' className='dashboard__input' />
            <SendBtn className="dashboard__send__btn" />
          </div>
          <small className='dashboard__footer__text'>Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. <Link to={""}>DobbyGPT July 20 Version</Link></small>
        </div>
      </div>
    </div>
  )
}

export default DashboardMain