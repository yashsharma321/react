import {HashRouter, Link, Routes, Route} from 'react-router-dom';

import Myhome from "./home";
import AboutUs from "./about";
import ContactUs from "./contact";
import Ourservices from "./service";
import Mycustomer from "./customer";
import Pagefooter from "./footer";
import Myuser from './user';

import Hookpage1 from './hooks/hook1';
import Hookpage2 from './hooks/hook2';
import Hookpage3 from './hooks/hook3';
import Hookpage4 from './hooks/hook4';
import Hookpage5 from './hooks/hook5';

function App() {
    return (
      <HashRouter>        
        <ul>
          <li> <Link to="/" className='pagelink'> Home </Link> </li>
          <li> <Link to="/page1" className='pagelink'> About Us </Link> </li>
          <li> <Link to="/page2" className='pagelink'> Contact Us </Link> </li>
          <li> <Link to="/page3" className='pagelink'> Services </Link> </li>
          <li> <Link to="/page4" className='pagelink'> Customer </Link> </li>      
          <li> <Link to="/page5" className='pagelink'> Props </Link> </li>      
          <li> <Link to="/page6" className='pagelink'> H-1 </Link> </li>      
          <li> <Link to="/page7" className='pagelink'> H-2 </Link> </li>   
          <li> <Link to="/page8" className='pagelink'> H-3 </Link></li>   
          <li> <Link to="/page9" className='pagelink'> H-4 </Link> </li>   
          <li> <Link to="/page10/Bangalore" className='pagelink'> H-5 </Link></li>   
        </ul>
        
        <Routes>
          <Route exact path ="/page10/:city" element= { <Hookpage5 /> } />
          <Route exact path ="/page9" element= { <Hookpage4 /> } />
          <Route exact path ="/page8" element= { <Hookpage3 /> } />
          <Route exact path ="/page6" element={ <Hookpage1 /> } />
          <Route exact path ="/page7" element={ <Hookpage2 /> } />
          <Route exact path ="/" element={ <Myhome /> } />             
          <Route exact path="/page1" element={ <AboutUs /> } />
          <Route exact path="/page2" element={ <ContactUs /> } />
          <Route exact path="/page3" element={ <Ourservices /> } />
          <Route exact path="/page4" element={ <Mycustomer /> } />
          <Route exact path="/page5" element={ <Myuser />} />
        </Routes>
        
        <Pagefooter />
      </HashRouter>
    );
} // :city = colon represents variable

export default App;

//user-->browser-->index.html-->index.js-->app.js(home.js, about.js)