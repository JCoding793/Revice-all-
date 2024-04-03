import React from 'react'
import Logo from '../assets/images/logo.svg';
import Search from "../assets/images/search.svg";
import Store from "../assets/images/store.svg";
export default function Nav() {
  return (
    <nav className='nav-wraper'>
        <div className="nav-content">
            <ul className="list-styled">
                <li> <img src={Logo} alt="apple"/> </li>
                <li> <span href={""} className='link-styled'>Store</span></li>
                <li> <span href={""} className='link-styled'>Mac</span></li>
                <li> <span href={""} className='link-styled'>iPad</span></li>
                <li> <span href={""} className='link-styled'>iPhone</span></li>
                <li> <span href={""} className='link-styled'>Watch</span></li>
                <li> <span href={""} className='link-styled'>AirPods</span></li>
                <li> <span href={""} className='link-styled'>Tv & Home</span></li>
                <li> <span href={""} className='link-styled'>Entainment</span></li>
                <li> <span href={""} className='link-styled'>Accessories</span></li>
                <li> <span href={""} className='link-styled'>Support</span></li>
                <li> <img src={Search} alt='"Search' /></li>
                <li> <img src={Store} alt='"Search' /></li>
            </ul>
        </div>
    </nav>
  )
}
