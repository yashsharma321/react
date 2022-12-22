let allservices = [
    {
        category: 'Software',
        data: ["PHP", "Node", "Java", "Python", "HTML"]
    },
    {
        category: 'Marketing',
        data: ["Sales", "BPO", "Banking", "Education"]
    }
];

const Ourservices = () =>{
    return(
        <div className="container">
            <h1> Our Services</h1>
            {
                allservices.map((service,index)=> {
                    return (
                        <div className="item" key={index}>
                            <h2>{service.category} - {service.data.length}</h2>
                            {
                                service.data.map((sname, index2)=>{
                                    return(
                                        <p key={index2}>{sname}</p>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Ourservices;