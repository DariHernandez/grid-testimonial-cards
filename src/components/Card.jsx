import PropTypes from 'prop-types'

function Card({ image, name, bgcolor, texts, color }) {
    return (
        // Add text color class to card
        <article className={`card text-start p-2 h-100 shadow-sm ${bgcolor} ${color}`}>
            <div className='card-body'>
                <div className='d-flex align-items-center mb-3'>
                    <img
                        src={`imgs/image-${image}.jpg`}
                        alt=''
                        className='border border-secondary border-3 rounded-circle w-1'
                    />

                    <div className='ps-3'>
                        <h2 className='m-0 h6 text-capitalize'>{name}</h2>
                        <p className='m-0'>Lorem Lorem</p>
                    </div>
                </div>

                {/* Loop for each text element */}
                {texts.map((text, text_id) => (
                    // Generate paragraphs
                    <p
                        className='fs-6 lh-1'
                        key={text_id}
                    >
                        {text}
                    </p>
                ))}
            </div>
        </article>
    )
}

Card.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bgcolor: PropTypes.string.isRequired,
    texts: PropTypes.arrayOf(PropTypes.string).isRequired,
    color: PropTypes.string.isRequired,
}

export default Card
