import React, {useRef, useEffect} from 'react'
import "./MainContent.css";
import logo from './background.jpg';

function MainContent({timeline}) {
let bg = useRef(null);
let contentH = useRef(null);
let contentP = useRef(null);
useEffect(()=>{
timeline.to(bg,{
    delay: 1, 
    duration: 2,
    y: "-50%",
    x: "-50",
    opacity: 1
} )
})
    return (
        <div>
            <div className="content">
                <h1 ref={el => contentH = el}>
                    Shop Now!
                </h1>
                <p ref={el => contentP = el}>
                    New Arrivals!
                </p>
            </div>
            <img src={logo} alt="bg" className="background" ref={el=> bg = el}/>
        </div>
    )
}

export default MainContent