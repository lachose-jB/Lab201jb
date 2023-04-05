import "./Carousel.css";
import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Carousel = ({Items}) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const slideToleft = () => {
        if(activeIndex === 0){
            setActiveIndex(2)
        }else{
            setActiveIndex(activeIndex - 1);
        }
        console.log(activeIndex)
    }

    const slideToRight = () => {
        if(activeIndex === 2){
            setActiveIndex(0)
        }else{
            setActiveIndex(activeIndex + 1);
        }
    }

    return (  
        <div className="carousel">
            <div className="button-prev-container" onClick={slideToleft}>
                <FaAngleLeft className="arrow-left"/>
            </div>
            <div className="carousel-wrapper">
                {Items.map((item , index) => {
                    return(
                        <div className={(index == activeIndex)? "Carousel_item active" : "Carousel_item" } key={index}>
                            <img src={item.image} alt="#"/>
                            <p>{item.text}</p>
                            <button>More</button>
                        </div>
                    )
                })}
            </div>
            <div className="button-next-container" onClick={slideToRight}>
             <FaAngleRight className="arrow-right" onClick={slideToRight}/>
            </div>
        </div>
    );
}
 
export default Carousel;