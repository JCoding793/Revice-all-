import logo from './logo.svg';
import React, {useRef, useEffect} from 'react';

import './App.css';
import gsap from 'gsap'
function App() {
  let timeline = new gsap.timeline();
  let tl2 = gsap.timeline();
  let h1 = useRef(null)
  let cursor = useRef(null);
  let postX = 0;
  let postY = 0;
  let mouseX = 0;
  let mouseY = 0;
  useEffect(()=>{
    timeline.to({} , 0.016,{
      repeat: -1,
      onRepeat: function(){
        postX += (mouseX-postX) / 10;
        postY += (mouseY - postY) / 10 ;

        timeline.set(cursor, {
          css: {
            left: postX - 50,
            top: postY - 50,
          }
        })
      }
    }); 
    document.addEventListener("mousemove" , function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;
  })
  tl2.from(h1.children, {
    skewY: 8,
    y:100,
    duration: 2,
    delay: .3,
    opacity: 0,
    stagger: {
      each: .4,
      from: "end"
    }
    
  })
  tl2.from(cursor,{
    duration:1.5,
    delay: 1,
    opacity:0
  }, "-=1")
  } , [])
 
  return (
    <div className="App">
     <div className='content' ref={el => h1 = el}>
      <h1>SAVAGE</h1>
      <h1>SHADY</h1>
      <h1>SENSTIVE </h1>
     
     </div>
    <div className='cursor-follow' ref={el=> cursor= el}></div> <h1>SHADY</h1>
 
    </div>
  );
}

export default App;
