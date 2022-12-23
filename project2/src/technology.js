const TechnologyList = () => {
    let technologies = ["PHP", "Python", "SQL", "MongoDB"];

    return(
        <div className="container">
        {
            technologies.map((technology,index)=>{
                return(
                    <p key={index}>{technology}</p>
                )
            })
    }
        </div>
    )
}

export default TechnologyList;