// Component name starts with caps letter. Here Myhome is a component.

function Myhome(){
    let city = ["Bangalore", "Pune", "Hyderabad", "Kolkata", "Chennai", "Delhi"];
    return(
        <div  className="container">
            <h1>Toatl City : {city.length}</h1>
            {
                city.map((cityname, index)=>{
                    return(
                        <p className="item" key={index}>{cityname}</p>
                    )
                })
            }
        </div>
    )
}

export default Myhome;