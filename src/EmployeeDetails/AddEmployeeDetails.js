import React, { useState } from "react";
import "./Empstyle.css";

function AddEmployeeDetails(props) {
  const [detailedFormData, setDetailedFormData] = useState({
    id: "",
    dept: "",
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  const [detailedData, setDetailedData] = useState([]);

  const addID = (e) => {
    console.log("id value", e.target.value);
  };
  const addDepartment = (e) => {
    console.log("dept value", e.target.value);
  };
  const addName = (e) => {
    setDetailedFormData((prev) => {
      return { ...prev, name: e.target.value };
    });

    console.log("name value", detailedFormData);
  };
  const addEmail = (e) => {
    console.log("email value", e.target.value);
  };
  const addContact = (e) => {
    console.log("contact value", e.target.value);
  };
  const addAddress = (e) => {
    console.log("address value", e.target.value);
  };

  return (
    <div className="inputfield">
      <div className="inputBox">
        <label>ID</label>
        <input
          type="text"
          // placeholder={props.dept}
          value={detailedFormData.id}
          onChange={addID}
        />
      </div>

      <div className="inputBox">
        <label>Department</label>
        <input
          type="text"
          value={detailedFormData.dept}
          onChange={addDepartment}
        />
      </div>

      <div className="inputBox">
        <label>Name</label>
        <input
          type="text"
          // placeholder={props.name}
          value={detailedFormData.name}
          onChange={addDepartment}
        />
      </div>

      <div className="inputBox">
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter email here."
          value={detailedFormData.email}
          onChange={addDepartment}
        />
      </div>

      <div className="inputBox">
        <label>Contact</label>
        <input
          type="text"
          placeholder="Enter contact number"
          value={detailedFormData.contact}
          onChange={addDepartment}
        />
      </div>

      <div className="inputBox">
        <label>Address</label>
        <textarea
          type="text"
          placeholder="Enter city name."
          value={detailedFormData.address}
          onChange={addDepartment}
        />
      </div>
    </div>
  );
}

export default AddEmployeeDetails;
