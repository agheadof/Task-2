import './NavigateSection.css'
import NavigateCard from "./NavigateCard/NavigateCard"
import seperator from '../../assets/imges/seperator.png'
import arrowRight from '../../assets/imges/arrowright.svg'

const NavigateSection = ({navigateData}) => {
  return (
    <div className='navigate'>
            <button className='navigate-button'>Explore More</button>
            <div className='navigate-title'>Navigate through our Pages</div>
            <div className='navigate-text'>Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school</div>
            <div className='navigate-cards'>
                {navigateData.map((card, index) => {
                    return (
                        <NavigateCard key={index} card={card} seperator={seperator} arrowRight={arrowRight}/>
                    )
                })}
            </div>
        </div>
  )
}

export default NavigateSection