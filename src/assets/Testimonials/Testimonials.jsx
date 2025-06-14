import React, { useState, useEffect, useRef } from 'react';
import './Testimonials.css'

import person01 from '/Images/Person-01.jpg'
import person02 from '/Images/Person02.jpeg'
import person03 from '/Images/Person03.jpeg'
import person04 from '/Images/Person04.webp'
import person05 from '/Images/People05.jpeg'
import person06 from '/Images/Person06.webp'



const testimonials = [
    { img: person01, name: "Michael Brown", text: "Excellent quality! Fresh beans and quick delivery. Highly recommended."},
    { img: person02, name: "David Smith", text: "Love the taste! My mornings are better thanks to this coffee."},
    { img: person03, name: "Sarah Johnson", text: "Great aroma and packaging. Will definitely order again."},
    { img: person04, name: "Emma Wilson", text: "Rich and smooth flavor. Best coffee I've had in years!"},
    { img: person05, name: "Olivia Taylor", text: "Customer service was amazing and so is the coffee!"},
    { img: person06, name: "James Davis", text: "Top-notch quality. My go-to beans now!"},
    { img: person03, name: " Sarah Johnson", text: "Great aroma and packaging. Will definitely order again."},
    { img: person04, name: "Emma Wilson", text: "Rich and smooth flavor. Best coffee I've had in years!"},
    { img: person05, name: "Olivia Taylor", text: "Customer service was amazing and so is the coffee!"},
    { img: person06, name: "James Davis", text: "Top-notch quality. My go-to beans now!"},
    { img: person01, name: "Michael Brown", text: "Excellent quality! Fresh beans and quick delivery. Highly recommended."},
    { img: person02, name: "David Smith", text: "Love the taste! My mornings are better thanks to this coffee."},
    { img: person03, name: "Sarah Johnson", text: "Great aroma and packaging. Will definitely order again."},
    { img: person04, name: "Emma Wilson", text: "Rich and smooth flavor. Best coffee I've had in years!"},
    { img: person06, name: "James Davis", text: "Top-notch quality. My go-to beans now!"},
  ];

function Testimonial(){

    const [startIndex, setStartIndex] = useState(0);
    const totalSlides = Math.ceil(testimonials.length / 3);
    const intervalRef = useRef(null);

    const handleNext = () => {
        setStartIndex((prev) => {
            const nextIndex = prev + 3;
            return nextIndex >= testimonials.length ? 0 : nextIndex;
          });          

    };

    const handlePrev = () => {
        setStartIndex((prev) => (prev - 3 >= 0 ? prev - 3 : (totalSlides - 1) * 3));
    };

    const handleDotClick = (index) => {
        setStartIndex(index * 3);
    };

    

    const visibleTestimonials = testimonials.slice(startIndex, startIndex + 3);
    
    
    return(
        <>
        <div className="testimonial-section">
            <h1>TESTIMONIALS</h1>
            <div className="testimonial-slide">

                <div className="arrow-left" onClick={handlePrev}></div>

                    {visibleTestimonials.map((item, index) => (
                        <div className="testimonial-card" key={index}>
                        <img src={item.img} alt={item.name} loading="lazy"/>
                        <h5 className="commentator">{item.name}</h5>
                        <p className="comments">"{item.text}"</p>
                        </div>
                    ))}

                    
                <div className="arrow-right" onClick={handleNext}></div>

            </div>
            <div className="dots">
                {Array.from({ length: totalSlides }).map((_, index) => (
                <span
                    key={index}
                    className={`dot ${startIndex / 3 === index ? "active" : ""}`}
                    onClick={() => handleDotClick(index)}
                ></span>
                ))}
            </div>
        </div>
        </>
    );
}
export default Testimonial