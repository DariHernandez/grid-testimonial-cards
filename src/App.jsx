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
                <div className='col-12 col-lg-9'>
                    <div className='row'>
                        <div className='col-12 col-lg-8 p-2'>
                            {/* Submit text color class  */}
                            <Card
                                image='daniel'
                                name='daniel clifford'
                                bgcolor='bg-primary'
                                texts={[text, text]}
                                color="text-light"
                            />
                        </div>

                        <div className='col-12 col-lg-4 p-2'>
                            <Card
                                image='jonathan'
                                name='jonathan walters'
                                bgcolor='bg-success'
                                texts={[text]}
                                color="text-light"
                            />
                        </div>

                        <div className='col-12 col-lg-4 p-2'>
                            <Card
                                image='jeanette'
                                name='jeanette harmon'
                                bgcolor='bg-secondary'
                                texts={[text]}
                                color="text-body"
                            />
                        </div>

                        <div className='col-12 col-lg-8 p-2'>
                            <Card
                                image='patrick'
                                name='patrick abrams'
                                bgcolor='bg-dark'
                                texts={[text, text]}
                                color="text-light"
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
                        color="text-body"
                    />
                </div>
            </div>
        </main>
    )
}

export default App
