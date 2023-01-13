import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import 'antd/dist/reset.css'
import './assets/css/index.less'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/assets/theme'
import store from '@/store'
import { HistoryRouter, history } from './utils/history'
import Fallback from './components/fallback/Fallback'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Suspense fallback={<Fallback></Fallback>}>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <HistoryRouter history={history}>
          <App></App>
        </HistoryRouter>
      </Provider>
    </ThemeProvider>
  </Suspense>
)
