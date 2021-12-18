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
        <p className='brand__name'>
          <span>
            <GiHamburgerMenu />
          </span>{' '}
          HealthX
        </p>
        <form>
          <input type='text' placeholder='Search for patients' />
        </form>
      </div>

      <div className='left__header'>
        <span>
          <BiBell />
        </span>
        <span>
          <IoMdChatbubbles />
        </span>
        <span>
          <FaUserCircle /> Dr. Golgerg <RiArrowDropDownLine />
        </span>
      </div>
    </div>
  )
}
