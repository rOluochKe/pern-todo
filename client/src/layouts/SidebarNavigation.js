import React from 'react'
import { Link } from 'react-router-dom'
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
            <Link className='link' to='/'>
              {nav.icon} <span className='nav_name'>{nav.navLink}</span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
