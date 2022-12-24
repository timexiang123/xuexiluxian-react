import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from 'router'
const Content = memo(() => {
  return <div>
    {useRoutes(routes)}
  </div>
})

export default Content
