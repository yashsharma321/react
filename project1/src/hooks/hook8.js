import React, { useEffect, useState } from "react";

const Hookpage8 = () => {
    let [postlist, updatePost] = useState([]);

    const getPost = () => {
        var url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(serverResponse => serverResponse.json())
        .then(postArray => {
            updatePost(postArray);
        })
    }

    useEffect(()=>{
        getPost();
    }, [1]); 

    return(
        <div className="container">
            <h1> React useState(), useEffect() fetch() API </h1>

            <p> Total Post Are : {postlist.length}</p>
            <div className="datagrid">
                {
                    postlist.map((post, index)=>{
                        return(
                            <div className="myuser" key={index}> 
                                <h3> {post.id} </h3>
                                <p> {post.title} </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Hookpage8;