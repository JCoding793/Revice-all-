import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from './Home';
import Contact from './Contact'
import About from './About'
function App() {
  return (
    <div className="App">
      <Router>
        <div className="header">
          <div className="logo">
            Taimoor <br /> Shahzada
          </div>
          <ul>
            <li>
              <Link className="link" to="/">Home</Link>
            </li>
            <li>
              <Link className="link" to="/about">About</Link>
            </li>
            <li>
              <Link className="link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
