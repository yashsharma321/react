const Citynames = () =>{
    let cities = ["Kolkata", "Bangalore", "Pune", "Hyderabad", "Delhi", "Punjab", "Siliguri", "Darjeeling", "Bottle", "Chennai"];
    return(
        <div className="container">
            <h2>Total cities - {cities.length}</h2>
            {
                cities.map((city, index)=>{
                    return(
                        <p key={index} className='item'>{city}</p>
                    )
                })
            }
        </div>
    )
}

export default Citynames;