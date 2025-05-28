import './Benefits.css'
import BenefitsCard from './BenefitsCard/BenefitsCard'
import { useEffect } from 'react';
const Benefits = ({ benefitsData }) => {
      useEffect(() => {
    const cards = document.querySelectorAll('.benefits-card');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 }); 

    cards.forEach(card => observer.observe(card));

    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);
    return (
        <div className='benefits'>
            <button className='benefits-button'>Children Deserve Bright Future</button>
            <div className='benefits-title'>Our Benefits</div>
            <div className='benefits-text'>With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future.</div>
            <div className='benefits-cards'>
                {benefitsData.map((card, index) => {
                    return (
                        <BenefitsCard key={index} card={card} />
                    )
                })}
            </div>
        </div>
    )
}

export default Benefits