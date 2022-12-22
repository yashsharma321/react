import {HashRouter, Link, Routes, Route} from 'react-router-dom';

import Myhome from "./home";
import AboutUs from "./about";
import ContactUs from "./contact";
import Ourservices from "./service";
import Mycustomer from "./customer";
import Pagefooter from "./footer";

function App() {
    return (
      <HashRouter>        
        <ul>
           <li> <Link to="/" className='pagelink'> Home </Link> </li>
           <li> <Link to="/page1" className='pagelink'> About Us </Link> </li>
           <li> <Link to="/page3" className='pagelink'> Contact Us </Link> </li>
           <li> <Link to="/page4" className='pagelink'> Services </Link> </li>
           <li> <Link to="/page5" className='pagelink'> Customer </Link> </li>      
        </ul>
        
        <Routes>
          <Route exact path = "/" element={ <Myhome /> } />             
          <Route exact path="/page1" element={ <AboutUs /> } />
          <Route exact path="/page2" element={ <ContactUs /> } />
          <Route exact path="/page3" element={ <Ourservices /> } />
          <Route exact path="/page4" element={ <Mycustomer /> } />
        </Routes>
        
        <Pagefooter />
      </HashRouter>
    );
}

export default App;

//user-->browser-->index.html-->index.js-->app.js(home.js, about.js)