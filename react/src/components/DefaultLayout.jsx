import React, { useEffect } from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import axiosClient from '../axios-client'
import { useStateContext } from '../contexts/ContextProvider'

export default function DefaultLayout() {
  const {user,token,setUser,setToken, notification} = useStateContext()

  useEffect(()=>{
    axiosClient.get('/user')
    .then(({data})=>{
      setUser(data)
      console.log(data);
    })
  },[])
  if(!token) {
    return <Navigate to="/login" />
  }

  const onLogout = (e) => {
    e.preventDefault()
    axiosClient.post('/logout')
    .then(({data})=>{
      console.log(data);
      setUser({})
      setToken(null)
    })
  }
  return (
    <div id="defaultLayout">
      <aside>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/users">Users</Link>
      </aside>
      <div className="content">
        <header>
          <div>
            Header
          </div>
          <div>
            {user.name}
            <a href="#" className='btn-logout' onClick={onLogout}>Logout</a>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
      {notification && <div className="notification">
        {notification}
      </div>}
    </div>
  )
}
