import React, {useState} from "react";

const Hookpage2 = () => {
    
    let [userlist, updateUser] = useState(["Krishna", "Balram", "Govind", "Mohan", "Hari", "Baldev"]);

    const save = () => {
        let newuser = document.getElementById("abc").value;
        updateUser(userlist = [...userlist, newuser]);
    }

    return(
        <div className="container">
            <h1>Array + useState()</h1>
            <input type="text" id="abc"/>
            <button onClick={save}>Add a new</button>
            {
                userlist.map((name,index)=>{
                    return(
                        <p key={index}>{index} # {name}</p>
                    )
                })
            }
        </div>
    )
}

export default Hookpage2;