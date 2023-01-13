import React, {useState} from 'react';
const FormValidation = () => {

    let[msg, updateMsg] = useState("");
    let[fullname, pickName] = useState("");
    let[nameError, updateNameError] = useState("");

    let[mobileno, pickMobile] = useState("");
    let[mobileError, updateMobileError] = useState("");

    let[emailid, pickEmail] = useState("");
    let[emailError, updateEmailError] = useState("");

    let[password, pickPassword] = useState("");
    let[passError, updatePassError] = useState("");

    let[address, pickAddress] = useState("");
    let[addressError, updateAddresssError] = useState("");

    let[tnc, pickTnc] = useState("");
    let[tncError, updateTncError] = useState("");

    const validate = () =>{
        var formstatus = true;

        if(fullname == ""){
            updateNameError("Please enter your name !");
            formstatus = false;
        }else{
            updateNameError("");
        }

        var mpattern = /^[0]?[6789]\d{9}$/;
        if(! mpattern.test(mobileno))                                     
        {
            updateMobileError("Please enter valid mobile no !");
            formstatus = false;
        }else{
            updateMobileError("");
        }

        var epattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if(! epattern.test(emailid) )
        {
            updateEmailError("Please enter valid email id !");
            formstatus = false;
        }else{
            updateEmailError("");
        }

        if(password == "" || password.length >8 || password.length<6)
        {
            updatePassError("Please Enter 6 to 8 chars !");
            formstatus = false;
        }else{
            updatePassError("");
        }

        if(address == "" || address.length<25)
        {
            updateAddresssError("Please Enter Full Address");
            formstatus = false;
        }else{
            updateAddresssError("");
        }

        if(tnc != true){
            updateTncError("Terms & Conditions are required");
            formstatus = false;
        }else{
            updateTncError("");
        }

        if(formstatus == false){
            updateMsg("Invalid form input !");
        }else{
            updateMsg("Please Wait Submitting to server...");
        }
    }

    return(
        <div className='container'>
            <h1>Validation</h1>
            <p>{msg}</p>
            <table align='center' cellPadding="10">
                <tbody>
                    <tr valign="top">
                        <th>Full Name</th>
                        <td>
                            <input type="text" onChange={obj=>pickName(obj.target.value)} value={fullname} />
                            <p><i>{nameError}</i></p>
                        </td>
                        <th>Mobile No</th>
                        <td>
                            <input type="number" onChange={obj=>pickMobile(obj.target.value)} value={mobileno} />
                            <p><i>{mobileError}</i></p>
                        </td>
                    </tr>
                    <tr valign="top">
                        <th>e-Mail Id</th>
                        <td>
                            <input type="email" onChange={obj=>pickEmail(obj.target.value)} value={emailid} />
                            <p><i>{emailError}</i></p>
                        </td>
                        <th>Password</th>
                        <td>
                            <input type="password" onChange={obj=>pickPassword(obj.target.value)} value={password} />
                            <p><i>{passError}</i></p>
                        </td>
                    </tr>

                    <tr valign="top">
                        <th>Address</th>
                        <td colSpan="3">
                            <textarea cols="63" rows="4"
                            onChange={obj=>pickAddress(obj.target.value)} value={address}></textarea>
                            <p><i>{addressError}</i></p>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={4} align="left">
                            <input type="checkbox" onChange={obj=>pickTnc(obj.target.checked) }/>
                            Agree on Terms & Conditions
                            <p><i>{tncError}</i></p>
                        </td> 
                    </tr>
                    <tr>
                        <th colSpan="2">
                            <button onClick={validate}>Validate</button>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default FormValidation;