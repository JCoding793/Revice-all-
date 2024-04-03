import './App.scss';
import Kitchen from "../../image/Kitchen.jpg";
import gsap, {Power3} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Bedroom from "../../image/bedroom.jpg";
import Tvroom from "../../image/tvroom.jpg";
import React, { useEffect, useRef, Fragment } from "react";

gsap.registerPlugin(ScrollTrigger);

function App() {
  // const tl = new TimelineLite();
  useEffect(() => {


    let ctx = gsap.context(()=>{

      gsap.set(".photo:not(:first-child)" , {opacity : 0 , scale: 0.5 } )

      const animate  = gsap.to(".photo:not(:first-child)" , {opacity : 1 , scale: 1 , duration: 1, stagger: 1 }) 

      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end : "bottom bottom",
        pin: ".rightBox",
        animation: animate,
        scrub: true, 
        
      })
    
    })

  //   const girlImage = heroImg.firstElementChild;
  //   const boyImage = heroImg.lastElementChild;
 
  //   const headLineFirst = content.children[0].children[0];
  //   const headLineSecond = headLineFirst.nextSibling;
  //   const headLineThird = headLineSecond.nextSibling;
  //   const contentP = content.children[1];
  //   const contentButton = content.children[2];
  //   console.log(
  //     headLineFirst,
  //     headLineSecond,
  //     headLineThird,
  //     contentP,
  //     contentButton
  //   );

    
  //   TweenMax.to(app, 0, { css: { visibility: "visible" } });
   
  //   tl.from(girlImage, 1.2, { y: 1280, ease: Power3.easeOut }, "start")
  //     .from(
  //       girlImage.firstElementChild,
  //       2,
  //       { scale: 1.6, ease: Power3.easeOut },
  //       0.2
  //     )
  //     .from(boyImage, 1.2, { y: 1280, ease: Power3.easeOut }, 0.2)
  //     .from(
  //       girlImage.firstElementChild,
  //       2,
  //       { scale: 1.6, ease: Power3.easeOut },
  //       0.2
  //     );
  //   tl.staggerFrom(
  //     [headLineFirst.children, headLineSecond.children, headLineThird.children],
  //     1,
  //     {
  //       y: 44,
  //       ease: Power3.easeInOut,
  //       delay: 0.8,
  //     },
  //     0.15,
  //     "start"
  //   )
  //     .from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
  //     .from(contentButton, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6); 
   return () => ctx.revert();
  }, []);
  return (
    <React.Fragment>
      <div className="gallery product-smoth-scroll">
        <div className="left">
          <div className="details">Welcome To My Home.com
          <p>TvRoom </p>
          </div>
          <div className="details">Brand Product2</div>
          <div className="details">Brand Agency </div>
        </div>
        <div className="rightBox">
          <div className="right-inner-content">
            <div className="photo"> <img className="imgage" src={Tvroom} /></div>
            <div className="photo"><img className="imgage" src={Bedroom} /></div>
            <div className="photo"><img className="imgage" src = {Kitchen} /></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
