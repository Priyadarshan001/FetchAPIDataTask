import React, { useState } from "react";
import "./Empstyle.css";
import { departments } from "./const";
import AddEmployeeDetails from "./AddEmployeeDetails";

function EmployeeData() {
  const [showInput, setShowInput] = useState(false);
  const [formData, setFormData] = useState({ name: "", dept: 30 });
  const [empData, setEmpData] = useState([]);
  const [showAddButton, setshowAddButton] = useState(false);
  const [showAddDetails, setShowAddDetails] = useState(false);

  const showForm = () => {
    setShowInput(true);
    setshowAddButton(false);
    setShowAddDetails(false);
  };
  {
    console.log("EMP DATA", formData);
  }
  const addName = (e) => {
    setFormData((prev) => {
      return { ...prev, name: e.target.value };
    });
  };
  const addDepartment = (event) => {
    setFormData((prev) => {
      return { ...prev, dept: event.target.value };
    });
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

  const showDetails = () => {
    setshowAddButton(true);
    setShowInput(false);
    setShowAddDetails(false);
  };

  const showDetailsField = () => {
    setShowInput(false);
    setshowAddButton(true);
    setShowAddDetails(!showAddDetails);
  };
  return (
    <div className="maindiv">
      <h4 className="h4">EMPLOYEE DATA</h4>
      <div style={{ display: "flex" }}>
        <div className="div2">
          <div>
            {empData.map((item, index) => {
              let selectedObj = departments.find((i) => {
                return i.DepartmentId == item.dept;
              });

              return (
                <div key={index} className="data" onClick={showDetails}>
                  <div>Name:{item.name}</div>
                  <div>Department:{selectedObj?.DepartmentName}</div>
                </div>
              );
            })}
          </div>

          <button className="btn" onClick={showForm} style={{ width: "100%" }}>
            Add an Employee
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
              <AddEmployeeDetails empData={empData} />
              {/* <button className="btn2" onClick={() => setShowAddDetails(false)}>
                Cancel
              </button> */}
              {/* <button className="btn2">Save</button> */}
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
                  onChange={addName}
                />
                Department
                <select value={formData.dept} onChange={addDepartment}>
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
        </div>
      </div>
    </div>
  );
}

export default EmployeeData;
