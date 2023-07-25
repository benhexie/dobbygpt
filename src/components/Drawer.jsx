import React, { Fragment, useState } from 'react'
import "./Drawer.css"
import { CloseSidebar } from '../assets'
import { FaEllipsisH, FaPlus, FaUser } from "react-icons/fa"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import ProfileImage from "../assets/images/WhatsApp Image 2023-05-25 at 23.28.34.jpeg"

function Drawer() {

  const [drawerOpen, setDrawerOpen] = useState(true);

  return (
    <>
      <div className={`drawer__background ${!drawerOpen && "closed"}`} />
      <button className='drawer__btn closedrawer__btn drawer__under__btn' onClick={() => setDrawerOpen(prev => !prev)}>
        <CloseSidebar />
      </button>
      <div className={`drawer__container`}>
        <nav className={`drawer ${!drawerOpen && "closed"}`}>
          <header className='drawer__header'>
              <button className='drawer__btn newchat__btn'>
                  <FaPlus />
                  <p>New chat</p>
              </button>
              <button className='drawer__btn closedrawer__btn' onClick={() => setDrawerOpen(prev => !prev)}>
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
        <button 
          className={`drawer__close ${!drawerOpen && "closed"}`} 
          onClick={() => setDrawerOpen(prev => !prev)}>
            { drawerOpen ? <AiOutlineClose /> : <AiOutlineMenu /> }
        </button>
      </div>
    </>
  )
}

export default Drawer