const Citynames = () =>{
    let cities = ["Kolkata", "Bangalore", "Pune", "Hyderabad", "Delhi", "Punjab", "Siliguri", "Darjeeling", "Bottle", "Chennai"];
    return(
        <div className="container">
            {
                cities.map((city, index)=>{
                    return(
                        <p key={index}>{city}</p>
                    )
                })
            }
        </div>
    )
}

export default Citynames;