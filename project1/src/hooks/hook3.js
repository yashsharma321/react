import React, {useState} from "react";

const Hookpage3 = () => {
    let[emplist, updateEmp] = useState ([]);
    let[fullname, pickName] = useState("");
    let[mobileno, pickMobile] = useState("");
    let[salary, pickSalary] = useState("");
    let[deptname, pickDept] = useState("");
    let[msg, updateMsg] = useState("");
    let[clr, updateClr] = useState("blue");

    const save = () => {
        let newemp = {
            name : fullname,
            mobile : mobileno,
            salary : salary,
            dept : deptname
        }
        updateEmp(emplist = [...emplist, newemp]);
        updateClr("green");
        updateMsg(fullname + " Added Successfully !");
        pickName(""); pickMobile(""); pickSalary(""); pickDept("");
    }

    const deleteEmp = (index, name) => {
        emplist.splice(index,1);
        updateEmp(emplist = [...emplist]);
        updateClr("red");
        updateMsg(name + " Deleted Successfully !")
    }

    return(
        <div className="container">
            <h1> Array of Object Add, List, Delete </h1>
            <p style={{color:clr}}> जय श्री राम {msg} </p>
            <table align="left" cellPadding={10}>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>
                            <input type="text"
                            onChange={obj=>pickName(obj.target.value)}
                            value={fullname}/>
                        </td>
                    </tr>

                    <tr>
                        <td>Mobile</td>
                        <td>
                            <input type="text"
                            onChange={obj=>pickMobile(obj.target.value)}
                            value={mobileno}/>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>Salary</td>
                        <td>
                            <input type="text"
                            onChange={obj=>pickSalary(obj.target.value)}
                            value={salary}/>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>Department</td>
                        <td>
                            <input type="text"
                            onChange={obj=>pickDept(obj.target.value)}
                            value={deptname}/>
                        </td>
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
                        <th>Full Name</th>
                        <th>Mobile No</th>
                        <th>Salary</th>
                        <th>Department</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { //bind() is used when we pass amy argument
                        emplist.map((emp, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{emp.name}</td>
                                    <td>{emp.mobile}</td>
                                    <td>{emp.salary}</td>
                                    <td>{emp.dept}</td>
                                    <td>
                                        <button onClick={deleteEmp.bind(this,index, emp.name)}>Delete</button>
                                    </td>
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