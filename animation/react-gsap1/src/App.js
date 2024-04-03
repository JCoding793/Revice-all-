import logo from './logo.svg';
import './App.css';
import Header  from './Header';
import gsap from 'gsap'
import MainContent from './MainContent';
function App() {
  let timeline = new gsap.timeline();
  return (
    <div className="App">
      <Header timeline = {timeline}/>
      <MainContent  timeline = {timeline}/>
    </div>
  );
}

export default App;
