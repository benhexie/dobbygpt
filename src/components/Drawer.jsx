import React from 'react'
import "./Drawer.css"
import { CloseSidebar } from '../assets'
import { FaEllipsisH, FaPlus, FaUser } from "react-icons/fa"
import ProfileImage from "../assets/images/WhatsApp Image 2023-05-25 at 23.28.34.jpeg"

function Drawer() {
  return (
    <nav className='drawer__container'>
        <header className='drawer__header'>
            <button className='drawer__btn newchat__btn'>
                <FaPlus />
                <p>New chat</p>
            </button>
            <button className='drawer__btn closedrawer__btn'>
                <CloseSidebar />
            </button>
        </header>
        <main className='drawer__main'>
          
        </main>
        <div className='drawer__line' />
        <footer className='drawer__footer'>
          <div className='footer__btn drawer__upgrade__btn'>
            <FaUser />
            <p>Upgrade to Plus</p>
            <span className='label__new'>
              New
            </span>
          </div>
          <div className='footer__btn drawer__profile__btn'>
            <div className='drawer__profile__image__container'>
              <img className='drawer__profile__image' src={ProfileImage} />
            </div>
            <p>Benedict Gabriel</p>
            <FaEllipsisH className='drawer__profile__btn__icon' />
          </div>
        </footer>
    </nav>
  )
}

export default Drawer