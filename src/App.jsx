import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './components/Card'

function App() {
    const [count, setCount] = useState(0)

    // Sample text
    const text =
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti repellat dolor dolorum quisquam nisi magni nulla sint ea quasi aliquid accusamus, architecto dicta.'

    return (
        <main className='container w-100'>
            <div className='row'>
                {/* Remove bg-color in wrapper */}
                <div className='col-12 col-lg-9'>
                    <div className='row'>
                        {/* Custom padding in rows */}
                        <div className='col-12 col-lg-8 p-2'>
                            {/* Submit bgcolor class and custom text to cards  */}
                            <Card
                                image='daniel'
                                name='daniel clifford'
                                bgcolor='bg-primary'
                                texts={[text, text]}
                            />
                        </div>

                        <div className='col-12 col-lg-4 p-2'>
                            <Card
                                image='jonathan'
                                name='jonathan walters'
                                bgcolor='bg-success'
                                texts={[text]}
                            />
                        </div>

                        <div className='col-12 col-lg-4 p-2'>
                            <Card
                                image='jeanette'
                                name='jeanette harmon'
                                bgcolor='bg-warning'
                                texts={[text]}
                            />
                        </div>

                        <div className='col-12 col-lg-8 p-2'>
                            <Card
                                image='patrick'
                                name='patrick abrams'
                                bgcolor='bg-info'
                                texts={[text, text]}
                            />
                        </div>
                    </div>
                </div>

                <div className='col-12 col-lg-3 p-2'>
                    <Card
                        image='kira'
                        name='kira whittle'
                        bgcolor='bg-secondary'
                        texts={[text, text, text]}
                    />
                </div>
            </div>
        </main>
    )
}

export default App
