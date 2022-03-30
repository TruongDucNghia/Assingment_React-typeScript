import React from 'react'
import { Navigate } from 'react-router-dom'

type CheckRoleProps = {
    children: JSX.Element
}

const CheckRole = (props: CheckRoleProps) => {
    const isAdmin = true
    if(!isAdmin){
        return <Navigate to='/'/>
    }
  return (
    props.children
  )
}

export default CheckRole