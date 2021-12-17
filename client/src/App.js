import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'

import { Patients } from './pages/Patients'

import './app.css'

export const App = () => {
  return (
    <Routes>
      <Route
        exact
        path='/'
        element={
          <DefaultLayout>
            <Patients />
          </DefaultLayout>
        }
      />
    </Routes>
  )
}
