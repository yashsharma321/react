import React, {useState, useEffect} from 'react';
// on page load data should be there = useEffect() function
const Hookpage7 = () => {
    let[userlist, updateUser] = useState ([]);

    const getUser = () =>{
        var url = 'https://jsonplaceholder.typicode.com/users';
        fetch(url)
        .then(serverResponse => serverResponse.json())
        .then(userArray=>{
            updateUser(userArray);
        })
    }

    // useEffect is just like onload

    useEffect( ()=>{
        getUser();
    }, [1]); //no of time the function will be called


    return(
        <div className='container'>
            <h1> React useState(), fetch() API </h1>
            <p><button onClick={getUser}>Show Users</button></p>
            <p> Total Users : {userlist.length} </p>
            <div className='datagrid'>
                {
                    userlist.map((user,index)=>{
                        return(
                            <div className='myuser' key={index}>
                                <h3> {user.name} </h3>
                                <p> {user.email} </p>
                                <p> {user.address.city} </p>
                                <p> {user.company.name} </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Hookpage7;