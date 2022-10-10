import React from "react";
import "../style.css";
import EditDepartmentForm from "./EditDepartmentForm";

function DepartmentComponent(props) {
  const [departmentClicked, setDeptClicked] = React.useState();
  const [editedDept, setEditedDept] = React.useState();
  const [indexOfEditedDept, setIndex] = React.useState(0);
  console.log("dept Id ", props.myArray);

  const editDepartment = (index) => {
    let dep = props.myArray[index];
    console.log("dept to edit", dep.dept);
    setEditedDept(dep);
    setIndex(index);
  };

  return (
    <div>
      <div>
        {props.myArray.map((value, index) => {
          return (
            <div key={index}>
              <button
                className="deptvaluebtn"
                onClick={() => setDeptClicked(value)}
              >
                {value.dept}
              </button>
              &nbsp;
              <button onClick={() => editDepartment(index)}>Edit</button>
            </div>
          );
        })}
      </div>
      {departmentClicked && (
        <div className="tdata">
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Salary</th>
              </tr>
              {departmentClicked.employees.map((data) => {
                return (
                  <tr key={data.Id}>
                    <td>{data.Name}</td>
                    <td>{data.Age}</td>
                    <td>{data.Salary}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      <div className="editform">
        {editedDept && (
          <EditDepartmentForm
            editedDept={editedDept}
            indexOfEditedDept={indexOfEditedDept}
            editDepartment={props.editDepartment}
          />
        )}
      </div>
    </div>
  );
}

export default DepartmentComponent;
