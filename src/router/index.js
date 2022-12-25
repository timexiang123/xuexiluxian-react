import React from 'react'
import { Navigate } from 'react-router-dom'
const Home = React.lazy(() => import('views/home'))
const Course = React.lazy(() => import('views/course'))
const Vip = React.lazy(() => import('views/vip'))
const Login = React.lazy(() => import('views/login/login'))
const Register = React.lazy(() => import('views/login/register'))
const NotFound = React.lazy(() => import('views/404/NotFound'))
const routes = [
  {
    path: '',
    element: <Navigate to="/home"></Navigate>
  },
  {
    path: '/home',
    element: <Home></Home>
  },
  {
    path: '/course',
    element: <Course></Course>
  },
  {
    path: '/vip',
    element: <Vip></Vip>
  },
  {
    path: '/u/toLogin',
    element: <Login></Login>
  },
  {
    path: '/u/toRegister',
    element: <Register></Register>
  },
  {
    path: '*',
    element: <NotFound></NotFound>
  }
]
export default routes
