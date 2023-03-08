import React from 'react'
import { Outlet } from 'react-router-dom'
import Signup from '../views/signup'

export default function GuestLayout() {
  return (
    <div>
      <div>
        <h1>Guest</h1>
        <Outlet />

      </div>
    </div>
  )
}
