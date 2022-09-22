import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './components/Card'

function App() {
    const [count, setCount] = useState(0)

    return (
        // Cards wrapper
        <main className='container w-100'>
            {/* Main grid */}
            <div className='row'>
                {/* left column, max with in xs, */}
                <div className='col-12 col-lg-9 bg-primary'>
                    {/* Internal grid: top left*/}
                    <div className='row'>
                        {/* Card: max with in xl, 8/12 of with in large */}
                        <div className='col-12 col-lg-8 bg-dark'>
                            <Card />
                        </div>

                        {/* Card: max with in xl, 4/12 of with in large */}
                        <div className='col-12 col-lg-4 bg-success'>
                            <Card />
                        </div>

                        {/* Card: max with in xl, 4/12 of with in large */}
                        <div className='col-12 col-lg-4 bg-warningt'>
                            <Card />
                        </div>

                        {/* Card: max with in xl, 8/12 of with in large */}
                        <div className='col-12 col-lg-8 bg-info'>
                            <Card />
                        </div>
                    </div>
                </div>

                {/* right card, max with in xs, */}
                <div className='col-12 col-lg-3 bg-secondary'>
                    <Card />
                </div>
            </div>
        </main>
    )
}

export default App
