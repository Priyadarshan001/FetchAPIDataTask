import React from "react";
import "../style.css";
import AddDepartmentForm from "./AddDepartmentForm";
import DepartmentComponent from "./DepartmentComponent";
import Practice from "./practice";

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
    empArrayCopy[index] = dept;
    console.log("index in adddept", empArrayCopy[index]);
    setEmpArray(empArrayCopy);
  };

  const showInputBox = () => {
    setShow(!show);
  };

  return (
    <div className="deptcomp">
      <div>
        <DepartmentComponent
          myArray={empArray}
          addNewDept={addNewDeptToArray}
          editDepartment={editDepartment}
        />
      </div>
      <button className="arraydata" onClick={showInputBox}>
        Add
      </button>
      {show ? (
        <AddDepartmentForm addNewDept={addNewDeptToArray} dept="" />
      ) : null}
      <div>
        {/* <Practice myarr={empArray} /> */}
        {/* <button onClick={deleteDepartment}>Delete</button> */}
      </div>
    </div>
  );
}

export default CollegeDepartment;
