
import './Hero.css'

const Hero = ({heroData}) => {
  const { img, welcome, title, titleSpan , text, card } = heroData;

  return (
    <div className='hero'>

      <img src={img} className='hero-img' />
      <div className='hero-info'>
        <div className='hero-welcome'>{welcome}</div>
        <div className='hero-title'>{title} <span className='title-span'>{titleSpan}</span></div>
        <div className='hero-text'>{text}</div>
        <div className='hero-card'>
          <div className='hero-card-element'>
          <h2>{card.students.number}</h2>
          <p>{card.students.subtitle}</p>
          </div>
          <div className='hero-card-element'>
          <h2>{card.awards.number}</h2>
          <p>{card.awards.subtitle}</p>
          </div>
          <div className='hero-card-element'>
          <h2>{card.educators.number}</h2>
          <p>{card.educators.subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero