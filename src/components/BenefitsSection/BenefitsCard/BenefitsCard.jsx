import './BenefitsCard.css'
const BenefitsCard = ({ card }) => {
    const { Img, title, descreption } = card
    return (
        <div className='benefits-card'>
            <div className='benefits-card-icon'><Img /></div>
            <div className='benefits-card-content'>
                <div className='benefits-card-title'>{title}</div>
                <div className='benefits-card-descreption'>{descreption}</div>
            </div>
        </div>
    )
}

export default BenefitsCard