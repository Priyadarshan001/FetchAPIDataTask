import React, { useState } from "react";
import "../style.css";

function Deptform(props) {
  const [newDept, setNewDept] = useState("");

  const addNewDepartment = () => {
    console.log("New dept", setNewDept);
    setNewDept("");
    props.addNewDept({ dept: newDept });
  };

  return (
    <div className="arraydata">
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
