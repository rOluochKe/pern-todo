import React from 'react'

import {
  LineChart,
  ResponsiveContainer,
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
        <LineChart data={data}>
          <CartesianGrid />
          <XAxis dataKey='name' interval={'preserveStartEnd'} />
          <YAxis></YAxis>
          <Tooltip />
          <Line dataKey='student' stroke='black' activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </>
  )
}
