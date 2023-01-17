import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Mycrud = () => {
    let [allcustomer, updateCustomer] = useState([]);
    let[msg, updateMsg] = useState("");
    let[mybtn, updateButton] = useState("Save Customer");

    const getCustomer = () => {
        var url = "http://localhost:1234/customerlist";
        fetch(url)
        .then(response =>response.json())
        .then(customerArray => {
            updateCustomer(customerArray);
        })
    }

    useEffect(()=>{
        getCustomer();
    },[1]);

    let[fullname, pickName] = useState("");
    let[mobileno, pickNumber] = useState("");
    let[cityname, pickCity] = useState("");
    let[productname, pickProduct] = useState("");

    const save = () => {
     
        var customerinfo = {
            name:fullname,
            mobile:mobileno,
            city:cityname,
            product:productname
        };

        if(userid > 0){
            var url = "http://localhost:1234/customerlist/"+userid;
            var postoption = {
                headers: {'Content-Type':'application/json'},
                method: "PUT",   
                body:JSON.stringify(customerinfo) // array to JSON
            }
        }
        else{
            var url = "http://localhost:1234/customerlist";
            var postoption = {
                headers: {'Content-Type':'application/json'},
                method: "POST",   
                body:JSON.stringify(customerinfo) // array to JSON
            }
        }    

        fetch(url, postoption)
        .then(response=>response.json())
        .then(serverRes => {
            updateMsg(fullname + " Added Successfully !");
            getCustomer(); // to reload the list after adding new record
            updateId(0);
            updateButton("Save Customer");
            pickName("");
            pickCity("");
            pickNumber("");
            pickProduct("");
        })
    }

    const deleteUser = (userid, name) => {
        var url = "http://localhost:1234/customerlist/"+userid;
        var postoption = {
            headers: {'Content-Type':'application/json'},
            method: "DELETE"
        }
        fetch(url, postoption)
        .then(response=>response.json())
        .then(serRes=>{
            updateMsg(name + " Deleted Successfully !");
            getCustomer(); // reload the list after delete record
        })
    }

    let[userid, updateId] = useState(0);
    const editUser = (index) => {
        pickName( allcustomer[index].name );
        pickNumber( allcustomer[index].mobile );
        pickCity( allcustomer[index].city );
        pickProduct( allcustomer[index].product );
        updateId(allcustomer[index].id); 
        updateButton("Update Customer");
    }  

    return(
        <div className='container'>
            <div className='row'>
                <div className='col-lg-3'>
                    <table className='table table-bordered'>
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
                                    <button onClick={save}> {mybtn} </button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div className='col-lg-9'>
                    <h2 align="center"> 
                        Crud Operation : {allcustomer.length} 
                    </h2>
                    <p align="center">
                        {msg}
                    </p>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Mobile</th>
                                <th>City</th>
                                <th>Product</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allcustomer.map((customer, index)=>{
                                    return(
                                        <tr key={index}>
                                            <td> {customer.id} </td>
                                            <td> {customer.name} </td>
                                            <td> {customer.mobile} </td>
                                            <td> {customer.city} </td>
                                            <td> {customer.product} </td>
                                            <td> 
                                                <button onClick={editUser.bind(this, index)}>Edit</button> 
                                                <button onClick={deleteUser.bind(this, customer.id, customer.name)}> Delete </button> 
                                                <Link to = {`/edituser/${customer.id}`}>Edit</Link> 
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
// backtick symbol to combine string and varaible 
export default Mycrud;