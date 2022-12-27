import React, {useState} from "react";

const Hookpage3 = () => {
    let [emplist, updateEmp] = useState ([]);

    const save = () => {
        let newemp = {
            name : "Ganesh",
            mobile : "9878987898",
            salary : "120000",
            dept : "Marketing"
        }

        updateEmp(emplist = [...emplist, newemp]);
    }

    return(
        <div className="container">
            <h1>Array of Object Add, List, Delete</h1>
            <p>जय श्री राम </p>
            <table align="left" cellPadding={10}>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <td>Mobile</td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <td>Salary</td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <td>Department</td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button onClick={save}>Add Employee</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table align="right" cellPadding={10}>
                <thead>
                    <tr>
                        <th>Emp Id</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Salary</th>
                        <th>Department</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        emplist.map((emp, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{emp.name}</td>
                                    <td>{emp.mobile}</td>
                                    <td>{emp.salary}</td>
                                    <td>{emp.dept}</td>
                                    <td><button>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>

        </div>
    )
}

export default Hookpage3;