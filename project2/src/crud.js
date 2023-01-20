import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Crud = () => {

    let[allusers, updateUsers] = useState([]);
    let[msg, updateMsg] = useState("");
    let[btn, updateBtn] = useState("Save");

    const getUsers = () =>{
        var url = "http://localhost:1234/userlist";
        fetch(url)
        .then(response=>response.json())
        .then(userArray=>{
            updateUsers(userArray);
        })
    }

    useEffect(()=>{
        getUsers();
    },[1]);

    let[fullname, pickName] = useState("");
    let[mobile, pickMobile] = useState("");
    let[email, pickEmail] = useState("");
    let[address, pickAddress] = useState("");

    const save = () => {
        let userinfo = {
            "name":fullname,
            "mobile":mobile,
            "email":email,
            "address":address
        };

        if(userid > 0 )
        {
            var url = "http://localhost:1234/userlist/"+userid;
            var postoption = {
                headers: {'Content-Type': 'application/json'},
                method: "PUT",
                body: JSON.stringify(userinfo)
            }
        }
        else{
            var url = "http://localhost:1234/userlist";
            var postoption = {
                headers: {'Content-Type': 'application/json'},
                method: "POST",
                body: JSON.stringify(userinfo)
            }
        }
            
        fetch(url, postoption)
        .then(response=>response.json())
        .then(serRes=>{
            updateMsg(fullname + " Added Successfully !");
            getUsers();
            updateId(0);
            updateBtn("Save");
            pickName(""); pickMobile(""); pickEmail(""); pickAddress("");
        })
    }

    const deluser = (userid, name) => {
        var url = "http://localhost:1234/userlist/"+userid;
        var deloption = {
            headers: {'Content-Type': 'application/json'},
            method: "DELETE"
        }
        fetch(url, deloption)
        .then(response=>response.json())
        .then(serRes=>{
            updateMsg(name +" Deleted Successfully !" );
            getUsers();
        })
    }

    let[userid, updateId] = useState(0);

    const updateuser = (index) => {
        pickName(allusers[index].name);
        pickMobile(allusers[index].mobile);
        pickEmail(allusers[index].email);
        pickAddress(allusers[index].address);
        updateId(allusers[index].id);
        updateBtn("Update User");
    }

    return(
        <div id="container">
            <br/><br/><br/><br/><br/>
            <table align="left" cellPadding={10}>
                <tbody>
                    <tr align="center">
                        <th>Add New User</th>
                    </tr>
                    <tr>
                        <td>
                            <label>Full Name</label><br/>
                            <input type="text" 
                            onChange={obj=>pickName(obj.target.value)}
                            value={fullname} />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label>Mobile No</label><br/>
                            <input type="text" 
                            onChange={obj=>pickMobile(obj.target.value)}
                            value={mobile} />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label>e-Mail id</label><br/>
                            <input type="text" 
                            onChange={obj=>pickEmail(obj.target.value)}
                            value={email} />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label>Full Address</label><br/>
                            <textarea 
                            onChange={obj=>pickAddress(obj.target.value)}
                            value={address} ></textarea>
                        </td>
                    </tr>

                    <tr>
                        <td align='center'>
                           <button onClick={save}>{btn}</button>
                        </td>
                    </tr>
                </tbody>

            </table>

            <table align="right" cellPadding={15} border="1" cellSpacing="0">
                <thead>
                    <tr>
                        <td align="center" colSpan={6}>
                            <h3>{msg}</h3>
                        </td>
                    </tr>
                    
                    <tr>
                        <td align="center" colSpan={6}>
                            <h3>Available Users: {allusers.length}</h3>
                        </td>
                    </tr>
                    <tr>
                        <th>User Id</th>
                        <th>Full Name</th>
                        <th>Mobile No</th>
                        <th>e-Mail Id</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        allusers.map((user, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.mobile}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address}</td>
                                    <td>
                                        <button onClick={updateuser.bind(this, index)}>Edit</button>
                                        <button onClick={deluser.bind(this, user.id, user.name) }>Delete</button>
                                        <Link to = {`/edituser/${user.id}`}>Edit</Link> 
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

export default Crud;  