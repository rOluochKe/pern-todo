import React from 'react'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { FiSettings, FiShoppingCart } from 'react-icons/fi'

export const SidebarNavigation = () => {
  const navigation = [
    {
      icon: <AiOutlineHome />,
      navLink: 'Dashboard',
    },
    {
      icon: <AiOutlineUser />,
      navLink: 'Patients',
    },
    {
      icon: <FiSettings />,
      navLink: 'Settings',
    },
    {
      icon: <FiShoppingCart />,
      navLink: 'Shop',
    },
  ]

  return (
    <ul className='navlinks'>
      {navigation.map((nav, index) => {
        return (
          <li className='navlink' key={index}>
            <a className='link' href='/'>
              {nav.icon} <span>{nav.navLink}</span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
