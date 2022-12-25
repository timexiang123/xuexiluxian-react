import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import 'antd/dist/reset.css'
import './assets/css/index.less'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/assets/theme'
import store from '@/store'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Suspense fallback="Loading...">
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <HashRouter>
          <App></App>
        </HashRouter>
      </Provider>
    </ThemeProvider>
  </Suspense>
)
