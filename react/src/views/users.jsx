import React, { useEffect, useState } from 'react'
import axiosClient from '../axios-client'

export default function Users() {
  // Remove token from local storage
  //localStorage.removeItem('ACCESS_TOKEN');
  const [loading,setLoading] = useState(false)
  const [users,setUsers] = useState([])

  const getUsers = ()=>{
    setLoading(true)
    axiosClient.get('users')
    .then(({data})=>{
      setLoading(false)
      console.log(data);
      setUsers(data)
    })
    .catch((error)=>{
      setLoading(false)
      console.log(error);
    })
  }
  useEffect(()=>{
    getUsers()
  },[])
  return (
    <div>U</div>
  )
}
