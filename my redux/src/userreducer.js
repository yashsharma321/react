
const UserList = (state=[], action) =>{
    let mydata = Object.assign([], state);

    if(action.type=="adduser"){
        mydata.push(action.name)
    }

    if(action.type=="removeuser"){
        mydata.splice(action.userindex, 1);
    }


    return mydata;
}

export default UserList;