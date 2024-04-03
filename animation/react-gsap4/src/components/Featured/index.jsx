import React from "react";

import "./style.scss";
import photos from "../../data";
export default function Featured() {
  const [firstUrl, secondUrl] = photos;
  return (
    <section className="featured-section" >
    <div className="featured-row-layout">
      <h6>green</h6>
      <img className="is-reveal" src={firstUrl} alt=".." data-scroll/>
    </div>
    <div className='featured-column-layout'>
      <h6>lily</h6>
      <img className="is-reveal" src={secondUrl} alt=".." data-scroll/>
    </div>
  </section>
  );
}
