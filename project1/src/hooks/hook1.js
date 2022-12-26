import React, {useState} from  "react";

const Hookpage1 = () => {

    //Array destructuring

    let city = ["Bangalore", "Pune", "Hyderabad", "Chennai", "Kolkata", "Delhi"];
    const [ Bangalore ,  Pune ,  Hyderabad ,  Chennai , K ,  Delhi] = city;

    const [B, P, H] = city;

    // a = state variable, b = state function | by default first element is undefined and second element is a function that work to change first element.
    // useState returns two values undefined & function() | function is the only way to change the value of first element after making changes automatically DOM gets updated.
    // auto binding happens DOM gets updated.

    let [a,b] = useState(100); // [undefined function()]
    let [msg, updateMsg] = useState("");

    const addValue = () => {
        b( a + 10 ); 
        updateMsg("It is click to + by 10");
    }

    const minusValue = () => {
        b( a - 15 );
        updateMsg("Sorry the value is getting down...");
    }

    return(
        <div className="container">
            <h1> How to use useState() hooks </h1>
            <p> { city[3] } </p>
            <p> { Delhi } </p>
            <p> { K } </p>
            <h2>The value of a is: {a}</h2>

            <button onClick={addValue}>click to + by 10</button>
            <button onClick={minusValue}>click to - by 15</button>
            <p>{msg}</p>
        </div>
    )
}

export default Hookpage1;