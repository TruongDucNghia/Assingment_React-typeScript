import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

type CheckUserProps = {
    children: JSX.Element
}

const CheckUser = (props: CheckUserProps) => {
    const isUser = localStorage.getItem('user')
    if(!isUser){
        return <Navigate to='/'/>
    }
  return (
    props.children
  )
}

export default CheckUser