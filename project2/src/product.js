const ProductList = () =>{
    let products = ["Mouse", "Keyboard", "Laptop", "Tablet", "Headset", "Earphone", "Printer", "UPS", "CPU", "Speaker"];
    return(
        <div className="container">
            <h2>Total products - {products.length}</h2>
            {
                products.map((product, index)=>{
                    return(
                        <p key={index} className="item">{product}</p>
                    )
                })
            }
        </div>
    )
}

export default ProductList;