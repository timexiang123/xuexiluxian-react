import React, { memo, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from 'router'
import { HYRequestInstance } from 'service'
const App = memo(() => {
  useEffect(() => {
    HYRequestInstance.get({ url: '/slider/getSliders' })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <div className="app-container">
      <div className="app-header">header</div>
      <div className="app-content">{useRoutes(routes)}</div>
      <div className="app-footer">footer</div>
    </div>
  )
})

export default App
