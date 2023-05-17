import React, {useState, useRef, useEffect} from "react";

const Users = () => {

  let[userlist, updateUser] = useState ([]);
  let[firstname, pickFirstName] = useState("");
  let[lastname, pickLastName] = useState("");
  let[mobileno, pickMobile] = useState("");
  let[idupload, updateId] = useState("");
  let[msg, updateMsg] = useState("");
  let[clr, updateClr] = useState("");
  let[btn, updateBtn] = useState("Add User");
  let[indexno, updateIndex] = useState(-1);  
  let fileInputRef = useRef(null);

  // function to pull array data from json file and store it in userList variable
  const getUserDetails = () => {
    var url = "http://localhost:8000/userlist";
    fetch(url)
    .then(response =>response.json())
    .then(customerArray => {
      updateUser(customerArray);
    })
  }

  useEffect(()=>{
    getUserDetails(); // Calls getUserDetails() function on page load
  });

  // get invoked when user clicks on 'Save User' or 'Update User' button
  const save = () => {
    if(firstname ==='' || lastname ==='' || mobileno ==='' || idupload ===''){      
      updateMsg("Input fields cannot be empty !");
      updateClr("orange");
    }
    else {  
      let userinfo = {
        fname : firstname,
        lname : lastname,
        mobile : mobileno,
        userid : idupload,
      } 
      
      // condition to check whether to update existing user or add a new user
      if(indexno > -1){ // update existing user
        var url = "http://localhost:8000/userlist/"+indexno;
        var postoption = {
          headers : {'Content-Type':'application/json'},
          method: "PUT",
          body: JSON.stringify(userinfo)
        } 
      }
      else { // add a new user
        url = "http://localhost:8000/userlist";
        postoption = {
          headers: {'Content-Type':'application/json'},
          method: "POST", 
          body:JSON.stringify(userinfo) // array to JSON
        }
      }
      fetch(url, postoption)
      .then(response => response.json())
      .then(serverRes => {
        getUserDetails();
        updateClr("green");
        if(indexno > -1)
          updateMsg(firstname + " Updated Successfully !");
        else
          updateMsg(firstname + " Added Successfully !");
        updateIndex(-1);
        updateBtn("Add User");
        // to empty input fields after user gets added / updated
        pickFirstName(""); pickLastName(""); pickMobile(""); updateId("");
        fileInputRef.current.value = '';
        setTimeout(() => {
          updateMsg("");
        }, 2100);
      })
    }    
  } 

  // gets invoked when user clicks on edit button.
  // it takes index of clicked value and puts those record inside input fields.
  const editUser = (index) => {
    pickFirstName(userlist[index].fname);
    pickLastName(userlist[index].lname);
    pickMobile(userlist[index].mobile);
    updateId(userlist[index].userid)
    updateIndex(userlist[index].id); // updates index from -1 to the index that needs to be updated
    updateBtn("Update User"); // changes button text from "Add User" to "Update User"
  }

  // gets invoked when user clicks on delete button.
  // it takes two parameters, 'id' and 'name'
  //'id' to delete record of the particular id and 'name' to display delete message.
  const deleteEmp = (id, name) => {
    var url = "http://localhost:8000/userlist/"+id;
    var postoption = {
      headers : {'Content-Type':'application/json'},
      method: "DELETE",
    }
    fetch(url, postoption)
    .then(response=>response.json())
    .then(serRes=>{
      updateClr("red");
      updateMsg( name + " Deleted Successfully !")
      getUserDetails();
      pickFirstName(""); pickLastName(""); pickMobile(""); updateId("");
      setTimeout(() => {
        updateMsg("");
      }, 2100);
    })
  }

  return(
    <div className="container">
      <h2> Number of Users - {userlist.length} </h2>
      <p id="msg" style={{color:clr}}> <b> {msg} </b> </p>
      <div className="user-table">
        <div>
          <table align="left" cellPadding={10}>
            <tbody>
              <tr>
                <td>First Name</td>
                <td>
                  <input type="text"
                  onChange={obj=>pickFirstName(obj.target.value)}
                  value={firstname}/>
                </td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>
                  <input type="text"
                  onChange={obj=>pickLastName(obj.target.value)}
                  value={lastname}/>
                </td>
              </tr>
              <tr>
                <td>Contact No</td>
                <td>
                  <input type="text"
                  onChange={obj=>pickMobile(obj.target.value)}
                  value={mobileno}/>
                </td>
              </tr>
              <tr>
                <td>Upload ID</td>
                <td>
                  <input type="file" accept="image/*" ref={fileInputRef}
                  onChange={(obj)=> updateId(URL.createObjectURL(obj.target.files[0]))}/>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <button className="btn-save" onClick={save}>{btn}</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <table style={{'text-align': 'center'}} align="right" cellPadding={7} border={1}>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Mobile No</th>
                <th>ID Proof</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                userlist.map((user, index)=>{
                  return(
                    <tr key={index}>
                      <td>{user.id}</td>
                      <td>{user.fname}</td>
                      <td>{user.lname}</td>
                      <td>{user.mobile}</td>
                      <td><img src={user.userid} alt="ID Card" className="id-image" /></td>
                      <td>
                        <button className="btn-edit" onClick={editUser.bind(this, index)}>Edit</button>
                        <button className="btn-delete" onClick={deleteEmp.bind(this, user.id, user.fname)}>Delete</button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Users;

