import React from "react";
import { useParams, Link } from "react-router-dom";

const Hookpage5 = () =>{
    const {city, name, edu} = useParams();
    // using paramas we can receive the value from the browser url.
    return(
        <div className="container">
            <h1> useParams() hook Example </h1>
            <p> 
                <Link to="/page10/Ganesh/MCA/Bangalore" className="xyz"> Ganesh </Link> 
                <Link to="/page10/Mahesh/BCA/Mangalore" className="xyz"> Mahesh </Link> 
                <Link to="/page10/Raj/MA/Pune" className="xyz"> Raj </Link> 
                <Link to="/page10/Ajith/CA/Delhi" className="xyz"> Ajith </Link> 
                <Link to="/page10/Subodh/DCA/Chennai" className="xyz"> Subodh </Link> 
                <Link to="/page10/Naresh/BTECH/Kolkata" className="xyz"> Naresh </Link> 
            </p>
            <h2> Your Name: {name} </h2>
            <h2> Your City: {city} </h2>
            <h2> Education: {edu} </h2>
        </div>
    )
}

export default Hookpage5;