import { useState } from 'react'
import * as React from 'react'

export function Counter(props): JSX.Element {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>count</h1>
            <button onClick={() => setCount(count + 1)}>-1</button>
            <button onClick={() => setCount(count - 1)}>+1</button>
        </div >
    )
}