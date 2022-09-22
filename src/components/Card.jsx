import PropTypes from 'prop-types'

function Card(props) {
    return (
        // Card element who align text to left
        <article className='card text-start'>
            {/* Body of the card */}
            <div className='card-body'>
                {/* Flex for position image and text */}
                <div className='d-flex mb-3'>
                    {/* Image with border 2 px solid and secondary color, with border-radios 50% */}
                    <img
                        src='imgs/image-daniel.jpg'
                        alt=''
                        className='border border-secondary border-3 rounded-circle'
                    />

                    {/* Margin left */}
                    <div className='ps-3'>
                        {/* Remove margins, and set h6 size to name*/}
                        <h2 className='m-0 h6'>Daniel Clifford</h2>
                        <p className='m-0'>Lorem Lorem</p>
                    </div>
                </div>

                {/* Text, with custom font size and line height*/}
                <p className='fs-6 lh-1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas aut quasi natus eligendi, deleniti ut magni
                    repudiandae asperiores, non quae est odit blanditiis, qui
                    voluptate. Provident iusto at ducimus quas!
                </p>
                <p className='fs-6 lh-1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    eos nulla asperiores illo sed facere architecto iusto sit
                    esse incidunt perferendis odio porro aut corrupti laborum
                    fugiat quo, tempore dolorem.
                </p>
            </div>
        </article>
    )
}

Card.propTypes = {}

export default Card
