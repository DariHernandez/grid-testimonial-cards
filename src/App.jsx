import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>Hello, Bootstrap and Vite!</h1>
            <button class="btn btn-primary">Primary button</button>
        </>
    )
}

export default App
