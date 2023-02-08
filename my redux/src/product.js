import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Myproduct = () =>{
    let[pname, pickName]= useState("");
    let[pprice, pickPrice] = useState("");
    let[pqty, pickQty] = useState("");
    let[msg, updateMessage] = useState("");
    
    let dispatch = useDispatch();
    let allproduct = useSelector(state=>state.ProductList);

    const save = () =>{
        let pinfo = {name:pname, price:pprice, qty:pqty};
        let dispatchData = {type:"addproduct", details:pinfo};
        dispatch(dispatchData);
        updateMessage(pname + " Details Sent to Store !");
        pickName(""); pickPrice(""); pickQty("");
    }

    const deleteItem = (index) => {
        let dispatchData = {type:"delproduct", itemindex:index}
        dispatch(dispatchData);
        updateMessage("Product Details Deleted Successfully !");
    }

    return(
        <div className="container mt-4">
        <div className="row">
            <div className="col-lg-12">
                <h1 className="m-3 text-center">
                  {allproduct.length} : Product Management 
                </h1>
                <p className=" text-center text-danger">{msg}</p>
                <p className="text-center">
                    <input type="text" className="m-3" placeholder="Name" 
                    onChange={obj=>pickName(obj.target.value)} 
                    value={pname} />

                    <input type="text" className="m-3" placeholder="Price" 
                    onChange={obj=>pickPrice(obj.target.value)} 
                    value={pprice} />

                    <input type="text" className="m-3" placeholder="Qty" 
                    onChange={obj=>pickQty(obj.target.value)} 
                    value={pqty} />
                    
                    <button className="btn btn-primary m-3" 
                    onClick={save}>Save Product</button>
                </p>
                <p className="text-center"> Available Products </p>
                <table className="table table-bordered">
                    <thead>
                        <tr className="bg-light text-primary">
                            <th>Sl No</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allproduct.map((product, index)=>{
                                return(
                                    <tr key={index}>
                                        <td> {index} </td>
                                        <td> {product.name} </td>
                                        <td> {product.price} </td>
                                        <td> {product.qty} </td>
                                        <td>
                                            <button 
                                                className="btn btn-danger btn-sm" 
                                                onClick={deleteItem.bind(this, index)}>
                                                Delete
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

export default Myproduct;