import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from 'rx/store'
import PmInventory from 'components/PmInventory/PmInventory'

import 'sass/main.scss'

const Content = () => (
  <div className="pm-app">
    <main className="container">
      <PmInventory />
    </main>
  </div>
)

const App = () => (
  <Provider store={ store }>
    <BrowserRouter>
      <Content />
    </BrowserRouter>
  </Provider>
)

export default App
