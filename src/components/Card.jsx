import PropTypes from 'prop-types'

function Card({ image, name }) {
    return (
        <article className='card text-start p-0'>
            <div className='card-body'>
                <div className='d-flex align-items-center mb-3'>
                    <img
                        // props image
                        src={`imgs/image-${image}.jpg`}
                        alt=''
                        className='border border-secondary border-3 rounded-circle w-1'
                    />

                    <div className='ps-3'>
                        { /* props name  */}
                        <h2 className='m-0 h6 text-capitalize'>{name}</h2>
                        <p className='m-0'>Lorem Lorem</p>
                    </div>
                </div>

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

// Props datatype
Card.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default Card
