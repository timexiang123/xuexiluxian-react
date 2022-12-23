import React from 'react'
import { Navigate } from 'react-router-dom'
const Home = React.lazy(()=>import('views/home'))
const Course = React.lazy(()=>import('views/course'))
const Vip = React.lazy(()=>import('views/vip'))
const routes =  [
  {
    path: '',
    element: <Navigate to='/home'></Navigate>
  },
  {
    path: '/home',
    element:<Home></Home>
  },
  {
    path:'/course',
    element:<Course></Course>
  },
  {
    path:'/vip',
    element:<Vip></Vip>
  }
]
export default routes