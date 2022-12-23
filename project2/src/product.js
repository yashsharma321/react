const ProductList = () =>{
    let products = ["Mouse", "Keyboard", "Laptop", "Tablet", "Pencil", "Pen", "Sharpner", "Color Box", "Bottle", "Bag"];
    return(
        <div className="container">
            {
                products.map((product, index)=>{
                    return(
                        <p kry={index}>{product}</p>
                    )
                })
            }
        </div>
    )
}

export default ProductList;