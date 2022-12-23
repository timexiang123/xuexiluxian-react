import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from 'router'
const App = memo(() => {
  return (
    <div className="app-container">
      <div className="app-header">header</div>
      <div className="app-content">{useRoutes(routes)}</div>
      <div className="app-footer">footer</div>
    </div>
  )
})

export default App
