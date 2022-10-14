import React, { useState } from "react";
import "./Empstyle.css";
import { departments } from "./const";
import AddEmployeeDetails from "./AddEmployeeDetails";

function EmployeeData() {
  const [showInput, setShowInput] = useState(false);
  const [formData, setFormData] = useState({});
  const [empData, setEmpData] = useState([]);
  const [showAddButton, setshowAddButton] = useState(false);
  const [showAddDetails, setShowAddDetails] = useState(false);
  const [dept, setDept] = useState({});
  const [showTable, setShowTable] = useState(false);

  const showForm = () => {
    setShowInput(true);
    setshowAddButton(false);
    setShowAddDetails(false);
  };
  const onChangeEmployeeData = (value, key) => {
    setFormData((previousData) => ({ ...previousData, [key]: value }));
  };

  const saveData = () => {
    if (formData.name && formData.dept) {
      setEmpData((prev) => {
        return [...prev, formData];
      });
      setShowInput(false);
      setFormData((prev) => {
        return { ...prev, name: "" };
      });
    }
  };

  const showDetails = (index) => {
    setDept({ data: empData[index], index });
    setshowAddButton(true);
    setShowInput(false);
    setShowAddDetails(false);
  };

  const showDetailsField = () => {
    setShowInput(false);
    setshowAddButton(true);
    setShowAddDetails(!showAddDetails);
  };

  const showTableData = () => {
    setShowTable(!showTable);
  };

  return (
    <div className="maindiv">
      <h4 className="h4">EMPLOYEE DATA</h4>
      <div style={{ display: "flex" }}>
        <div className="div2">
          <div>
            {empData?.map((item, index) => {
              let selectedObj = departments.find((i) => {
                return i.DepartmentId == item.dept;
              });

              return (
                <div
                  key={index}
                  className="data"
                  onClick={() => showDetails(index)}
                >
                  <div>Name:{item.name}</div>
                  <div>Department:{selectedObj?.DepartmentName}</div>
                </div>
              );
            })}
          </div>

          <button className="btn" onClick={showForm} style={{ width: "100%" }}>
            Add an Employee
          </button>
          <button
            className="btn"
            onClick={showTableData}
            style={{ width: "100%" }}
          >
            Show data
          </button>
        </div>
        <div className="rightdiv">
          {showAddButton && (
            <div>
              <div className="addDetailsBtn">
                <button className="btn" onClick={showDetailsField}>
                  ADD
                </button>
              </div>
            </div>
          )}
          {showAddDetails && (
            <div>
              <AddEmployeeDetails dept={dept} setEmpData={setEmpData} />
            </div>
          )}

          <div className="div3">
            {showInput && (
              <div className="inputfield">
                Name
                <input
                  type="text"
                  placeholder="Enter the name here"
                  value={formData.name}
                  onChange={(e) => onChangeEmployeeData(e.target.value, "name")}
                />
                Department
                <select
                  value={formData.dept}
                  onChange={(e) => onChangeEmployeeData(e.target.value, "dept")}
                >
                  {departments.map((val, index) => (
                    <option key={index} value={val.DepartmentId}>
                      {val.DepartmentName}
                    </option>
                  ))}
                </select>
                <div>
                  <button className="btn2" onClick={() => setShowInput(false)}>
                    Cancel
                  </button>
                  <button className="btn2" onClick={saveData}>
                    Save
                  </button>
                </div>
              </div>
            )}
          </div>
          <div>
            {showTable && (
              <div>
                <table>
                  <tbody>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Department</th>
                      <th>Email</th>
                      <th>Contact</th>
                      <th>Address</th>
                    </tr>
                    {empData.map((item) => {
                      return (
                        <tr>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.dept}</td>
                          <td>{item.email}</td>
                          <td>{item.contact}</td>
                          <td>{item.address}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeData;
