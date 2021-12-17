import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { Header } from './Header'
import { SidebarNavigation } from './SidebarNavigation'

export const DefaultLayout = ({ children }) => {
  return (
    <Container fluid={true} className='p-2'>
      <Row>
        <Header />
      </Row>

      <Row className='main__content py-3'>
        <Col md={3}>
          <SidebarNavigation />
        </Col>

        <Col md={9}>{children}</Col>
      </Row>
    </Container>
  )
}
