import Details from "./userdetails";

const Mycustomer = () =>{
    let userlist = [
        {name: "Krishna", age:31, edu:"MCA", year: 2011, grade: "B"},
        {name: "Balram", age:32, edu:"MCA", year: 2013, grade: "A"},
        {name: "Keshav", age:30, edu:"MCA", year: 2014, grade: "B"},
        {name: "Madav", age:33, edu:"MCA", year: 2015, grade: "C"},
        {name: "Govind", age:34, edu:"MCA", year: 2012, grade: "D"},
        {name: "Gopal", age:35, edu:"MCA", year: 2010, grade: "F"}
    ]
    return(
        <div className="container">
            <h1>Props, map() Example</h1>
            <div className="datagrid">
            {
                userlist.map((userinfo, index) => {
                    return(
                        <Details 
                            key={index} 
                            name={userinfo.name} 
                            age={userinfo.age} 
                            edu={userinfo.edu} 
                            year={userinfo.year} 
                            g={userinfo.grade} 
                        />
                    )
                })
            }
            </div>
        </div>
    )
}

export default Mycustomer;