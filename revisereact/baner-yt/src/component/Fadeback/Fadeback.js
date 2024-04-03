import gsap,{Power3 , Power2 , Power1} from "gsap";
import { useLayoutEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import "./Fadeback.scss";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);



const data = [
  {
    id: 0,
    img: "https://hammeronline.in/cdn/shop/files/CategoryTWS.webp?v=1691475060&width=1920",
    Title: "EARBU",
    subTitle: "DS",
    desc: "Earbuds are basically a pair of tiny speakers that you wear inside your ears. At low volumes, they're useful little devices. But playing loud music so close to your eardrums can cause permanent hearing loss.",
  },
  {
    id: 1,
    img: "https://hammeronline.in/cdn/shop/files/SMARTWATCH.webp?v=1691475060&width=1920",
    Title: "SMART WATCH",
    subTitle: "DS",
    desc: "Earbuds are basically a pair of tiny speakers that you wear inside your ears. At low volumes, they're useful little devices. But playing loud music so close to your eardrums can cause permanent hearing loss.",
  },
  {
    id: 2,
    img: "https://hammeronline.in/cdn/shop/files/CategoryTWS.webp?v=1691475060&width=1920",
    Title: "EARBU",
    subTitle: "DS",
    desc: "Earbuds are basically a pair of tiny speakers that you wear inside your ears. At low volumes, they're useful little devices. But playing loud music so close to your eardrums can cause permanent hearing loss.",
  },
  {
    id: 3,
    img: "https://hammeronline.in/cdn/shop/files/SMARTWATCH.webp?v=1691475060&width=1920",
    Title: "SMART WATCH",
    subTitle: "DS",
    desc: "Earbuds are basically a pair of tiny speakers that you wear inside your ears. At low volumes, they're useful little devices. But playing loud music so close to your eardrums can cause permanent hearing loss.",
  },
 
];

const ZoomPageContainer = () => {
  useLayoutEffect(()=>{
      let ctx = gsap.context(()=>{

          const pinnedImage = document.querySelectorAll(".pinImage");

          pinnedImage.forEach((pinnedImage)=>{
            console.log("pinnedImage" , pinnedImage)

            const container = pinnedImage.querySelector('.pinImageContainer');
            const overlay = container.querySelector('.pinImageOverlay');
            const quote = pinnedImage.querySelector(".pinImageQutoeAuthor");
            const myQuote = pinnedImage.querySelector(".pinImageQutoe blockquote");
            
            let tl = gsap.timeline({

              scrollTrigger: {
                trigger: pinnedImage,
                start:"top top",
                // markers: true,
                pin: true,
                scrub: true,
              },
            });
            tl.to(container, {
              scale: 1.1,
              // duration: 1,
              // ease: Power2.easeInOut
            }, 0)
            tl.from (myQuote, {
              autoAlpha: 0 ,
              // duration: 1.2,
              // ease: Power1.easeInOut
            }, 0)
            tl.from (quote, {
              autoAlpha: 0 ,
              // duration: 1.2,
              // ease: Power1.easeInOut
            }, 0)
            tl.from(overlay, {
              autoAlpha: 0,
              // duration: 1.2,
              // ease: Power1.easeInOut
            } , 0)
          });
      });
      return ()=> ctx.revert()

  }, [])

  return (
    <div className="zoom_container">
      {data.map((index, indexItem) => {
        const { id, img, Title, subTitle, desc } = index;
        return (
          <div className="pinImage" key={indexItem}>
            <div className="pinImageContainer">
              <img src={img} alt={`img${id}`} />
              <div className="pinImageOverlay"></div>
            </div>
            <figure className="pinImageQutoe">
              <blockquote>{desc}</blockquote>
              <figcaption>
                <span className="pinImageQutoeAuthor">
                  {Title}
                  <span className="d-hero-stroke">{subTitle}</span>
                </span>
              </figcaption>
            </figure>
          </div>
        );
      })}
    </div>
  );
};

export default ZoomPageContainer;