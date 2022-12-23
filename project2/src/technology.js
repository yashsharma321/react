const TechnologyList = () => {
    let technologies = ["PHP", "Python", "SQL", "MongoDB", "HTML", "ReactJS", "AngularJS", "Kotlin", "Flutter", "NodeJS"];

    return(
        <div className="container">
        <h2>Total technologies - {technologies.length}</h2>
        {
            technologies.map((technology,index)=>{
                return(
                    <p key={index} className='item'>{technology}</p>
                )
            })
    }
        </div>
    )
}

export default TechnologyList;