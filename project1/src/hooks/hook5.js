import React from "react";
import { useParams } from "react-router-dom";

const Hookpage5 = () =>{
    const {city} = useParams();
    return(
        <div className="container">
            <h1> useParams() hook Example </h1>
            <h2> Your City: {city} </h2>
        </div>
    )
}

export default Hookpage5;