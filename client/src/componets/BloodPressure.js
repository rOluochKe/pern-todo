import React from 'react'
import { Chart } from './Chart'

export const BloodPressure = () => {
  return (
    <div className='blood__pressure_component'>
      <div className='chart__heading'>
        <h5 className='chart__heading'>History-Blood Pressure</h5>
        <p className='chart__logs'>
          <a href='/'>See Logs</a>
        </p>
      </div>

      <div className='chart'>
        <Chart />
      </div>
    </div>
  )
}
