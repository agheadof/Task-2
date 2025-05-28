import { useState } from 'react'
import './Testimonials.css'
import TestimonialsCard from './TestimonialsCard/TestimonialsCard'
import arrowleft from '../../assets/imges/arrowleft.svg'
import arrowright from '../../assets/imges/arrowright.svg'
import stars from '../../assets/imges/stars.png'

const Testimonials = ({ testimonialsData }) => {
  const [items, setItems] = useState(testimonialsData)
  const [direction, setDirection] = useState('right')
  const [animationTrigger, setAnimationTrigger] = useState(0) // رقم ليرجع العنصر

  const nextItem = () => {
    setDirection('right')
    setItems((prevItems) => {
      const newItems = [...prevItems]
      const first = newItems.shift()
      newItems.push(first)
      return newItems
    })
    setAnimationTrigger((prev) => prev + 1) 
  }

  const prevItem = () => {
    setDirection('left')
    setItems((prevItems) => {
      const newItems = [...prevItems]
      const last = newItems.pop()
      newItems.unshift(last)
      return newItems
    })
    setAnimationTrigger((prev) => prev + 1)  
  }

  return (
    <div className='testimonials'>
      <button className='testimonials-button'>Their Happy Words 🤗</button>
      <div className='testimonials-title'>Our Testimonials</div>
      <div className='testimonials-text'>
        Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally.
      </div>
      <div className='testimonials-cards'>
        <button onClick={nextItem} className='left'>
          <img src={arrowleft} className='testimonials-arrow' />
        </button>
        {items.map((card, index) => (
          <TestimonialsCard
            key={`${animationTrigger}-${index}`} 
            card={card}
            stars={stars}
            className={`${![0, 1, 2].includes(index) ? 'show-3' : index !== 0 ? 'show-1' : 'show'} ${
              direction === 'right' ? 'slide-right' : 'slide-left'
            }`}
          />
        ))}
        <button onClick={prevItem} className='right'>
          <img src={arrowright} className='testimonials-arrow' />
        </button>
      </div>
    </div>
  )
}

export default Testimonials
