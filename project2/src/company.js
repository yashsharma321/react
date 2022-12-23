const CompanyList = () => {
    let companies = ["a", "b", "c"];
    return(
        <div className="conatainer">
            <h2>No. of Companies - {companies.length}</h2>
            {
                companies.map((company, index)=>{
                    return(
                        <p key={index}>{company}</p>
                    )
                })
            }
        </div>
    )
}

export default CompanyList;
