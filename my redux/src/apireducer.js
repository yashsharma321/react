const ApiList = (state=[], action) =>{
    
    let mydata = Object.assign([], state);
    if(action.type=="blogdata"){
        mydata = action.alldata;
    }
    return mydata;

}

export default ApiList;