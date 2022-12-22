function AboutUs(){
    let item = ['Apple', 'Water', 'Milk', 'Rice', 'Curd', 'Oranges'];
    return(
        <div className="container">
            <h1> Total items: {item.length} </h1>
            {
                item.map((name, index)=>{
                    return(
                        <p className="item" key={index}>{index}. {name} </p>
                    )
                })
            }
        </div>
    )
}

export default AboutUs;