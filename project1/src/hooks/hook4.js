
import React, {useState} from "react";

const Hookpage4 = () =>{
    let [userdata, updateData] = useState ([
        {
            "name": "Ganesh",
            "edu": "MCA",
            "year": "2014",
            "grade": "A",
            "mobile":"999999999",
            "city": "Bangalore",
            "state": "Karnataka"
        },
        {
            "name": "Krishna",
            "edu": "PHD",
            "year": "2019",
            "grade": "A",
            "mobile":"8888888888",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "name": "Balram",
            "edu": "CA",
            "year": "2018",
            "grade": "A",
            "mobile":"777777777",
            "city": "Chennai",
            "state": "Tamil Nadu"
        }

    ])

    let[userdetails, updateDetails] = useState(userdata[0]);

    const getUser = (index) => {
        updateDetails( userdata[index] );
    }

    return(
        <div className="container">
            <h1>State Array Object, Index, Update State</h1>
            <div className="userblock">
            
                <div className="userlist">
                    <h2>Available Users</h2>
                    {
                        userdata.map((uinfo,index)=>{
                            return(
                                <p  key={index} onClick={getUser.bind(this, index)}>{uinfo.name}</p>
                            )
                        }) // <p key={index} onClick={updateDetails.bind(this, userdata[index])}>{uinfo.name}</p>
                    }
                </div>

                <div className="userinfo">
                    <h2> User Data </h2>
                    <table width="60%" cellPadding="10">
                        <tbody>
                            <tr>
                                <td>Full Name</td>
                                <td>{userdetails.name}</td>
                            </tr>                 
                            <tr>
                                <td>Education</td>
                                <td>{userdetails.edu}</td>
                            </tr>
                            <tr>
                                <td>Year</td>
                                <td>{userdetails.year}</td>
                            </tr>
                            <tr>
                                <td>Grade</td>
                                <td>{userdetails.grade}</td>
                            </tr>
                            <tr>
                                <td>Mobile</td>
                                <td>{userdetails.mobile}</td>
                            </tr>
                            <tr>
                                <td>City</td>
                                <td>{userdetails.city}</td>
                            </tr>
                            <tr>
                                <td>State</td>
                                <td>{userdetails.state}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Hookpage4;