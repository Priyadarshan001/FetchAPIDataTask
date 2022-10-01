import React from "react";
import Deptform from "./deptform";
import DepartmentComponent from "./department";

function CollegeDepartment() {
  const [empArray, setEmpArray] = React.useState([
    {
      dept: "COMPUTER SCIENCE",
      id: "123",
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
      id: "234",
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
    console.log("department", dept);
    let empArrayCopy = empArray.slice();
    console.log("emp array", empArrayCopy);
    empArrayCopy.push(dept);
    console.log("emp array after", empArrayCopy);
    setEmpArray(empArrayCopy);
  };
  return (
    <div>
      <DepartmentComponent myArray={empArray} />
      <Deptform myArray={empArray} addNewDept={addNewDeptToArray} />
    </div>
  );
}

export default CollegeDepartment;
