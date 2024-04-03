import React, { useEffect, useState , useRef} from "react";

import "./style.scss";
import gsap from 'gsap';
import ScrollTrigger from  "gsap/ScrollTrigger";
import cn from "classnames";
const images = [
  {
    src: "https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1345&q=100",
    title: "Dracaena Trifasciata",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src: "https://images.unsplash.com/photo-1558603668-6570496b66f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=100",
    title: "Cereus Penuvianus",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=100",
    title: "Calliope",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src: "https://images.unsplash.com/photo-1611145367651-6303b46e4040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2006&q=100",
    title: "Golden Pothos",
    subtitle: "Living Room",
    category: "Shooting / Adv.Campaing",
  },
];

function GalleryItem({
  src,
  categroy,
  title,
  subtitle,
  updateActiveImage,
  index,
}) {
  return (
    <div className="gallery-item-wrapper" data-scroll-section>
      <div className="gallery-item"></div>
      <div className="gallery-item-info">
        <h1 className="gallery-info-title">{title}</h1>
        <h6 className="gallery-info-subtitle">{subtitle}</h6>
        <p className="gallery-info-category">{categroy}</p>
      </div>
      <div
        className="gallery-item-image"
        style={{backgroundImage: `url(${src})`}}
      ></div>
    </div>
  );
}

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(1);
  const ref = useRef(null);
  useEffect(()=>{

    const sections = gsap.utils.toArray(".gallery-item-wrapper");
      gsap.to(sections ,{
        xPercent: -100 * (sections.length-1),
        ease: 'none',
        scrollTrigger:{
          start: 'top top',
          trigger: ref.current,
          scroll: '#main-container',
          pin: true,
          scrub: 0.5,
          span: 1/(sections.length-1),
          end: ()=>`+=${ref.current.offsetWidth}`
        }
      });
        ScrollTrigger.refresh();
  } , [])
  return (
    <section className="section-wrapper gallery-wrap">
       <div className="gallery" ref={ref}>
        <div className="gallery-counter">
          <span>{activeImage}</span>
          <span className="divider" />
          <span>{images.length}</span>
          </div>
        {images.map((item, index)=>(
          <GalleryItem
            key={item.src}
            index={index}
            src={item.src}
            title={item.title}
            subtitle={item.subtitle}
            categroy={item.category}
            updateActiveImage={(index) => setActiveImage(index + 1)}
          />
        ))}
      </div>
    </section>
  );
}
