const ContactUs = () => {
    let customer = [
        {name: "Ganesh", age: 39, city: "Bangalore", edu: "MCA" },
        {name: "Mahesh", age: 30, city: "Pune", edu: "B.tech" },
        {name: "Ramesh", age: 37, city: "Kolkata", edu: "B.tech" },
        {name: "Shyam", age: 36, city: "Hyderabad", edu: "B.tech" },
        {name: "Mohan", age: 35, city: "Ranchi", edu: "B.tech" },
        {name: "Mohit", age: 34, city: "Vellore", edu: "B.tech" },
        {name: "Vinay", age: 32, city: "Gangtok", edu: "B.tech" }
    ]
    return(
        <div className="container">
            <h1>Total file: {customer.length}</h1>
                <table cellPadding={10} bordercolor="green">
                    <thead>
                        <tr>
                            <th>Sl No.</th>
                            <th>Full Name</th>
                            <th>Age</th>
                            <th>City</th>
                            <th>Education</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        customer.map((cinfo, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{cinfo.index}</td>
                                    <td>{cinfo.name}</td>
                                    <td>{cinfo.age}</td>
                                    <td>{cinfo.city}</td>
                                    <td>{cinfo.edu}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
        </div>
    )
}

export default ContactUs;