import './AccordionItem.css'
import { useState, useRef, useEffect } from 'react';

const AccordionItem = ({ item, plus, minus }) => {
    const { question, answer } = item;
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
    const [height, setHeight] = useState('0px');

    useEffect(() => {
        if (isOpen) {
            setHeight(contentRef.current.scrollHeight + "px");
        } else {
            setHeight("0px");
        }
    }, [isOpen]);

    return (
        <div className={`accordion-item ${isOpen ? "open" : ""}`}>
            <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
                <h3>{question}</h3>
                <button className="icon"><img src={isOpen ? minus : plus} alt="toggle icon"/></button>
            </div>
            <div 
                ref={contentRef} 
                className="accordion-content" 
                style={{ maxHeight: height, overflow: 'hidden', transition: 'max-height 0.4s ease' }}
            >
                <p>{answer}</p>
            </div>
        </div>
    )
}

export default AccordionItem;
