import React, { PureComponent } from 'react'
import { Row } from 'react-bootstrap'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import { data } from './data'

export class BloodPressure extends PureComponent {
  render() {
    return (
      <div className='blood__pressure'>
        <Row>
          <h5>History-Blood Pressure</h5>
          <p>See Logs</p>
        </Row>

        <Row>
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type='monotone'
                dataKey='pv'
                stroke='#8884d8'
                activeDot={{ r: 8 }}
              />
              <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
            </LineChart>
          </ResponsiveContainer>
        </Row>
      </div>
    )
  }
}
