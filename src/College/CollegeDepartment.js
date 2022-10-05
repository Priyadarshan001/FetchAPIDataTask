import React from "react";
import "../style.css";
import AddDepartmentForm from "./AddDepartmentForm";
import DepartmentComponent from "./DepartmentComponent";

function CollegeDepartment() {
  const [show, setShow] = React.useState(false);
  const [empArray, setEmpArray] = React.useState([
    {
      dept: "COMPUTER SCIENCE",
      employees: [
        {
          Id: 1,
          Name: "ARJUN",
          Age: 20,
          Salary: 20000,
        },
        {
          Id: 2,
          Name: "RAHUL",
          Age: 21,
          Salary: 25000,
        },
      ],
    },
    {
      dept: "MECHANICAL",
      employees: [
        {
          Id: 1,
          Name: "VIRAT",
          Age: 28,
          Salary: 100000,
        },
      ],
    },
  ]);

  const addNewDeptToArray = (dept) => {
    let empArrayCopy = empArray.slice();
    empArrayCopy.push(dept);
    setEmpArray(empArrayCopy);
  };

  const editDepartment = (dept, index) => {
    let empArrayCopy = empArray.slice();
    empArrayCopy[index]= dept;
    setEmpArray(empArrayCopy);
  };


  const showInputBox = () => {
    setShow(!show);
  };

  return (
    <div>
      <DepartmentComponent myArray={empArray} addNewDept={addNewDeptToArray} editDepartment={editDepartment}/>
      <button className="arraydata" onClick={showInputBox}>
        Add
      </button>
      {show ? (
        <AddDepartmentForm addNewDept={addNewDeptToArray} dept=""/>
      ) : null}
    </div>
  );
}

export default CollegeDepartment;
