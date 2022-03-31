import React from 'react'
import { Navigate } from 'react-router-dom'

type CheckRoleProps = {
    children: JSX.Element
}

const CheckRole = (props: CheckRoleProps) => {
    const isAdmin = JSON.parse(localStorage.getItem('user') as string)
    if(isAdmin.user.roleId !== 1){
        return <Navigate to='/'/>
    }
  return (
    props.children
  )
}

export default CheckRole