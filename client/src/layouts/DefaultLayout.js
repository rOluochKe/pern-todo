import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { Header } from './Header'
import { SidebarNavigation } from './SidebarNavigation'

export const DefaultLayout = ({ children }) => {
  return (
    <Container fluid={true} className='p-0'>
      <Row>
        <Header />
      </Row>

      <Row>
        <Col md={3}>
          <SidebarNavigation />
        </Col>

        <Col md={9}>{children}</Col>
      </Row>
    </Container>
  )
}
