import React from 'react'
import ReactDOM from 'react-dom'

import "./index.css"

class App extends React.Component {
  render() {
    return (
      <div className="app">
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App/>,
    document.body.appendChild(document.createElement('div')),
  )
})

export default App