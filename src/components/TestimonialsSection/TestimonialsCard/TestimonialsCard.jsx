import './TestimonialsCard.css'


const TestimonialsCard = ({ card, stars, className }) => {
    const { name, Img, descreption } = card;

    return (
        <div className={`testimonials-card ${className}`}>
            <img src={Img} className='testimonials-card-img'></img>
            <div className='testimonials-card-name'>{name}</div>
            <img src={stars} className='testimonials-card-stars'></img>
            <div className='testimonials-card-text'>{descreption}</div>
        </div>
    )
}

export default TestimonialsCard