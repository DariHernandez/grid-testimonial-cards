import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

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
                        <div className='col-12 col-lg-8 bg-dark text-light'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Facere iusto, vel odit minima earum temporibus
                            sed nihil deleniti voluptate, incidunt quidem magni
                            provident accusamus tempora eligendi dolorem
                            voluptatem architecto! Vitae.
                        </div>

                        {/* Card: max with in xl, 4/12 of with in large */}
                        <div className='col-12 col-lg-4 bg-success text-light'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptate placeat optio tempore aut aspernatur
                            voluptatum odit, nemo eveniet hic sit rem eius sint,
                            dolorem eum explicabo tempora! Maiores, quae hic.
                        </div>

                        {/* Card: max with in xl, 4/12 of with in large */}
                        <div className='col-12 col-lg-4 bg-warning text-light'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Facere iusto, vel odit minima earum temporibus
                            sed nihil deleniti voluptate, incidunt quidem magni
                            provident accusamus tempora eligendi dolorem
                            voluptatem architecto! Vitae.
                        </div>

                        {/* Card: max with in xl, 8/12 of with in large */}
                        <div className='col-12 col-lg-8 bg-info text-light'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptate placeat optio tempore aut aspernatur
                            voluptatum odit, nemo eveniet hic sit rem eius sint,
                            dolorem eum explicabo tempora! Maiores, quae hic.
                        </div>
                    </div>
                </div>

                {/* right card, max with in xs, */}
                <div className='col-12 col-lg-3 bg-secondary'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eius fugit asperiores pariatur quaerat reprehenderit dolores
                    rem praesentium odit dignissimos? Fugit iusto quae
                    repudiandae beatae, in quod. Modi unde deserunt eius.
                </div>
            </div>
        </main>
    )
}

export default App
