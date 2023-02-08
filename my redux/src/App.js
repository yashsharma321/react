 import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Mydashboard from "./dashboard";
import Myapi from "./api";
import Myuser from "./user";
import Myproduct from "./product";


function App() {
  return (
    <HashRouter>
      <div className="container mt-3 mb-4">
          <div className="row">
            <div className="col-lg-4 text-center">
                <h2 className="text-danger"> React and Redux </h2>
            </div>
            <div className="col-lg-8 text-end">
                <Link className="btn btn-primary m-3" to="/"> Dashboard </Link>
                <Link className="btn btn-info m-3" to="/user"> Manage User </Link>
                <Link className="btn btn-success m-3" to="/product"> Manage Products </Link>
                <Link className="btn btn-warning m-3" to="/api"> Manage Api </Link>
            </div>
          </div>
      </div>

      <Routes>
          <Route exact path="/" element={ <Mydashboard/> } />
          <Route exact path="/user" element={ <Myuser/> } />
          <Route exact path="/product" element={ <Myproduct/> } />
          <Route exact path="/api" element={ <Myapi/> } />
      </Routes>
    </HashRouter>
  );
}

export default App;
