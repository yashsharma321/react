import { useSelector } from "react-redux";

const Mydashboard = () =>{
    let alluser = useSelector(state=>state.UserList);
    let allproduct = useSelector(state=>state.ProductList);
    let bloglist = useSelector(state=>state.ApiList);

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1 className="text-primary m-3"> Dashboard </h1>
                    <p className="text-center"> 
                        {alluser.length} : Users From Redux Store 
                    </p>
                    <table className="table table-bordered">
                        <thead>
                            <tr className="bg-light text-primary">
                                <th>Sl No</th>
                                <th>Full Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                alluser.map((name, index)=>{
                                    return(
                                        <tr key={index}>
                                            <td> {index+1} </td>
                                            <td> {name} </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                    <p className="text-center mt-5"> Products From Redux Store </p>
                    <table className="table table-bordered">
                        <thead>
                            <tr className="bg-light text-primary">
                                <th>Sl No</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
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
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div className="row">
                    <div className="col-lg-12 text-center mb-5">
                        <h1>My Api : {bloglist.length}</h1>
                    </div>
                    {
                        bloglist.map((blog, index)=>{
                            return(
                                <div className="col-lg-3 mb-4" key={index}>
                                    <p className="bg-info text-white p-4 rounded shadow-lg">
                                        {blog.body}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div> 
            </div>
        </div>
    )
}

export default Mydashboard;