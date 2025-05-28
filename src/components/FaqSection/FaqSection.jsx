import AccordionItem from './AccordionItems/AccordionItem'
import './FaqSection.css'
import plus from '../../assets/imges/plus.svg'
import minus from '../../assets/imges/minus.svg'

const FaqSection = ({faqData}) => {
  return (
    <div className='faq'>
            <button className='faq-button'>Solutions For The Doubts</button>
            <div className='faq-title'>Frequently Asked Questions</div>
            <div className='faq-text'>Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education.</div>
            <div className='faq-accordion'>
                {faqData.map((item) => {
                    return (
                        <AccordionItem key={item.id} item={item} plus={plus} minus={minus}/>
                    )
                })}
            </div>
        </div>
  )
}

export default FaqSection