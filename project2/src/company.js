const CompanyList = () => {
    let companies = ["Tata", "Reliance", "Kotak", "Infosys", "Bajaj", "HDFC", "Boat", "Wipro", "Zomato", "Bosch" ];
    return(
        <div className="container">
            <h2>Total Companies - {companies.length}</h2>
            {
                companies.map((company, index)=>{
                    return(
                        <p key={index} className='item'>{company}</p>
                    )
                })
            }
        </div>
    )
}

export default CompanyList;
