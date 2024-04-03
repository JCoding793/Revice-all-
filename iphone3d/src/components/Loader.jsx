import React from 'react'
import AnimtedLogo from "../assets/images/logo-animated.gif";
export default function Loader() {
  return (
    <div className='loader'>
        <img className='logo' src={AnimtedLogo} alt='apple loader' />
    </div>
  )
}
