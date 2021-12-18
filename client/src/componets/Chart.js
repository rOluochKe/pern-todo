import React from 'react'

import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts'
import { data } from './data'

export const Chart = () => {
  return (
    <>
      <ResponsiveContainer width='100%' aspect={3}>
        <LineChart data={data} margin={{ right: 300 }}>
          <CartesianGrid />
          <XAxis dataKey='name' interval={'preserveStartEnd'} />
          <YAxis></YAxis>
          <Legend />
          <Tooltip />
          <Line dataKey='student' stroke='black' activeDot={{ r: 8 }} />
          <Line dataKey='fees' stroke='red' activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </>
  )
}
