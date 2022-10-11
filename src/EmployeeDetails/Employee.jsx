import React, { useState } from "react";
import "./Empstyle.css";
import { departments } from "./const";

function EmployeeData() {
  const [showInput, setShowInput] = useState(false);
  const [formData, setFormData] = useState({ name: "", dept: 30 });
  const [empData, setEmpData] = useState([]);

  const showForm = () => {
    setShowInput(true);
  };

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

  const addDetails = () => {};
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
                <div key={index} className="data" onClick={addDetails}>
                  <div>Name:{item.name}</div>
                  <div>Department:{selectedObj?.DepartmentName}</div>
                </div>
              );
            })}
          </div>

          <button className="btn" onClick={showForm}>
            Add an Employee
          </button>
        </div>

        <div className="div3">
          <div className="addDetailsBtn">
            <button className="btn">ADD</button>
          </div>

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
  );
}

export default EmployeeData;
