import * as React from 'react'
import * as ReactDOM from 'react-dom'


const app = document.getElementById('app')

function Hello(): JSX.Element {
    return (
        <h1>Hello, World!</h1>
    )
}

ReactDOM.render(<Hello />, app)
