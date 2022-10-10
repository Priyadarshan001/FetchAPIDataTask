import React, { useState } from "react";
import "../style.css";

function EditDepartmentForm(props) {
  console.log("props", props);

  const [newDept, setNewDept] = useState(props.editedDept);
<<<<<<< HEAD

  React.useEffect(() => {
    setNewDept(props.editedDept);
  }, [props.editedDept]);

  const editDepartment = () => {
    props.editDepartment(newDept, props.indexOfEditedDept);
=======
  var [showEditInput, setShowEditInput]= useState(false)
  
  
  React.useEffect(() => {
    setNewDept(props.editedDept);
}, [props.editedDept])
  
const editDepartment = () => {
    props.editDepartment(newDept, props.indexOfEditedDept)
    setShowEditInput(!showEditInput)
    // props.addNewDept(newDept);
    // setNewDept(newDept)
    // console.log("New dept 2", newDept);
>>>>>>> a59a0097f2873073f0fe7adcbf9f9aa75273d6df
  };

  function changeDept(e) {
    setNewDept((prev) => {
      return { ...prev, dept: e.target.value };
    });
  }
  function changeName(e,index) {
    let toUpdate = newDept.employees[index]
    let nextRemainingArray = newDept.employees.slice(index+1)
    let prevRemainingArray = newDept.employees.slice(0,index)
    console.log("next rem array", nextRemainingArray)
    console.log("prev rem array", prevRemainingArray)
    toUpdate = {...toUpdate, Name:e.target.value}
    setNewDept((prev) => {return {...prev, employees: [...prevRemainingArray, toUpdate, ...nextRemainingArray]}})
  }

  function changeAge(e,index) {
    let toUpdate = newDept.employees[0]
    let nextRemainingArray = newDept.employees.slice(index+1)
    let prevRemainingArray = newDept.employees.slice(0,index)
    toUpdate = {...toUpdate,Age:e.target.value}
    setNewDept((prev) => {return {...prev, employees: [...prevRemainingArray, toUpdate, ...nextRemainingArray]}})
  }

  function changeSalary(e,index) {
    let toUpdate = newDept.employees[0]
    let nextRemainingArray = newDept.employees.slice(index+1)
    let prevRemainingArray = newDept.employees.slice(0,index)
    toUpdate = {...toUpdate,Salary:e.target.value}
    setNewDept((prev) => {return {...prev, employees: [...prevRemainingArray, toUpdate, ...nextRemainingArray]}})
  }

<<<<<<< HEAD
  console.log("editing Dept: ", newDept);
  return (
    <div className="editform">
=======
  console.log("editing Dept: ", newDept)
  return ( showEditInput?
    <div className="arraydata">
>>>>>>> a59a0097f2873073f0fe7adcbf9f9aa75273d6df
      <input
        placeholder="Enter new dept name"
        type="text"
        value={newDept.dept}
        onChange={(e) => changeDept(e)}
      />
      {newDept.employees.map((emp,index)=> {
      return (
      <div>
        <input
        placeholder="Edit employee name"
        type="text"
        value={emp.Name}
        onChange={(e) => changeName(e,index)}
      />
      <input
        placeholder="Edit employee age"
        type="text"
        value={emp.Age}
        onChange={(e) => changeAge(e,index)}
      />
      <input
        placeholder="Edit employee salary"
        type="text"
        value={emp.Salary}
        onChange={(e) => changeSalary(e,index)}
      />
      </div>)   
      })}

      
      <button onClick={editDepartment}>Edit Department</button>
    </div>
  :"");
}

export default EditDepartmentForm;
