const UserList = () =>{
    let users = ["Ramesh", "Suresh", "Mahesh", "Ganesh", "Yogesh", "Brijesh", "Chitesh", "Gitesh", "Dinesh", "Jitesh"];
    return(
        <div className="container">
            <h2>Total Users - {users.length}</h2>
            {
                users.map((user, index)=>{
                    return(
                        <p key={index} className='item'>{user}</p>
                    )
                })
            }
        </div>
    )
}

export default UserList;