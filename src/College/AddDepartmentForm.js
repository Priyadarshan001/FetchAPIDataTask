import React, { useState } from "react";
import "../style.css";

function AddDepartmentForm(props) {
  console.log("props inside adddept", props);
  const newDeptObj = {
    dept: props.dept,
    employees: [
      {
        Id: null,
        Name: "",
        Age: null,
        Salary: null,
      },
    ],
  };

  const [newDept, setNewDept] = useState(newDeptObj);

  const addNewDepartment = () => {
    props.addNewDept(newDept);
    setNewDept(newDeptObj);
    console.log("New dept 2", newDept);
  };

  function changeDept(e) {
    setNewDept((prev) => {
      return { ...prev, dept: e.target.value };
    });
  }
  console.log("new Dept: ", newDept);
  return (
    <div className="arraydata">
      <input
        placeholder="Add new department"
        type="text"
        value={newDept.dept}
        onChange={(e) => changeDept(e)}
      />
      <button onClick={addNewDepartment}>Add Department</button>
    </div>
  );
}

export default AddDepartmentForm;
