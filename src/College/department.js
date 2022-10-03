import React, { useState } from "react";
import "../style.css";

function DepartmentComponent(props) {
  const [deptId, setDeptId] = useState();
  console.log("dept Id ", props.myArray.);

  const editDepartment = () => {
    let editItem = props.myArray.filter((item) => item.dept === deptId);
    console.log("check :", check);
  };

  return (
    <div className="arraydata">
      {props.myArray.map((value, index) => {
        return (
          <div key={index}>
            <button onClick={() => setDeptId(value)}>{value.dept}</button>
            <button onClick={editDepartment}>Edit</button>
            <button>Delete</button>
          </div>
        );
      })}

      {deptId && (
        <div>
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Salary</th>
              </tr>
              {props.myArray
                .filter((dept) => dept == deptId)
                .map((dept_obj) => {
                  return dept_obj.employees.map((data) => {
                    return (
                      <tr key={data.Id}>
                        <td>{data.Name}</td>
                        <td>{data.Age}</td>
                        <td>{data.Salary}</td>
                      </tr>
                    );
                  });
                })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default DepartmentComponent;
