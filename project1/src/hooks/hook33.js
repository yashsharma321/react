import React, {useState} from "react";

const Hookpage3 = () => {
    let[emplist, updateEmp] = useState ([]);
    let[fullname, pickName] = useState("");
    let[mobileno, pickMobile] = useState("");
    let[salary, pickSalary] = useState("");
    let[deptname, pickDept] = useState("");
    let[msg, updateMsg] = useState("");
 
    const save = () => {
        let newemp = {
            name : fullname,
            mobile : mobileno,
            salary : salary,
            dept : deptname
        }
        
        if(indexno == -1){
            updateEmp(emplist = [...emplist, newemp]);
            updateMsg(fullname + " Added Successfully !");
        }
        else{
            emplist[indexno] = newemp;
            updateEmp(emplist = [...emplist]);
            updateMsg(fullname + " Updated Successfully !");
            updateBtn("Add Employee");
            updateIndex(-1);
        }
        
        pickName(""); pickMobile(""); pickSalary(""); pickDept("");
    
    }

        const deleteEmp = (index, name) => {
        emplist.splice(index,1);
        updateEmp(emplist = [...emplist]);
        updateMsg(name + " Deleted Successfully !")
    }

    let[btntext, updateBtn] = useState("Add Employee");
    let[indexno, updateIndex] = useState(-1);

    const editEmp = (index) => {
        pickName( emplist[index].name );
        pickMobile( emplist[index].mobile );
        pickSalary( emplist[index].salary );
        pickDept( emplist[index].dept );
        updateIndex(index);
        updateBtn("Update Employee");
    }
    
    return(
        <div className="container">
            <h1>Array of Object Add, List, Delete</h1>
            <p> जय श्री राम {msg} </p>
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
                            <button onClick={save}>{btntext}</button>
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
                    { // bind() is used when we pass any argument
                        emplist.map((emp, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{emp.name}</td>
                                    <td>{emp.mobile}</td>
                                    <td>{emp.salary}</td>
                                    <td>{emp.dept}</td>
                                    <td>
                                        <button onClick={editEmp.bind(this, index)}>Edit</button>
                                        <button onClick={deleteEmp.bind(this, index, emp.name)}>Delete</button>
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