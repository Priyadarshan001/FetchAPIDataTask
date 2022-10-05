import React, { useState } from "react";
import "../style.css";

function EditDepartmentForm(props) {
  console.log("props", props);

  const [newDept, setNewDept] = useState(props.editedDept);
  
  
  React.useEffect(() => {
    setNewDept(props.editedDept);
}, [props.editedDept])
  
const editDepartment = () => {
    props.editDepartment(newDept, props.indexOfEditedDept)
    // props.addNewDept(newDept);
    // setNewDept(newDept)
    // console.log("New dept 2", newDept);
  };

  function changeDept(e) {
    setNewDept((prev) => {return {...prev,dept: e.target.value}})
  }

  console.log("editing Dept: ", newDept)
  return (
    <div className="arraydata">
      <input
        placeholder="Enter new dept name"
        type="text"
        value={newDept.dept}
        onChange={(e) => changeDept(e)}
      />
      <button onClick={editDepartment}>Edit Department</button>
    </div>
  );
}

export default EditDepartmentForm;
