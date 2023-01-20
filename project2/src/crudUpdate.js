import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

const Edituser = () => {

    let{userid} = useParams();
    let[fullname, pickName] = useState("");
    let[mobile, pickMobile] = useState("");
    let[email, pickEmail] = useState("");
    let[address, pickAddress] = useState("");    

    const getUsers = () => {
        var url = 'http://localhost:1234/userlist/'+userid;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            pickName(data.name);
            pickMobile(data.mobile);
            pickEmail(data.email);
            pickAddress(data.address);
        });
    }

    useEffect(() => {
        getUsers();
    }, [1]);
    
    const save = () => {
        let url = 'http://localhost:1234/userlist/'+userid;
        let data = {
            name: fullname,
            mobile: mobile,
            email: email,
            address: address
        };
        
        var postoption = {
            headers: {'Content-Type': 'application/json'},
            method: 'PATCH',
            body: JSON.stringify(data)
        }
        fetch(url, postoption)
        .then(response=>response.json())
        .then(serRes=>{
            updateMsg(fullname + ' Updated Successfully !')
        })
    }
    let[msg, updateMsg] = useState("");

    return(
        <div className='container'>
            <h2> Update User Details : {userid} </h2>
            <p> {msg} </p>            
            <table align="center" cellPadding={10}>
                <tbody>
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
                            <button onClick={save}> Update User </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default Edituser;