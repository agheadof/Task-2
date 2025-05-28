import './NavigateCard.css'

const NavigateCard = ({ card , seperator, arrowRight}) => {
    const { title, text } = card;
    return (
        <div className="navigate-card">
            <div className="navigate-card-title">{title}</div>            
            <img src={seperator} className="navigate-card-seperator"/>            
            <div className="navigate-card-text">{text}</div>            
            <button className="navigate-card-button"> Learn More <img src={arrowRight} /> </button>            
        </div>
    )
}

export default NavigateCard