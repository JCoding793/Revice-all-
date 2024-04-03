import React,{useEffect, useRef, useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Featured from "../components/Featured";
import About from "../components/About";
import Gallery from "../components/Gallery";
import CustomeCursor from "../CustomeCursor";
import "../styles/home.scss";
import Navbar from "../components/Navbar";
import UserLocoScroll from "../hooks/userLocoScroll";

const Home = ()=>{
const [preloader , setPreloader] = useState(true);

UserLocoScroll(!preloader)
const [timer, setTimer] = useState(3);

const  id = useRef(null);

// const clear = ()=>{
//    window.clearInterval(id.current);
//    setPreloader(false); 
// }

// useEffect(()=>{
// id.current = window.setInterval(()=>{
// setTimer((timer) => timer -1)
// } , 1000)
// },[]);


// useEffect(()=>{
// if(timer === 0){
//     clear();
// }
// },[timer]);
    return(
        <>
        <CustomeCursor />
        {/* {preloader ? (<div className="loader-wrapper absolute">
            <h1>Flirty flowers</h1>
            <h2>Rio de Janeiro</h2>
        </div>) : ( */}
            <div className="main-container" id="main-container" data-scroll-container>
            <Navbar />
            <Header />
            <Featured />
            <About />
            <Gallery />
            <Footer />
        </div>
        {/* )} */}
        
        </>
    )
}
export default Home;

