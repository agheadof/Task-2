
import './App.css'
import Benefits from './components/BenefitsSection/Benefits'
import { heroData, benefitsData , testimonialsData , faqData , navigateData} from './components/Data'
import FaqSection from './components/FaqSection/FaqSection'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import NavigateSection from './components/NavigateSection/NavigateSection'
import Testimonials from './components/TestimonialsSection/Testimonials'
function App() {
 

  return (
    <>
      <Header/>
      <Hero heroData={heroData}/>
      <Benefits benefitsData={benefitsData}/>
      <Testimonials testimonialsData={testimonialsData}/>
      <FaqSection faqData={faqData}/>
      <NavigateSection navigateData={navigateData}/>
      <Footer/>
    </>
  )
}

export default App
