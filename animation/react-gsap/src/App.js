import React , {useRef , useEffect} from 'react';
import logo from './logo.svg';
// import { TweenMax , Power3 } from 'gsap';
import { gsap , Power3 } from 'gsap';
import './App.css';
import Header from './header';
import Content from './content';
import Images from './images';
import { Timeline } from 'gsap/gsap-core';
function App() {

  let tl  = new gsap.timeline();
  let ease = Power3.easeOut();

  return (
    <div className="hero">
      
      <Header timeline={tl} ease = {ease}/>
      <div className='container'>
        <Content timeline={tl}/>
        <Images timeline={tl} ease = {ease}/>
      </div>
     
    </div>
  );
}

export default App;
