const UserList = () =>{
    let users = ["Mouse", "Keyboard", "Laptop", "Tablet", "Pencil", "Pen", "Sharpner", "Color Box", "Bottle", "Bag"];
    return(
        <div className="container">
            <h2>Total Users - {users.length}</h2>
            {
                users.map((user, index)=>{
                    return(
                        <p key={index}>{user}</p>
                    )
                })
            }
        </div>
    )
}

export default UserList;