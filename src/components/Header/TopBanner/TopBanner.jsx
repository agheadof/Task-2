import './TopBanner.css'
import design from './../../../assets/imges/BannerDesign1.png'
import design1 from './../../../assets/imges/BannerDesign2.png'
import design2 from './../../../assets/imges/BannerDesign3.png'
import design3 from './../../../assets/imges/BannerDesign4.png'
import ArrowRight from './../../../assets/imges/arrowright.svg'



const TopBanner = ({ text }) => {
    return (
        <div className='top-banner'>
            <img src={design} className='img-0 shape'/>
            <img src={design1} className='img-1 shape'/>
            <div className='banner-title'>
                {text}
            <img src={ArrowRight} className='arw'/>
            </div>
            <img src={design3} className='img-3 shape'/>
            <img src={design2} className='img-2 shape'/>
        </div>
    )
}

export default TopBanner