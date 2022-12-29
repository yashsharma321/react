import React, {useState} from "react";
import './transport.css';

const TransportDetails = () => {
    let[transport, updateTransport] = useState([]);
    let[transportnum, updateTransportnum] = useState("");
    let[rootname, updateRootname] = useState("");
    let[size, updateSize] = useState("");
    let[drivername, updateDrivername] = useState("");
    let[drivermobile, updateDrivermobile] = useState("");
    let[msg, updateMsg] = useState("");
    let[clr, updateClr ] = useState("blue");

    const save = () =>{
        let newtransport = {
            tnum: transportnum,
            rname: rootname,
            s: size,
            dname: drivername,
            dmob: drivermobile
        };

        updateTransport(transport = [...transport, newtransport]);
        updateClr("green");
        updateMsg(transportnum + " Added Successfully!");
        updateTransportnum(""); updateRootname(""); updateSize(""); updateDrivername(""); updateDrivermobile(""); 
        
    }

    const del = (index, name) => {
        transport.splice(index, 1);
        updateTransport(transport = [...transport]);
        updateClr("red");
        updateMsg(name + " Deleted Successfully!");
    }

    return(
        <div className="container">
            <p style={{color:clr}}>{msg}</p>
            <table className="lefttable" align="left">
                <tbody>
                    <tr>
                        <td>
                            <p className="newtransport">New Transport</p>
                        </td>
                    </tr>

                    <tr>
                        <th>Transport Number</th>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" 
                            onChange={obj=>updateTransportnum(obj.target.value)}
                            value={transportnum}/>
                        </td>
                    </tr>

                    <tr>
                        <th>Root Name</th>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" 
                            onChange={obj=>updateRootname(obj.target.value)}
                            value={rootname}/>
                        </td>
                    </tr>
 
                    <tr>
                        <th>Size</th>
                    </tr>
                    <tr>
                        <td>
                            <select 
                                onChange={obj=>updateSize(obj.target.value)}
                                value={size}
                                >
                                <option>--Select--</option>
                                <option>Small</option>
                                <option>Medium</option>
                                <option>Large</option>
                            </select>
                        </td>
                    </tr>

                    <tr>
                        <th>Driver Name</th>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" 
                            onChange={obj=>updateDrivername(obj.target.value)}
                            value={drivername}/>
                        </td>
                    </tr>

                    <tr>
                        <th>Driver Mobile No</th>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" 
                            onChange={obj=>updateDrivermobile(obj.target.value)}
                            value={drivermobile}/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button onClick={save}> Save </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="righttable" align="right" border={1} bordercolor="lightgrey" cellSpacing={0} >
                <thead>
                    <tr>
                        <th>T-Id</th>
                        <th>T-Number</th>
                        <th>Type</th>
                        <th>Transport root</th>
                        <th>Driver</th>
                        <th>Mobile No</th>
                        <th>Action</th>
                    </tr>
                    {
                        transport.map((transobj, index)=>{
                            return(
                                <tr>
                                    <td>{index}</td>
                                    <td>{transobj.tnum}</td>
                                    <td>{transobj.s}</td>
                                    <td>{transobj.rname}</td>
                                    <td>{transobj.dname}</td>
                                    <td>{transobj.dmob}</td>
                                    <td align="center">
                                        <button onClick={del.bind(this, index, transobj.tnum)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </thead>
            </table>
        </div>
    )

}
export default TransportDetails;