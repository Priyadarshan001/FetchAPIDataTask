import React, { useState } from "react";
import "../style.css";

function Deptform(props) {
  const [newDept, setNewDept] = useState([
    {
      dept: "",
      employees: [
        {
          Id: null,
          Name: "",
          Age: null,
          Salary: null,
        },
      ],
    },
  ]);
  const addNewDepartment = () => {
    setNewDept("");
    props.addNewDept({ dept: newDept });
    console.log("New dept 2", newDept);
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
