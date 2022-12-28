import React, {useState} from 'react';

const Citynames = () => {
    let [cities, updateCities] = useState(["Kolkata", "Bangalore", "Pune", "Hyderabad", "Delhi", "Punjab", "Siliguri", "Darjeeling", "Chennai"]);
    let [newcity, updateCity] = useState("");
    
    const save  = () => {
        updateCities(cities = [...cities, newcity]);
        updateCity("");
    }

    const removeCity = (delindex) => {
        cities.splice(delindex,1);
        updateCities(cities = [...cities]);
    }
    
    return(
        <div className="container">
            <h2>Total Cities - {cities.length}</h2>
            <div>
                <input className='cityinput' type="text" onChange={xyz=> updateCity(xyz.target.value)} value={newcity} />
                <button className='citybtn' onClick={save}><b>Save</b></button>
            </div>
            <div className="citylist">
            {
                cities.map((city, index)=>{
                    return(
                        <div key={index}>
                            <p>{index}. {city}</p>
                            <button className='citybtn' onClick={removeCity.bind(this, index)}>Delete</button>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Citynames;