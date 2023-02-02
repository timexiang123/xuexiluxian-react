import React from 'react'
import { Navigate } from 'react-router-dom'
const Home = React.lazy(() => import('views/home'))
const Course = React.lazy(() => import('views/course'))
const Vip = React.lazy(() => import('views/vip'))
const Login = React.lazy(() => import('views/login/login'))
const UserService = React.lazy(() => import('views/agreement/UserService'))
const PrivacyPolicy = React.lazy(() => import('views/agreement/PrivacyPolicy'))
const CourseDetail = React.lazy(() => import('views/course-detail'))
const CoursePlay = React.lazy(() => import('views/course-play'))
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
    path: '/agreement/user-service',
    element: <UserService></UserService>
  },
  {
    path: '/agreement/privacy-policy',
    element: <PrivacyPolicy></PrivacyPolicy>
  },
  {
    path: '/course/detail/:courseId',
    element: <CourseDetail></CourseDetail>
  },
  {
    path: '/player/play',
    element: <CoursePlay></CoursePlay>
  },
  {
    path: '*',
    element: <NotFound></NotFound>
  }
]
export default routes
