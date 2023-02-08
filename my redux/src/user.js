import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; 
// (send the data, bring the data from the store)
const Myuser = () =>{
    let [fullname, pickName] = useState("");
    let [msg, updateMessage] = useState("");
    const dispatch = useDispatch(); // create object of useDispatch 
    const save = () => {
        var dispatchData = { type:"adduser", name:fullname };
        dispatch(dispatchData); // dispatching: action and data to store
        updateMessage(fullname + " Sent to Store !");
        pickName("");
    }

    const deleteUser = (index) => {
        var dispatchData = { type:"removeuser", userindex:index };
        updateMessage("User Details Deleted");
        dispatch(dispatchData); // dispatching: action and data to store
    }

    //fetch data from redux store
    let alluser = useSelector (state=>state.UserList); // get user array from store

    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1 className="m-3"> 
                        {alluser.length} : User Management
                    </h1>
                    <p className="text-danger"> {msg} </p>
                    <p>
                        Enter Full Name: 
                        <input 
                            type="text" 
                            className="m-3" 
                            onChange={obj=>pickName(obj.target.value)} 
                            value={fullname} 
                        />
                        <button className="btn btn-primary m-3" onClick={save}>Save User</button>
                    </p>
                    <p className="text-center"> Available Users </p>
                    <table className="table table-bordered">
                        <thead>
                            <tr className="bg-light text-primary">
                                <th>Sl No</th>
                                <th>Full Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                alluser.map((name, index)=>{
                                    return(
                                        <tr key={index}>
                                            <td> {index+1} </td>
                                            <td> {name} </td>
                                            <td>
                                                <button 
                                                    className="btn btn-danger btn-sm" 
                                                    onClick={deleteUser.bind(this, index)}> Delete
                                                </button>
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

export default Myuser;