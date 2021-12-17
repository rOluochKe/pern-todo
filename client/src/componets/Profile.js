import React from 'react'
import { Row } from 'react-bootstrap'

export const Profile = () => {
  return (
    <div className='profile'>
      <Row>
        <div>
          <p>image</p>
          <div>
            <p>
              <span>icon</span> 02.32 hours spent See Time Logs
            </p>
            <h4>
              Erica Rodrigues <span>icon</span>
            </h4>
            <p>23 Years | Female</p>
          </div>
        </div>

        <div>
          <div>
            <span>icon</span>
            <span>icon</span>
            <span>icon</span>
            <span>icon</span>
          </div>
          <p>Assigned on Nov 23, 19</p>
        </div>
      </Row>

      <Row>
        <div>
          <p>
            <span>icon</span> Blood Pressure
          </p>
          <p>Assigned 7 days ago</p>
          <h4>
            120/80 <span>icon</span>
          </h4>
          <p>3 hours ago</p>
          <p>May 23 09.00 AM</p>
        </div>
        <div>
          <p>
            <span>icon</span> Heart Beat
          </p>
          <p>Assigned 7 days ago</p>
          <h4>
            76 <span>icon</span>
          </h4>
          <p>3 hours ago</p>
        </div>
        <div>
          <p>
            <span>icon</span> Weight
          </p>
          <p>Assigned 12 days ago</p>
          <p>Waiting...</p>
        </div>
        <div>
          <p>
            <span>icon</span> Blood Glucose
          </p>
          <p>Assigned 2 days ago</p>
          <p>Waiting...</p>
        </div>
      </Row>
    </div>
  )
}
