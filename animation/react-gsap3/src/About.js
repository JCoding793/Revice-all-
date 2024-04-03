import React,{useRef, useEffect} from 'react';
import  "./About.css";
import gsap from "gsap";
import Trasistion from './Trasnsition';
function About(){
    let about = gsap.timeline();
    let aboutimg = useRef(null);
    let abouth1 = useRef(null);

    useEffect(()=>{
        about.from(abouth1, {
            duration: .6,
            // skewX: 8,
            opacity : 0,
            x: -100,
        }, "-=2");
        about.from(aboutimg,{
            duration: .5,
            opacity : 0,
            y: -100,
        }, "-=1" );
    } , [])
    
    return (
        <div>
            <Trasistion timeline={about}/>
         <div className='about-image about-overlay' ref={el=> aboutimg = el}></div>
           <div className='container-about' ref={el=> abouth1 = el}>
           <h1>About page </h1>
           </div>
        </div>
    )
}
export default About;