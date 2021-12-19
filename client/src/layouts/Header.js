import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BiBell } from 'react-icons/bi'
import { IoMdChatbubbles } from 'react-icons/io'
import { FaUserCircle } from 'react-icons/fa'
import { RiArrowDropDownLine } from 'react-icons/ri'

export const Header = () => {
  return (
    <div className='main__header'>
      <div className='left__header'>
        <span className='humburger'>
          <GiHamburgerMenu />
        </span>
        <p className='brand__name'>
          <span className='logo__name'>HealthX</span>
        </p>
        <form>
          <input type='text' placeholder='Search for patients' />
        </form>
      </div>

      <div className='right__header'>
        <span className='icon_one'>
          <BiBell />
        </span>
        <span className='icon_two'>
          <IoMdChatbubbles />
        </span>
        <span className='icon_three'>
          <FaUserCircle /> <span className='icon_four'>Dr. Golgerg</span>{' '}
          <span className='icon_five'>
            <RiArrowDropDownLine />
          </span>
        </span>
      </div>
    </div>
  )
}
