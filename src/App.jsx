import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './components/Card'

function App() {
    const [count, setCount] = useState(0)

    return (
        <main className='container w-100'>
            <div className='row'>
                <div className='col-12 col-lg-9 bg-primary'>
                    <div className='row'>
                        <div className='col-12 col-lg-8 bg-dark'>
                            {/* Card component */}
                            <Card image="daniel" name="daniel clifford" />
                        </div>

                        <div className='col-12 col-lg-4 bg-success'>
                            <Card image="jonathan" name="jonathan walters" />
                        </div>

                        <div className='col-12 col-lg-4 bg-warningt'>
                            <Card image="jeanette" name="jeanette harmon" />
                        </div>

                        <div className='col-12 col-lg-8 bg-info'>
                            <Card image="patrick" name="patrick abrams" />
                        </div>
                    </div>
                </div>

                <div className='col-12 col-lg-3 bg-secondary'>
                    <Card image="kira" name="kira whittle" />
                </div>
            </div>
        </main>
    )
}

export default App
