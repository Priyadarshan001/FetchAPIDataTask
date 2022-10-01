import React, { useState } from "react";
import "../style.css";

function DepartmentComponent(props) {
  const [deptId, setDeptId] = useState();

  console.log("department id : ", deptId);
  return (
    <div className="arraydata">
      {props.myArray.map((value, index) => {
        return (
          <div key={index}>
            <button onClick={() => setDeptId(value.id)}>{value.dept}</button>
          </div>
        );
      })}

      {deptId && (
        <div>
          {props.myArray
            .filter((dept) => dept.id == deptId)
            .map((dept_obj) => {
              return dept_obj.employees.map((data) => {
                return (
                  <div key={data.Id}>
                    <p>{data.Name}</p>
                    <p>{data.Age}</p>
                    <p>{data.Salary}</p>
                  </div>
                );
              });
            })}
        </div>
      )}
    </div>
  );
}

export default DepartmentComponent;
