const Details = (props) =>{
    return(
        <div className="myuser">
            <h4>{props.name}</h4>
            <p>Age - {props.age} Years</p>
            <p>Education - {props.edu}</p>
            <p>Year - {props.year}</p>
            <p>Grade - {props.g}</p>
        </div>
    )
}

export default Details;