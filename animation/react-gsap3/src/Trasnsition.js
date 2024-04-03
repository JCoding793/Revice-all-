
import React , {useRef , useEffect} from "react";
import './Transition.css';
import gsap , {Power4} from 'gsap';

function Trasistion({timeline}){
    let tarns = useRef (null);
    useEffect(()=>{
        timeline.to(tarns,{
            duration: 3,
            x: 2600,
            ease: Power4.easeOut,
        })
    })
    return (
        <div>   
            <div className="transition-effect" ref={el=> tarns = el}></div>
        </div>
    )
}

export default Trasistion;