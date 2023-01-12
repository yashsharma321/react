import React , {useState} from 'react';

const UserList = () =>{

    let[user, updateUser] = useState([]);
    let[book, updateBook] = useState([]);
    let[company, updateCompany] = useState([]);
    let[emp, updateEmp] = useState([]);
    
    const showUser = () => {
        fetch("user.json")
        .then(response=>response.json())
        .then(serRes=>{
            updateUser(serRes);
        })
    }

    const showBook = () => {
        fetch("book.json")
        .then(response=>response.json())
        .then(serRes=>{
            updateBook(serRes);
        })
    }

    const showCompany = () => {
        fetch("company.json")
        .then(response=>response.json())
        .then(serRes=>{
            updateCompany(serRes);
        })
    }

    const showEmp = () => {
        fetch("emp.json")
        .then(response=>response.json())
        .then(serRes=>{
            updateEmp(serRes);
        })
    }

    return(
        <div className="container">
            <h2>React fetch() Api Example</h2>
            <div className='datagrid'>
                <div>
                    <h3 align="center">User List</h3>
                    {
                        user.map((user, index)=>{
                            return(
                                <p key={index}>{user}</p>
                            )
                        })
                    }
                    <p><button className='citybtn' onClick={showUser}>get Data</button></p>
                </div>

                <div>
                    <h3 align='center'>Book List</h3>
                    {
                        book.map((book, index)=>{
                            return(
                                <p key={index}>{book}</p>
                            )
                        })
                    }
                    <p><button className='citybtn' onClick={showBook}>get Data</button></p>
                </div>

                <div>
                    <h3 align="center">Company List</h3>
                    {
                        company.map((company,index)=>{
                            return(
                                <p key={index}>{company}</p>
                            )
                        })
                    }
                    <p><button className='citybtn' onClick={showCompany}>get Data</button></p>
                </div>

                <div>
                    <h3 align="center">Employee List</h3>
                    {
                        emp.map((emp,index)=>{
                            return(
                                <p key={index}>{emp}</p>
                            )
                        })
                    }
                    <p><button className='citybtn' onClick={showEmp}>get Data</button></p>
                </div>

            </div>
        </div>
    )
}

export default UserList;