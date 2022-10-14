import React from "react";
import { useState } from "react";

const AddEmployeeDetails = ({ dept, setEmpData }) => {
  const [detailedFormData, setDetailedFormData] = useState(dept.data);
  const [showForm, setShowForm] = useState(true);

  const onChangeFormData = (value, key) => {
    setDetailedFormData((previousData) => ({ ...previousData, [key]: value }));
  };

  const saveEmpData = () => {
    setEmpData((previousData) => {
      const newArr = [...previousData];
      newArr[dept.index] = detailedFormData;
      return newArr;
    });
    setShowForm(false);
  };

  return (
    <div className="inputfield">
      {showForm && (
        <div>
          <div className="inputBox">
            <label>ID</label>
            <input
              type="text"
              value={detailedFormData?.id}
              onChange={(e) => onChangeFormData(e.target.value, "id")}
            />
          </div>

          {/* <div className="inputBox">
      Department
      <select value={detailedFormData} onChange={onChangeData}>
        {departments.map((val, index) => (
          <option key={index} value={val.DepartmentId}>
            {val.DepartmentName}
          </option>
        ))}
      </select>
    </div> */}

          <div className="inputBox">
            <label>Name</label>
            <input
              type="text"
              // placeholder={props.name}
              value={detailedFormData?.name}
              onChange={(e) => onChangeFormData(e.target.value, "name")}
            />
          </div>

          <div className="inputBox">
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter email here."
              value={detailedFormData?.email}
              onChange={(e) => onChangeFormData(e.target.value, "email")}
            />
          </div>

          <div className="inputBox">
            <label>Contact</label>
            <input
              type="text"
              placeholder="Enter contact number"
              value={detailedFormData?.contact}
              onChange={(e) => onChangeFormData(e.target.value, "contact")}
            />
          </div>

          <div className="inputBox">
            <label>Address</label>
            <textarea
              type="text"
              placeholder="Enter city name."
              value={detailedFormData?.address}
              onChange={(e) => onChangeFormData(e.target.value, "address")}
            />
          </div>
          <button className="btn2" onClick={saveEmpData}>
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default AddEmployeeDetails;
