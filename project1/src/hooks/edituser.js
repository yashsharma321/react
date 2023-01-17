import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";

const EditRecord = () =>{
    let{userid} = useParams();
    let[fullname, pickName] = useState("");
    let[mobileno, pickNumber] = useState("");
    let[cityname, pickCity] = useState("");
    let[productname, pickProduct] = useState("");

    const getCustomer = () => {
        var url = "http://localhost:1234/customerlist/"+userid;
        fetch(url)
        .then(response =>response.json())
        .then(customerArray => {
            pickName( customerArray.name );
            pickNumber( customerArray.mobile );
            pickCity( customerArray.city );
            pickProduct( customerArray.product );
        })
    }

    useEffect(()=>{
        getCustomer();
    },[1]);

    const save = () => {
        var url = "http://localhost:1234/customerlist/"+userid;
        var customerinfo = {
            name:fullname,
            mobile:mobileno,
            city:cityname,
            product:productname
        };

        var postoption = {
            headers: {'Content-Type':'application/json'},
            method: "PATCH",   //put = only 1 change >> all 4 updates // patch = only 1 change >> only 1 change
            body:JSON.stringify(customerinfo) // array to JSON
        }
        fetch(url, postoption)
        .then(response=>response.json())
        .then(serverRes =>{
            updateMsg(fullname + " Updated Successfully !");
        })
    } 
    let[msg, updateMsg] = useState("");

    return(
        <div className="container">
            <h1> Edit User : {userid} </h1>
            <p align="center"> {msg} </p> 
            <table align='center' cellPadding={15}>
                <tbody>
                    <tr>
                        <th>Customer Name</th>
                        <td>
                            <input type="text" 
                            onChange={obj=>pickName(obj.target.value)}
                            value={fullname}/>
                        </td>
                    </tr>
                    <tr>
                        <th>Mobile No</th>
                        <td>
                            <input type="text"
                            onChange={obj=>pickNumber(obj.target.value)} 
                            value={mobileno}/>
                        </td>
                    </tr>
                    <tr>
                        <th>City Name</th>
                        <td>
                            <input type="text"
                            onChange={obj=>pickCity(obj.target.value)} 
                            value={cityname}/>
                        </td>
                    </tr>
                    <tr>
                        <th>Product Name</th>
                        <td>
                            <input type="text"
                            onChange={obj=>pickProduct(obj.target.value)} 
                            value={productname}/>
                        </td>
                    </tr>
                    <tr>
                        <th colSpan={2}>
                            <button onClick={save}> Update User </button>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default EditRecord;