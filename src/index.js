import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import './assets/css/index.less'
import { HashRouter } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Suspense fallback="Loading...">
    <HashRouter>
      <App></App>
    </HashRouter>
  </Suspense>
)
