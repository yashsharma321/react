import React, {useState} from "react";

const Hookpage2 = () => {
    
    let [userlist, updateUser] = useState(["Krishna", "Balram", "Govind", "Mohan", "Hari", "Baldev"]);
    let [newuser, pickUser] = useState("Apple");

    const save = () => {
        updateUser(userlist = [...userlist, newuser]); // a = a + b
        pickUser(""); // reset to empty the newuser variable
    }
    
    const deleteuser = (userindex) => {
        userlist.splice (userindex,1); //Delete 1 user
        updateUser (userlist = [...userlist]);
    }
    
    return(
        <div className="container">
            <h1>Array + useState()</h1>
            <p> {newuser} </p>

            <input type="text" 
                onChange = { (xyz) => pickUser( xyz.target.value )}
                value = {newuser}    
            />

            <button onClick={save}> Add New </button>
            <br/><br/>
            
            <table align="center" border={1} cellPadding={10} cellSpacing="0">
                <thead>
                    <tr>
                        <th>Sl. No.</th>
                        <th>Full Name</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userlist.map((name,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{name}</td>
                                    <td> 
                                        <button onClick={deleteuser.bind(this, index)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        }) // Binds protects from auto loading
                    }
                </tbody>

            </table>
        </div>
    )
}

export default Hookpage2;