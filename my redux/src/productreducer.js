const ProductList = (state=[], action) =>{
    
    let mydata = Object.assign([], state);

    if(action.type=="addproduct"){
        mydata.push(action.details);
    }

    if(action.type=="delproduct"){
        mydata.splice(action.itemindex,1);
    }

    return mydata;

}

export default ProductList;