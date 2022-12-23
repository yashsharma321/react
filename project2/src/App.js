import {HashRouter, Link, Routes, Route} from 'react-router-dom';
import UserList from './user';
import Citynames from './city';
import ProductList from './product';
import CompanyList from './company';
import TechnologyList from './technology';

function App() {
  return (
    <HashRouter>
      <ul>
        <li> <Link to="/" className='pagelink'> Sl. No. </Link> </li>
        <li> <Link to="/company" className='pagelink'> Company </Link> </li>
        <li> <Link to="/city" className='pagelink'> City </Link></li>
        <li> <Link to="/user" className='pagelink'> User </Link></li>
        <li> <Link to="/product" className='pagelink'> Product </Link></li>
        <li> <Link to="/technology" className='pagelink'> Technology </Link></li>
      </ul>

      <Routes>
        <Route exact path="/" element={ <UserList /> } />
        <Route exact path="/company" element={ <CompanyList /> }/>
        <Route exact path="/city" element={ <Citynames /> }/>
        <Route exact path="/user" element={ <UserList /> }/>
        <Route exact path="/product" element={ <ProductList /> }/>
        <Route exact path="/technology" element={ <TechnologyList /> }/>
      </Routes>

  
    </HashRouter>
  );
}

export default App;
