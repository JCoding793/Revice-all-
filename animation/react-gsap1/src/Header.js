import React, {useRef, useEffect} from 'react'
import './Header.css';
function Header({timeline}) {
let headerLogo = useRef(null);
let menu = useRef(null);

useEffect(()=>{
    timeline.from(headerLogo, 1, {
        opacity: 0,
        y:100,

    })
    timeline.from(menu , 1 , {
        opacity: 0,
        y:100,
    }, "-=.5")
}, [])
    return (
        <div>
            <div className="header">
                <div className="logo" ref={el => headerLogo =el}>
                    LOGO
                </div>
                <div className="menu"  ref={el => menu =el}>
                    <ul>
                        <li>Shop</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header