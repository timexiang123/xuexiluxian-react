import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import 'antd/dist/reset.css'
import './assets/css/index.less'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/assets/theme'
import store from '@/store'
import Fallback from './components/fallback/Fallback'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Suspense fallback={<Fallback></Fallback>}>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <App></App>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </Suspense>
)
