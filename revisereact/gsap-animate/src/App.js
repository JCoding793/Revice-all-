import logo from "./logo.svg";
import "./App.css";
import React, { useRef, useEffect, useState } from "react";
import { Power3, TweenMax } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { TimelineLite, Power2 } from "gsap/gsap-core";
import Adivasi from "./adivasi.jpg";
function App() {
  const [handlAnimate, setHandleAnimate] = useState(false);
  let app = useRef(null);
  let circle = useRef(null);
  let imgAdi = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".img-container::after");
  let tl = new TimelineLite();

  const handleExpand = () => {
    TweenMax.to(circleRed, 0.8, {
      width: 200,
      height: 200,
      ease: Power3.easeOut,
    });
    setHandleAnimate(true);
  };
  const handleShirnk = () => {
    TweenMax.to(circleRed, 0.8, {
      width: 75,
      height: 75,
      ease: Power3.easeOut,
    });
    setHandleAnimate(false);
  };
  useEffect(() => {
    tl.to(app, 0, { css: { visibility: "visible" } })
      .to(imageReveal, 1.4, { width: "0%", ease: Power2.easeInOut }).to(imgAdi, 1.4, { scale: 1.2, ease: Power2.easeInOut, delay: -1.5 });
  }, []);
  // useEffect(() => {

  //   TweenMax.to(
  //     app,
  //     1,
  //     {css : { visibility: "visible"} })

  //     TweenMax.staggerFrom( [circle, circleRed , circleBlue] , .9 , {opacity: 0.8, x : 40, ease: Power3.easeOut}, .2,
  //   )

  //   // TweenMax.from(circle, .8, {
  //   //   opacity: 0,
  //   //   x: 40,
  //   //   ease: Power3.easeOut,
  //   // });
  //   // TweenMax.from(circleRed, .8, {
  //   //   opacity: 0,
  //   //   x: 40,
  //   //   ease: Power3.easeOut, delay: .2
  //   // });
  //   // TweenMax.from(circleBlue, .8, {
  //   //   opacity: 0,
  //   //   x: 40,
  //   //   ease: Power3.easeOut, delay : .4
  //   // });
  // }, []);
  return (
    <div
      className="App"
      ref={(el) => {
        app = el;
      }}
    >
      <header className="App-header">
        <div className="cirlce-container">
          <div
            ref={(el) => {
              circle = el;
            }}
            className="circle"
          ></div>
          <div
            onClick={handlAnimate !== true ? handleExpand : handleShirnk}
            ref={(el) => {
              circleRed = el;
            }}
            className="circle red"
          ></div>
          <div
            ref={(el) => {
              circleBlue = el;
            }}
            className="circle blue"
          ></div>
        </div>
        <div className="img-container">
          <img
            src={Adivasi}
            ref={(el) => {
              imgAdi = el;
            }}
            alt="adivasi"
          ></img>
        </div>
      </header>
    </div>
  );
}

export default App;
