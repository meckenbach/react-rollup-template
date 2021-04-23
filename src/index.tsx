import * as React from 'react'
import * as ReactDOM from 'react-dom'

const app = document.getElementById('app')

class Hello extends React.Component {
  render () {
    return <h1>Hello, World!</h1>
  }
}

ReactDOM.render(<Hello />, app)
