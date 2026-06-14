import React from 'react'
import reactDOM from "react-dom/client"
import App from './App.jsx'

import { Provider } from 'react-redux'
import { store } from './store.js'
reactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
