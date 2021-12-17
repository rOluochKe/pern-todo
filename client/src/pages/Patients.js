import React from 'react'
import { Row, Col } from 'react-bootstrap'

import { Task, BloodPressure, HeartBeat, Profile } from '../componets'

export const Patients = () => {
  return (
    <Row>
      <Col md={5}>
        <Row>
          <Col md={4}>
            <h3>Patients</h3>
          </Col>
          <Col md={8}>
            <div>
              <span>icon</span> In Range
            </div>
            <div>
              <span>icon</span> Out of Range
            </div>
            <div>
              Filter <span>icon</span>
            </div>
            <div>
              Export <span>icon</span>
            </div>
          </Col>
        </Row>

        <Row>
          <Task />
        </Row>
      </Col>
      <Col md={7}>
        <Row>
          <Profile />
        </Row>
        <Row>
          <BloodPressure />
        </Row>
        <Row>
          <HeartBeat />
        </Row>
      </Col>
    </Row>
  )
}
