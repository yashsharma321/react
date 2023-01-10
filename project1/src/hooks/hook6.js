import React, {useState, useEffect} from 'react';

const Hookpage6 = () => {
    let [userlist, updateUser] = useState( [] );

    const getuser = () => {
        fetch("user.json") //public folder by default 
        .then(myresponse => myresponse.json() ) // then-> capture & convert to json
        .then(userArray => { // then-> convert to array
            updateUser(userArray);
        })
    }

    return(
        <div className='container'>
            <h1> React fetch() Api Example</h1>
            <button onClick={getuser}> Show Users </button>
            <h2> Total Users : {userlist.length} </h2>
            
            <div className='datagrid'>
                {
                    userlist.map((name, index) =>{
                        return(
                            <p className='myuser' key={index}> {name} </p>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Hookpage6;