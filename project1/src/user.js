import Details from "./userdetails"

const Myuser = () => {
    return(
        <section className="container">
            <h1> Component re-use, props Example </h1>
            
            <div className="datagrid">
                <Details name="Krishna" age="5" year="2001" edu="B.Arch" g="A" />
                <Details name="Balram" age="7" year="2002" edu="PHD" g="A+" />
                <Details name="Govind" age="8" year="2007" edu="B.Tech" g="A++" />
                <Details name="Nandlal" age="11" year="2004" edu="B.Arch" g="A-" />
                <Details name="Keshav" age="9" year="2005" edu="M.Tech" g="A+" />
            </div>
        </section>
    )
}

export default Myuser;