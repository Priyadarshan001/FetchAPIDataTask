import React, { useState } from "react";
import "../style.css";

function Deptform(props) {
  const [newDept, setNewDept] = useState("");

  const addNewDepartment = () => {
    console.log("array value ", props);
    let newArray = props.myArray;
    newArray.push({ dept: newDept });
    console.log("Updated Array", newArray);
    props.setArray(newArray);
  };
  return (
    <div className="deptFormInput">
      <input
        placeholder="Add new department"
        type="text"
        value={newDept}
        onChange={(e) => setNewDept(e.target.value)}
      />
      <button onClick={addNewDepartment}>Add Department</button>
    </div>
  );
}

export default Deptform;
