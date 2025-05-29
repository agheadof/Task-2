import Nav from "./Nav/Nav"
import TopBanner from "./TopBanner/TopBanner"
import logo from './../../assets/imges/Logo.svg'

const Header = () => {
    return (
        <>
            <TopBanner text={'Admission is Open, Grab your seat now'}/>
            <Nav logo={logo} items={[{link:'#home', content:'Home'},{link:'#aboutus', content:'About Us'},{link:'#academics', content:'Academics'},{link:'#admissions', content:'Admissions'},{link:'#studentlife', content:'Student Life'},{link:'#contact', content:'Contact'}]}/>
        </>
    )
}

export default Header