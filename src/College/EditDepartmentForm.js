import React, { useState } from "react";
import "./style2.css";

function EditDepartmentForm(props) {
  const [newDept, setNewDept] = useState(props.editedDept);

  React.useEffect(() => {
    setNewDept(props.editedDept);
  }, [props.editedDept]);

  const editDepartment = () => {
    props.editDepartment(newDept, props.indexOfEditedDept);
  };

  function changeDept(e) {
    setNewDept((prev) => {
      return { ...prev, dept: e.target.value };
    });
  }

  function changeName(e, index) {
    let toUpdate = newDept.employees[index];
    let nextRemainingArray = newDept.employees.slice(index + 1);
    let prevRemainingArray = newDept.employees.slice(0, index);
    toUpdate = { ...toUpdate, Name: e.target.value };
    setNewDept((prev) => {
      return {
        ...prev,
        employees: [...prevRemainingArray, toUpdate, ...nextRemainingArray],
      };
    });
  }

  function changeAge(e, index) {
    let toUpdate = newDept.employees[0];
    let nextRemainingArray = newDept.employees.slice(index + 1);
    let prevRemainingArray = newDept.employees.slice(0, index);
    toUpdate = { ...toUpdate, Age: e.target.value };
    setNewDept((prev) => {
      return {
        ...prev,
        employees: [...prevRemainingArray, toUpdate, ...nextRemainingArray],
      };
    });
  }

  function changeSalary(e, index) {
    let toUpdate = newDept.employees[0];
    let nextRemainingArray = newDept.employees.slice(index + 1);
    let prevRemainingArray = newDept.employees.slice(0, index);
    toUpdate = { ...toUpdate, Salary: e.target.value };
    setNewDept((prev) => {
      return {
        ...prev,
        employees: [...prevRemainingArray, toUpdate, ...nextRemainingArray],
      };
    });
  }

  return (
    <div className="editdata">
      <input
        placeholder="Enter new dept name"
        type="text"
        value={newDept.dept}
        onChange={(e) => changeDept(e)}
      />
      {newDept.employees.map((emp, index) => {
        return (
          <div>
            <input
              placeholder="Edit employee name"
              type="text"
              value={emp.Name}
              onChange={(e) => changeName(e, index)}
            />
            <input
              placeholder="Edit employee age"
              type="text"
              value={emp.Age}
              onChange={(e) => changeAge(e, index)}
            />
            <input
              placeholder="Edit employee salary"
              type="text"
              value={emp.Salary}
              onChange={(e) => changeSalary(e, index)}
            />
          </div>
        );
      })}

      <button onClick={editDepartment}>Edit Department</button>
    </div>
  );
}

export default EditDepartmentForm;
