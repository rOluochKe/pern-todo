import React from 'react'
import { Nav } from 'react-bootstrap'
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
    <Nav className='flex-column'>
      {navigation.map((nav, index) => {
        return (
          <Nav.Link key={index}>
            {nav.icon} <span>{nav.navLink}</span>
          </Nav.Link>
        )
      })}
    </Nav>
  )
}
