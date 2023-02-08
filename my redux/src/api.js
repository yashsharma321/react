import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const Myapi = () =>{
    let[bloglist, updateBlog] = useState( [] );
    
    const getBlog = () =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>response.json())
        .then(blogArray=>{
            updateBlog(blogArray);
        })
    }

    useEffect(()=>{
        getBlog();
    },[1]);

    const dispatch = useDispatch();
    const save = () =>{
        var dispatchData = { type:"blogdata", alldata:bloglist};
        dispatch(dispatchData);
        alert("All Data Sent to store !");
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center mb-5">
                    <h1>My Api : {bloglist.length}</h1>
                    <button className="btn btn-primary m-3" onClick={save}>Dispatch All Data To Store</button>
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
    )
}

export default Myapi;