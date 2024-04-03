import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import SoundSection from "./components/SoundSection";
import DisplaySection from "./components/DisplaySection";
import WebgiViwer from "./components/WebgiViwer";
import Loader from "./components/Loader";
import { useRef } from "react";
function App() {
  const contentRef = useRef(null);        
  const WebgiViwerRef = useRef(null);
  const handlePreview = () =>{
  WebgiViwerRef.current.triggerPreview();

}
console.log(contentRef)
  return (
    <div className="App">
      <Loader />
      <div id="content" ref={contentRef}>
      <Nav />
      <Jumbotron />
      <SoundSection />
      <DisplaySection triggerPreview={handlePreview}/>
      </div>
      <WebgiViwer contentRef={contentRef} ref={WebgiViwerRef}/>
    </div>
  );
}

export default App;
