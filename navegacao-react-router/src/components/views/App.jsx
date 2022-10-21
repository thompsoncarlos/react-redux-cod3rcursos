import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Content from '../layout/Content'
import Menu from '../layout/Menu'

import './App.css'

const App = props => (
  <div className="App">
    <BrowserRouter>
      <Menu />
      <Content />
    </BrowserRouter>
  </div>
)

export default App