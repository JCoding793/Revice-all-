import React,{useRef , useEffect} from 'react';
import Trasistion from './Trasnsition';
import "./Home.css"
import gsap from "gsap";

function Home(){
let home = gsap.timeline();
let homeh1 = useRef(null);
let homeimg = useRef(null);
useEffect(()=>{
 home.from(homeh1,{
    duration: .6,
    skewx: 8,
    x: -100,
    opacity: 0,
 }, "-=2" );
 home.from(homeimg,{
    duration: .5,
    y:-200,
    opacity: 0
 }, "-=1.6");
}, [])
    return (
        <div>
            <Trasistion timeline={home}/>
           <div className='home-image home-overlay' ref={el => homeimg = el}></div>
           <div className='container-home' ref={el => homeh1 =el}>
           <h1>HOme page </h1>
           </div>
        </div>
    )
}
export default Home;