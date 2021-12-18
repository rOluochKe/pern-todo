import React from 'react'

import { Header } from './Header'
import { SidebarNavigation } from './SidebarNavigation'

export const DefaultLayout = ({ children }) => {
  return (
    <div className='container'>
      <div className='header_container'>
        <Header />
      </div>

      <div className='main__content'>
        <div className='sidebar__container'>
          <SidebarNavigation />
        </div>

        <div className='content__container'>{children}</div>
      </div>
    </div>
  )
}
